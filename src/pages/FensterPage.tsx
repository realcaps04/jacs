import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { CommunityCTA } from '../components/CommunityCTA'
import { images } from '../data/images'
import './FensterPage.css'

const FENSTER_LOGO = '/fenster_logo.png'
/** Native asset size — keep full resolution for clarity */
const LOGO_W = 1774
const LOGO_H = 887

const categories = [
  { title: 'Coding', tag: 'Build. Debug. Conquer.', n: '01', icon: 'code' },
  { title: 'Design', tag: 'Imagine. Craft. Inspire.', n: '02', icon: 'design' },
  { title: 'Cyber Security', tag: 'Protect. Detect. Defend.', n: '03', icon: 'shield' },
  { title: 'Quiz', tag: 'Think. Answer. Win.', n: '04', icon: 'quiz' },
  { title: 'Innovation', tag: 'Ideate. Prototype. Impact.', n: '05', icon: 'bulb' },
  { title: 'Gaming', tag: 'Play. Compete. Dominate.', n: '06', icon: 'game' },
]

const days = [
  {
    day: 'Day 01',
    title: 'Compete',
    date: '10 December 2025',
    copy: 'Kick off with coding, design, and challenge events that push every skill to the edge.',
  },
  {
    day: 'Day 02',
    title: 'Connect',
    date: '11 December 2025',
    copy: 'Talks, collaborations, and networking moments that link students with ideas and people.',
  },
  {
    day: 'Day 03',
    title: 'Celebrate',
    date: '12 December 2025',
    copy: 'Finals, showcases, and a closing celebration of talent, teamwork, and tomorrow.',
  },
]

const glimpses = [
  images.fenster,
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
]

const stats = [
  { label: 'Participants', target: 1000, suffix: '+', infinite: false },
  { label: 'Colleges', target: 50, suffix: '+', infinite: false },
  { label: 'Events', target: 30, suffix: '+', infinite: false },
  { label: 'Possibilities', target: null, suffix: '', infinite: true },
]

function CategoryIcon({ type }: { type: string }) {
  if (type === 'code') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8 4.5 12 8 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M16 8 19.5 12 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M13.2 6.5 10.8 17.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'design') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 16c3-6 6-8 8-8s5 2 8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }
  if (type === 'shield') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3.5 19 6.5v5.2c0 4.4-3 7.3-7 8.8-4-1.5-7-4.4-7-8.8V6.5L12 3.5Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 12.2 11.4 13.6 14.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'quiz') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.8.4-1.3 1-1.3 1.8V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'bulb') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9.5 18.5c.4 1.1 1.2 1.8 2.5 1.8s2.1-.7 2.5-1.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 3.5c-3.2 0-5.3 2.1-5.3 5.2 0 2 1 3.4 2.4 4.5.7.5 1.1 1.2 1.2 2h3.4c.1-.8.5-1.5 1.2-2 1.4-1.1 2.4-2.5 2.4-4.5 0-3.1-2.1-5.2-5.3-5.2Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 12.5h2.2v3H9v-3Zm3.8 0H15v3h-2.2v-3Z" fill="currentColor" />
      <path d="M8 8V6.5h8V8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function FensterLogo({ className = '', size = 420 }: { className?: string; size?: number }) {
  const height = size
  const width = Math.round(size * (LOGO_W / LOGO_H))

  return (
    <img
      className={`fenster-logo ${className}`.trim()}
      src={FENSTER_LOGO}
      srcSet={`${FENSTER_LOGO} 1x, ${FENSTER_LOGO} 2x`}
      alt="Fenster logo — winged crest with crown and monogram"
      width={LOGO_W}
      height={LOGO_H}
      decoding="async"
      loading="eager"
      draggable={false}
      style={{
        width,
        height,
        maxWidth: '100%',
        objectFit: 'contain',
        imageRendering: 'auto',
      }}
    />
  )
}

function RevealSection({
  children,
  className = '',
  id,
}: {
  children: ReactNode
  className?: string
  id?: string
}) {
  const { ref, visible } = useReveal<HTMLElement>(0.12)
  return (
    <section id={id} className={`${className} ${visible ? 'is-visible' : ''}`} ref={ref}>
      {children}
    </section>
  )
}

function useDelayedActive(active: boolean, delay: number) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!active) {
      setReady(false)
      return
    }
    const id = window.setTimeout(() => setReady(true), delay)
    return () => window.clearTimeout(id)
  }, [active, delay])
  return ready
}

function CountStat({
  target,
  suffix,
  active,
  delay,
}: {
  target: number
  suffix: string
  active: boolean
  delay: number
}) {
  const ready = useDelayedActive(active, delay)
  const value = useCountUp(target, ready, 1800)
  return (
    <>
      {value.toLocaleString('en-US')}
      {suffix}
    </>
  )
}

