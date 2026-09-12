import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function smoothScrollTo(top: number, duration = 420) {
  if (prefersReducedMotion() || duration <= 0) {
    window.scrollTo(0, top)
    return
  }

  const start = window.scrollY
  const distance = top - start
  if (Math.abs(distance) < 2) return

  const startTime = performance.now()

  const easeOutCubic = (t: number) => 1 - (1 - t) ** 3

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1)
    window.scrollTo(0, start + distance * easeOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace(/^#/, ''))
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72
        smoothScrollTo(Math.max(0, top), 480)
        return
      }
    }

    smoothScrollTo(0, 380)
  }, [pathname, hash])

  return null
}
