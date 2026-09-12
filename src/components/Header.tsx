import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { JoinEmailCTA } from './JoinEmailCTA'
import { useGoogleAuth } from '../auth/GoogleAuthContext'
import { navLinks } from '../data/nav'
import { images } from '../data/images'
import './Header.css'

const socials = [
  { href: '#', label: 'Instagram', icon: 'ig' },
  { href: '#', label: 'LinkedIn', icon: 'in' },
  { href: '#', label: 'YouTube', icon: 'yt' },
  { href: '#', label: 'Website', icon: 'web' },
]

function SocialIcon({ type }: { type: string }) {
  if (type === 'ig') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'in') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="7" r="1.15" fill="currentColor" />
        <path
          d="M11 18v-5c0-1.7 1-2.7 2.5-2.7 1.4 0 2.2.9 2.2 2.7V18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (type === 'yt') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="7" width="17" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 10.2 14.8 12 11 13.8V10.2Z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.8 12h14.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 4.5c2 2.3 3 4.8 3 7.5s-1 5.2-3 7.5c-2-2.3-3-4.8-3-7.5s1-5.2 3-7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { user, loading, busy, error, googleReady, signInWithGoogle } = useGoogleAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const onJoinClick = () => {
    if (busy || !googleReady || user) return
    void signInWithGoogle()
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="JACS home" onClick={closeMenu}>
          <Logo size={58} variant="header" alt="JACS — JPM Association Of Computer Students" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={`site-header__cta ${user ? 'is-profile' : ''}`}>
          <JoinEmailCTA label="Join with Google" variant="outline" align="end" />
        </div>

        <button
          className="site-header__menu"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`site-header__drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu">
          <div className="mobile-menu__glow" aria-hidden="true" />
          <img className="mobile-menu__earth" src={images.earth} alt="" aria-hidden="true" />

          <nav className="mobile-menu__nav" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `mobile-menu__link ${isActive ? 'is-active' : ''}`
                }
                onClick={closeMenu}
              >
                <span>{link.label}</span>
                <span className="mobile-menu__arrow" aria-hidden="true">
                  →
                </span>
              </NavLink>
            ))}
          </nav>

          {!user && (
          <div className="mobile-menu__join">
            {loading ? (
              <JoinEmailCTA label="Join with Google" variant="primary" align="start" />
            ) : (
              <>
                <button
                  type="button"
                  className="mobile-menu__join-card"
                  disabled={busy || !googleReady}
                  onClick={onJoinClick}
                >
                  <span className="mobile-menu__join-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="9" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="16.2" cy="9.2" r="2.2" stroke="currentColor" strokeWidth="1.4" />
                      <path
                        d="M3.8 18.2c.7-2.6 2.6-3.9 5.2-3.9s4.5 1.3 5.2 3.9"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 14.5c1.2-.6 2.5-.7 4 .1 1.2.7 1.9 1.9 2.2 3.6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="mobile-menu__join-copy">
                    <strong>{busy ? 'Opening Google…' : 'Join JACS'}</strong>
                    <small>Continue with Google</small>
                  </span>
                  <span className="mobile-menu__join-go" aria-hidden="true">
                    →
                  </span>
                </button>
                {error && <p className="mobile-menu__join-error">{error}</p>}
              </>
            )}
          </div>
          )}

          <p className="mobile-menu__tagline">Learn. Build. Share. Lead.</p>

          <div className="mobile-menu__socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                <SocialIcon type={social.icon} />
              </a>
            ))}
          </div>

          <p className="mobile-menu__meta">
            JACS — Department of Computer Science
            <br />
            JPM Arts and Science College, Labbakkada
          </p>
        </div>
      </div>
    </header>
  )
}