export function FensterPage() {
  const { ref: statsRef, visible: statsVisible } = useReveal<HTMLElement>(0.25)

  return (
    <div className="fenster-page">
      <section className="fz-hero">
        <div className="fz-hero__bg" aria-hidden="true">
          <img src={images.fenster} alt="" />
          <div className="fz-hero__overlay" />
          <div className="fz-hero__beams" />
        </div>

        <div className="fz-hero__logo-wrap">
          <FensterLogo size={360} className="fz-hero__logo" />
        </div>

        <div className="fz-hero__content container-wide">
          <div className="fz-hero__inner">
          <p className="eyebrow">JACS Presents National Level Tech Fest</p>
          <h1 className="fz-hero__title">
            <span className="fz-hero__accent">Fenster</span>
          </h1>
          <p className="fz-hero__tags">TECH | TALENT | TOMORROW</p>
          <p className="fz-hero__sub">
            A three-day celebration of technology, creativity and competitive spirit.
          </p>
          <ul className="fz-hero__meta">
            <li>10 – 12 December 2025</li>
            <li>JPM Arts and Science College, Kanchiyar, Idukki</li>
          </ul>
          <div className="fz-hero__actions">
            <a href="#events" className="btn btn-primary">
              Coming Soon
            </a>
            <a href="#events" className="btn btn-outline">
              Explore Events
            </a>
          </div>
          </div>
        </div>
      </section>

      <RevealSection className="fz-about">
        <div className="container fz-about__grid">
          <div className="fz-about__copy">
            <div className="fz-about__logo">
              <FensterLogo size={180} />
            </div>
            <h2 className="section-heading">
              More Than
              <br />
              A <span className="fz-accent">Fest.</span>
            </h2>
            <p>
              Fenster is a national level tech fest presented by JACS (JPM Association Of Computer
              Students), conducted at JPM Arts and Science College every year to boost talent, skill,
              and competitive spirit.
            </p>
            <p>
              Across coding, design, innovation, and stage energy — Fenster brings students together
              to compete, connect, and create what comes next.
            </p>
          </div>

          <figure className="fz-about__media">
            <img
              src={images.collegeNight}
              alt="Students at Fenster celebrating ideas and community"
            />
            <figcaption>GOOD IDEAS · BRIGHTER TOMORROW · FENSTER</figcaption>
          </figure>

          <aside className="fz-about__aside" aria-hidden="true">
            STUDENTS
            <br />
            IDEAS
            <br />
            NETWORKS
            <br />
            OPPORTUNITIES
          </aside>
        </div>
      </RevealSection>

      <RevealSection className="fz-events" id="events">
        <div className="container">
          <div className="fz-section__head">
            <h2 className="section-heading">
              Explore. Participate.
              <br />
              <span className="fz-accent">Excel.</span>
            </h2>
            <a href="#timeline" className="fz-link">
              View All Events →
            </a>
          </div>

          <div className="fz-events__grid">
            {categories.map((cat) => (
              <article key={cat.title} className="fz-events__card">
                <div className="fz-events__icon">
                  <CategoryIcon type={cat.icon} />
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.tag}</p>
                <span className="fz-events__num">{cat.n}</span>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="fz-timeline" id="timeline">
        <div className="container">
          <p className="eyebrow">Three-Day Experience</p>
          <h2 className="section-heading fz-timeline__title">Compete. Connect. Celebrate.</h2>
          <div className="fz-timeline__grid">
            {days.map((d) => (
              <article key={d.day} className="fz-timeline__card">
                <p className="fz-timeline__day">{d.day}</p>
                <h3>{d.title}</h3>
                <p className="fz-timeline__date">{d.date}</p>
                <p>{d.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="fz-glimpses">
        <div className="container">
          <div className="fz-section__head">
            <h2 className="section-heading">
              Moments That
              <br />
              <span className="fz-accent">Inspire.</span>
            </h2>
            <FensterLogo size={140} className="fz-glimpses__logo" />
          </div>
          <div className="fz-glimpses__grid">
            {glimpses.map((src, i) => (
              <figure key={src} className={`fz-glimpses__shot ${i === 0 ? 'is-wide' : ''}`}>
                <img src={src} alt={`Fenster moment ${i + 1}`} />
              </figure>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="fz-venue">
        <div className="container fz-venue__grid">
          <div className="fz-venue__copy">
            <p className="eyebrow">Event Venue</p>
            <h2 className="section-heading">
              JPM Arts and Science College
            </h2>
            <p>Kanchiyar, Idukki, Kerala</p>
            <a
              className="btn btn-outline"
              href="https://maps.google.com/?q=JPM+Arts+and+Science+College+Kanchiyar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions →
            </a>
          </div>
          <figure className="fz-venue__media">
            <img src={images.collegeNight} alt="JPM Arts and Science College campus" />
          </figure>
        </div>
      </RevealSection>

      <section className="fz-stats" ref={statsRef}>
        <div className="container">
          <div className={`fz-stats__intro reveal ${statsVisible ? 'is-visible' : ''}`}>
            <p className="eyebrow">Fenster by the Numbers</p>
            <h2 className="section-heading">Scale of the Fest</h2>
          </div>
          <div className={`fz-stats__grid reveal reveal-delay-1 ${statsVisible ? 'is-visible' : ''}`}>
            {stats.map((stat, i) => (
              <article key={stat.label} className="fz-stats__item">
                <p className="fz-stats__value">
                  {stat.infinite ? (
                    <span className={`fz-stats__infinity ${statsVisible ? 'is-visible' : ''}`}>∞</span>
                  ) : (
                    <CountStat
                      target={stat.target!}
                      suffix={stat.suffix}
                      active={statsVisible}
                      delay={i * 120}
                    />
                  )}
                </p>
                <p className="fz-stats__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="register">
        <CommunityCTA
          title="BE A PART OF FENSTER"
          subtitle="Compete. Connect. Celebrate."
          ctaLabel="Coming Soon"
          leftText={'TECH\nTALENT\nTOMORROW'}
          rightText={'CODE\nCREATE\nCOMPETE'}
        />
      </div>
    </div>
  )
}
