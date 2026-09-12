import { useCallback, useEffect, useState } from 'react'
import { ConvexHttpClient } from 'convex/browser'
import { makeFunctionReference } from 'convex/server'
import { getConvexUrl } from '../lib/env'
import './UpdatePopup.css'

type SiteUpdate = {
  id: string
  title: string
  body: string
  publishedAt: number
  mandatory: boolean
}

const SEEN_KEY = 'jacs-updates-seen'

const listActiveFn = makeFunctionReference<'query', Record<string, never>, SiteUpdate[]>(
  'updates:listActive',
)

function client() {
  return new ConvexHttpClient(getConvexUrl())
}

function readSeen(): string[] {
  try {
    const raw = localStorage.getItem(SEEN_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

function writeSeen(ids: string[]) {
  localStorage.setItem(SEEN_KEY, JSON.stringify([...new Set(ids)]))
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function UpdatePopup() {
  const [updates, setUpdates] = useState<SiteUpdate[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const all = await client().query(listActiveFn, {})
        if (cancelled) return
        const seen = new Set(readSeen())
        const unread = all.filter((u) => u.mandatory && !seen.has(u.id))
        setUpdates(unread)
        setOpen(unread.length > 0)
      } catch {
        if (!cancelled) {
          setUpdates([])
          setOpen(false)
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  const acknowledge = useCallback(() => {
    writeSeen([...readSeen(), ...updates.map((u) => u.id)])
    setOpen(false)
    setUpdates([])
  }, [updates])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open || updates.length === 0) return null

  return (
    <div className="update-popup" role="alertdialog" aria-modal="true" aria-labelledby="update-popup-title">
      <div className="update-popup__backdrop" />
      <div className="update-popup__panel">
        <p className="update-popup__eyebrow">Recent updates</p>
        <h2 id="update-popup-title">What’s new at JACS</h2>
        <ul className="update-popup__list">
          {updates.map((update) => (
            <li key={update.id}>
              <div className="update-popup__item-head">
                <h3>{update.title}</h3>
                <time dateTime={new Date(update.publishedAt).toISOString()}>
                  {formatDate(update.publishedAt)}
                </time>
              </div>
              <p>{update.body}</p>
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary update-popup__confirm" onClick={acknowledge}>
          Got it
        </button>
      </div>
    </div>
  )
}
