import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { navLinks } from '../data/nav'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="JACS home" onClick={() => setOpen(false)}>
          <Logo size={58} variant="header" alt="JACS — JPM Association Of Computer Students" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="site-header__cta btn btn-outline">
          Join JACS →
        </Link>

        <button
          className="site-header__menu"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`site-header__drawer ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Join JACS →
          </Link>
        </nav>
      </div>
    </header>
  )
}
