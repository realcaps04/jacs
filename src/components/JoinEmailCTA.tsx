import { useEffect, useId, useRef, useState } from 'react'
import { useGoogleAuth } from '../auth/GoogleAuthContext'
import './JoinEmailCTA.css'

type JoinEmailCTAProps = {
  label?: string
  variant?: 'primary' | 'outline'
  className?: string
  align?: 'center' | 'start' | 'end'
  showIcon?: boolean
}

function GoogleMark() {
  return (
    <svg className="join-cta__google" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.03 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.03 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

export function JoinEmailCTA({
  label = 'Join with Google',
  variant = 'primary',
  className = '',
  align = 'center',
  showIcon = true,
}: JoinEmailCTAProps) {
  const { user, loading, busy, error, googleReady, signInWithGoogle, logout } = useGoogleAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (rootRef.current && !rootRef.current.contains(target)) {
        setMenuOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!user) setMenuOpen(false)
  }, [user])

  if (loading) {
    return (
      <div className={`join-cta join-cta--${align} ${className}`.trim()}>
        <button type="button" className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'}`} disabled>
          {label}
        </button>
      </div>
    )
  }

  if (user) {
    return (
      <div
        ref={rootRef}
        className={`join-cta join-cta--${align} join-cta--signed-in ${className}`.trim()}
      >
        <button
          type="button"
          className="join-cta__profile-btn"
          aria-label="Account menu"
          aria-haspopup="menu"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {user.picture ? (
            <img
              src={user.picture}
              alt=""
              className="join-cta__avatar"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="join-cta__avatar join-cta__avatar--fallback" aria-hidden="true">
              {user.name.slice(0, 1).toUpperCase()}
            </span>
          )}
          <span className="join-cta__verified" title="Verified" aria-label="Verified">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2.2 14.4 4l2.9-.4 1.2 2.7 2.7 1.2-.4 2.9L22.8 12l-1.8 2.4.4 2.9-2.7 1.2-1.2 2.7-2.9-.4L12 21.8l-2.4-1.8-2.9.4-1.2-2.7-2.7-1.2.4-2.9L2.2 12l1.8-2.4-.4-2.9 2.7-1.2L7.5 3.6l2.9.4L12 2.2Z"
              />
              <path
                fill="#0a0a0c"
                d="M10.2 12.7 8.8 11.3l-.9.9 2.3 2.3 4.5-4.5-.9-.9-3.6 3.6Z"
              />
            </svg>
          </span>
        </button>

        {menuOpen && (
          <div className="join-cta__menu" id={menuId} role="menu">
            <div className="join-cta__menu-head">
              <p className="join-cta__menu-name">{user.name}</p>
              <span className="join-cta__menu-badge">Verified</span>
            </div>
            <p className="join-cta__menu-email">{user.email}</p>
            <button
              type="button"
              className="join-cta__menu-signout"
              role="menuitem"
              onClick={() => {
                setMenuOpen(false)
                logout()
              }}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`join-cta join-cta--${align} ${className}`.trim()}>
      <button
        type="button"
        className={`btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} join-cta__google-btn`}
        disabled={busy || !googleReady}
        onClick={() => void signInWithGoogle()}
      >
        {showIcon ? <GoogleMark /> : null}
        {busy ? 'Opening…' : label}
      </button>
      {!googleReady && (
        <p className="join-cta__error">Google sign-in is not configured yet.</p>
      )}
      {error && <p className="join-cta__error">{error}</p>}
    </div>
  )
}
