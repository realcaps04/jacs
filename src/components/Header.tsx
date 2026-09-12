import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { JoinEmailCTA } from './JoinEmailCTA'
import { HeaderNotify } from './HeaderNotify'
import { navLinks } from '../data/nav'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)')
    const sync = () => setIsMobile(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" aria-label="JACS home">
          <Logo size={58} variant="header" alt="JACS — JPM Association Of Computer Students" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__cta">
          <HeaderNotify />
          <JoinEmailCTA
            label={isMobile ? 'Join us' : 'Join with Google'}
            variant={isMobile ? 'primary' : 'outline'}
            align="end"
            showIcon={!isMobile}
          />
        </div>
      </div>
    </header>
  )
}
