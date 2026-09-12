import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import { CommunityCTA } from '../components/CommunityCTA'
import './ActivitiesPage.css'

const heroBg =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80'

const areas = [
  {
    title: 'Workshops',
    copy: 'Hands-on learning with real-world tools.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 8 4.5 12 8 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8 19.5 12 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.2 6.5 10.8 17.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Seminars & Talks',
    copy: 'Insights from experts and peers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16.5" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 19c.8-3 2.9-4.5 5.5-4.5S13.7 16 14.5 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14.2 14.7c1.3-.7 2.7-.8 4.3.1 1.4.8 2.2 2.2 2.5 4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Competitions',
    copy: 'Hackathons, coding contests and challenges.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 5h8v3a4 4 0 0 1-8 0V5Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 6H5.5A2.5 2.5 0 0 0 5.5 11H8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 6h2.5A2.5 2.5 0 0 1 18.5 11H16" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 12v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M9 19h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10.5 15h3v4h-3v-4Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Collaborations',
    copy: 'With colleges and industry partners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 14c-2.2 0-4 1.3-4 3v2h8v-2c0-1.7-1.8-3-4-3Z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 14c2.2 0 4 1.3 4 3v2h-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.5 12.5 13.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Skill Development',
    copy: 'Technical and soft skill programs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 10.5 12 6l8 4.5-8 4.5-8-4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7 12.5v4.2c0 .4 2.2 2.3 5 2.3s5-1.9 5-2.3v-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Community Outreach',
    copy: 'Using technology for social good.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20s-6.5-4.1-6.5-9A3.8 3.8 0 0 1 12 8.2 3.8 3.8 0 0 1 18.5 11c0 4.9-6.5 9-6.5 9Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const highlights = [
  {
    date: 'MAR 15, 2025',
    title: 'Web Development Workshop',
    copy: 'Hands-on sessions covering modern frontend workflows and project building.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'FEB 10, 2025',
    title: 'Industry Expert Talk',
    copy: 'Insights from professionals on careers, tools, and emerging tech trends.',
    image:
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80',
  },
  {
    date: 'JAN 30, 2025',
    title: 'CodeSprint 2.0',
    copy: 'A competitive coding challenge designed to sharpen problem-solving under pressure.',
    image:
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=900&q=80',
  },
]

const upcoming = [
  {
    month: 'APR',
    day: '12',
    title: 'UI/UX Design Workshop',
    place: 'JPM College Campus',
    time: '10:00 AM - 4:00 PM',
  },
  {
    month: 'APR',
    day: '26',
    title: 'Machine Learning Bootcamp',
    place: 'Computer Lab',
    time: '9:30 AM - 3:30 PM',
  },
  {
    month: 'MAY',
    day: '10',
    title: 'Tech Talk Series',
    place: 'Seminar Hall',
    time: '2:00 PM - 4:00 PM',
  },
  {
    month: 'MAY',
    day: '24',
    title: 'Inter-College Hackathon',
    place: 'JPM College',
    time: '9:00 AM - 6:00 PM',
  },
]

const glimpses = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
]

const stats = [
  { label: 'Workshops & Talks', target: 50, suffix: '+' },
  { label: 'Students Participated', target: 1000, suffix: '+' },
  { label: 'Industry Experts', target: 15, suffix: '+' },
  { label: 'Collaborations', target: 10, suffix: '+' },
]

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

