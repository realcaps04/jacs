import type { FormEvent } from 'react'
import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { CommunityCTA } from '../components/CommunityCTA'
import './pages.css'
import './ContactPage.css'

export function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        mark="06 / CONTACT"
        eyebrow="Join the Community"
        title="Be a Part of JACS"
        subtitle="Reach out to collaborate, join, or learn more about the Department of Computer Science at JPM."
      />

      <section className="contact-page">
        <div className="container contact-page__grid">
          <div className="contact-page__info">
            <h2>Get in Touch</h2>
            <p>
              Department of Computer Science
              <br />
              JPM Arts and Science College, Labbakkada
            </p>
            <ul>
              <li>
                <span>Email</span>
                <a href="mailto:jacs@jpmcollege.ac.in">jacs@jpmcollege.ac.in</a>
              </li>
              <li>
                <span>Association</span>
                <p>JACS — JPM Association Of Computer Students</p>
              </li>
              <li>
                <span>Philosophy</span>
                <p>Learn. Build. Share. Lead.</p>
              </li>
            </ul>
          </div>

          <form className="contact-page__form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" required placeholder="you@email.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} required placeholder="How can we collaborate?" />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message →
            </button>
            {sent ? <p className="contact-page__note">Thanks — we’ll get back to you soon.</p> : null}
          </form>
        </div>
      </section>

      <CommunityCTA />
    </>
  )
}
