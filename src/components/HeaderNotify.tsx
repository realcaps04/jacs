import { useEffect, useId, useRef, useState } from 'react'
import './HeaderNotify.css'

export function HeaderNotify() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="header-notify" ref={rootRef}>
      <button
        type="button"
        className={`header-notify__btn ${open ? 'is-open' : ''}`}
        aria-label="Notifications"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3.5c-2.8 0-5 2.1-5 4.8v2.2c0 .7-.3 1.4-.7 2L5.2 14c-.4.5-.1 1.2.5 1.2h12.6c.6 0 .9-.7.5-1.2l-1.1-1.5c-.4-.6-.7-1.3-.7-2V8.3c0-2.7-2.2-4.8-5-4.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 17.2c.4.9 1.1 1.4 2 1.4s1.6-.5 2-1.4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span className="header-notify__dot" aria-hidden="true" />
      </button>

      {open && (
        <div className="header-notify__panel" id={panelId} role="dialog" aria-label="Site notice">
          <p className="header-notify__eyebrow">Notice</p>
          <p className="header-notify__title">Website under development</p>
          <p className="header-notify__body">
            Bug fixes and improvements are ongoing. Thanks for your patience while we polish the
            experience.
          </p>
        </div>
      )}
    </div>
  )
}