export function ActivitiesPage() {
  const { ref: statsRef, visible: statsVisible } = useReveal<HTMLElement>(0.25)

  return (
    <div className="activities-page">
      <section className="act-hero">
        <div className="act-hero__bg" aria-hidden="true">
          <img src={heroBg} alt="" />
          <div className="act-hero__overlay" />
        </div>

        <div className="act-hero__content container-wide">
          <p className="eyebrow">Our Activities</p>
          <h1 className="act-hero__title">
            Learn Build
            <br />
            <span className="act-hero__accent">Experience Together.</span>
          </h1>
          <p className="act-hero__sub">
            A wide range of activities designed to inspire, upskill and empower every computer
            science student.
          </p>
          <a href="#activity-areas" className="btn btn-outline">
            Explore Activities →
          </a>
        </div>

        <aside className="act-hero__aside" aria-hidden="true">
          SKILLS
          <br />
          PEOPLE
          <br />
          IDEAS
          <br />
          OPPORTUNITIES
        </aside>

        <p className="act-hero__note container-wide">
          MORE THAN EVENTS.
          <br />
          A COMMUNITY IN ACTION.
        </p>
      </section>

      <RevealSection className="act-areas" id="activity-areas">
        <div className="container">
          <div className="act-areas__head">
            <div>
              <p className="eyebrow">Activity Areas</p>
              <h2 className="section-heading">What We Do</h2>
            </div>
            <p className="act-areas__lede">
              From technical workshops to community initiatives, JACS conducts a variety of
              activities to help students grow beyond the classroom.
            </p>
          </div>

          <div className="act-areas__grid">
            {areas.map((area) => (
              <article key={area.title} className="act-areas__card">
                <div className="act-areas__icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="act-highlights">
        <div className="container">
          <div className="act-section__head">
            <div>
              <p className="eyebrow">Featured Activities</p>
              <h2 className="section-heading">Recent Highlights</h2>
            </div>
            <a href="#upcoming" className="act-link">
              View All Activities →
            </a>
          </div>

          <div className="act-highlights__grid">
            {highlights.map((item) => (
              <article key={item.title} className="act-highlight">
                <div className="act-highlight__media">
                  <img src={item.image} alt="" />
                </div>
                <div className="act-highlight__body">
                  <p className="act-highlight__date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <span className="act-highlight__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="act-upcoming" id="upcoming">
        <div className="container">
          <div className="act-section__head">
            <div>
              <p className="eyebrow">Upcoming Activities</p>
              <h2 className="section-heading">What&apos;s Next?</h2>
            </div>
            <a href="#glimpses" className="act-link">
              View All Events →
            </a>
          </div>

          <div className="act-upcoming__list">
            {upcoming.map((event) => (
              <article key={event.title} className="act-upcoming__item">
                <div className="act-upcoming__date">
                  <span>{event.month}</span>
                  <strong>{event.day}</strong>
                </div>
                <div className="act-upcoming__info">
                  <h3>{event.title}</h3>
                  <p>
                    <span>{event.place}</span>
                    <span className="dot">·</span>
                    <span>{event.time}</span>
                  </p>
                </div>
                <span className="act-upcoming__arrow" aria-hidden="true">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="act-glimpses" id="glimpses">
        <div className="container">
          <div className="act-areas__head">
            <div>
              <p className="eyebrow">Glimpses</p>
              <h2 className="section-heading">Moments That Matter</h2>
            </div>
            <p className="act-areas__lede">
              Snapshots from workshops, talks, and competitions — where students learn, build, and
              grow together.
            </p>
          </div>

          <div className="act-glimpses__row">
            {glimpses.map((src, i) => (
              <figure key={src} className="act-glimpses__shot">
                <img src={src} alt={`Activity moment ${i + 1}`} />
              </figure>
            ))}
          </div>
        </div>
      </RevealSection>

      <section className="act-stats" ref={statsRef}>
        <div className="container">
          <div className={`act-stats__intro reveal ${statsVisible ? 'is-visible' : ''}`}>
            <p className="eyebrow">Our Impact</p>
            <h2 className="section-heading">Activities in Numbers</h2>
          </div>
          <div className={`act-stats__grid reveal reveal-delay-1 ${statsVisible ? 'is-visible' : ''}`}>
            {stats.map((stat, i) => (
              <article key={stat.label} className="act-stats__item">
                <p className="act-stats__value">
                  <CountStat
                    target={stat.target}
                    suffix={stat.suffix}
                    active={statsVisible}
                    delay={i * 120}
                  />
                </p>
                <p className="act-stats__label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CommunityCTA
        title="BE PART OF WHAT'S NEXT"
        subtitle="Attend. Learn. Collaborate. Grow."
        ctaLabel="Join JACS →"
        leftText={'SAME\nSTUDENTS\nBIGGER\nPOSSIBILITIES'}
        rightText={'LEARN\nBUILD\nSHARE\nLEAD'}
      />
    </div>
  )
}
