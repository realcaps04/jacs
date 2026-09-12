import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import './JoinEmailCTA.css'

type JoinEmailCTAProps = {
  label?: string
  variant?: 'primary' | 'outline'
  className?: string
  align?: 'center' | 'start' | 'end'
}

export function JoinEmailCTA({
  label = 'Join JACS →',
  variant = 'primary',
  className = '',
  align = 'center',
}: JoinEmailCTAProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()

  useEffect(() => {
    if (open && !done) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 220)
      return () => window.clearTimeout(t)
    }
  }, [open, done])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
  }

  if (done) {
    return (
      <div className={`join-cta join-cta--${align} join-cta--done ${className}`.trim()}>
        <p className="join-cta__success">You’re in — welcome to the community.</p>
      </div>
    )
  }

  return (
    <div className={`join-cta join-cta--${align} ${open ? 'is-open' : ''} ${className}`.trim()}>
      {!open ? (
        <button
          type="button"
          className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setOpen(true)}
        >
          {label}
        </button>
      ) : (
        <form className="join-cta__form" onSubmit={onSubmit}>
          <label className="visually-hidden" htmlFor={inputId}>
            Email address
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary join-cta__submit">
            Join →
          </button>
          <button
            type="button"
            className="join-cta__close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </form>
      )}
    </div>
  )
}
