import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { navLinks } from '../data/nav'
import './Footer.css'

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
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'in') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 10v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="7" cy="7" r="1.2" fill="currentColor" />
        <path
          d="M11 18v-5.2c0-1.8 1.1-2.8 2.7-2.8 1.5 0 2.3.9 2.3 2.8V18"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (type === 'yt') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3.5" y="7" width="17" height="10" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 10.2 14.8 12 11 13.8V10.2Z" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 12h15" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 4c2.2 2.4 3.3 5 3.3 8S14.2 17.6 12 20c-2.2-2.4-3.3-5-3.3-8S9.8 6.4 12 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="JACS home">
            <Logo size={88} variant="footer" alt="JACS — JPM Association Of Computer Students" />
          </Link>
          <p className="footer__dept">
            Department of Computer Science
            <br />
            JPM Arts and Science College, Labbakkada
          </p>
          <p className="footer__statement">
            Empowering students to think beyond,
            <br />
            learn together and create a better tomorrow
            <br />
            through technology.
          </p>
        </div>

        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__social">
          <h3>Follow Us</h3>
          <div className="footer__social-row">
            {socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label}>
                <SocialIcon type={social.icon} />
              </a>
            ))}
          </div>
          <p className="footer__tagline">Build · Learn · Grow With JACS</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © 2025 JACS — Department of Computer Science
          <br />
          JPM Arts and Science College, Labbakkada
        </p>
        <p className="footer__made">
          Made with ♥ by{' '}
          <a href="https://consoleprojectsbycaps.in" target="_blank" rel="noopener noreferrer">
            consoleprojectsbycaps.in
          </a>
        </p>
      </div>
    </footer>
  )
}
