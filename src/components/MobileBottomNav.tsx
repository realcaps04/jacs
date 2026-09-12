import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/nav'
import './MobileBottomNav.css'

function activeIndexForPath(pathname: string) {
  const exact = navLinks.findIndex((link) =>
    link.to === '/' ? pathname === '/' : pathname === link.to || pathname.startsWith(`${link.to}/`),
  )
  return Math.max(0, exact)
}

export function MobileBottomNav() {
  const { pathname } = useLocation()
  const activeIndex = useMemo(() => activeIndexForPath(pathname), [pathname])

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile">
      <div className="mobile-bottom-nav__inner">
        <span
          className="mobile-bottom-nav__indicator"
          style={{
            transform: `translateX(calc(${activeIndex} * (100% + 0.15rem)))`,
          }}
          aria-hidden="true"
        />
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `mobile-bottom-nav__link ${isActive ? 'is-active' : ''}`
            }
          >
            <span>{link.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
