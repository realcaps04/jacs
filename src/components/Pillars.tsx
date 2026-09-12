import { useReveal } from '../hooks/useReveal'
import './Pillars.css'

const pillars = [
  {
    title: 'Skill Development',
    copy: 'Workshops, trainings and hands-on learning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16.5" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M3.5 19c.8-3 2.9-4.5 5.5-4.5S13.7 16 14.5 19"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M14.2 14.7c1.3-.7 2.7-.8 4.3.1 1.4.8 2.2 2.2 2.5 4.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Knowledge Sharing',
    copy: 'Seminars, talks and peer learning',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9.5 18.5c.4 1.1 1.2 1.8 2.5 1.8s2.1-.7 2.5-1.8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M12 3.5c-3.2 0-5.3 2.1-5.3 5.2 0 2 1 3.4 2.4 4.5.7.5 1.1 1.2 1.2 2h3.4c.1-.8.5-1.5 1.2-2 1.4-1.1 2.4-2.5 2.4-4.5 0-3.1-2.1-5.2-5.3-5.2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Industry Collaboration',
    copy: 'Connecting with colleges and tech industries',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6.5 16V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 16V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17.5 16v-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path
          d="M5 9.5 11.2 5l5.2 3.2L20 6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Leadership & Teamwork',
    copy: 'Building confident future leaders',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.5 16.5 12 5l5.5 11.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 12.2h5.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8 19.2h8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export function Pillars() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="pillars section" ref={ref}>
      <div className="container">
        <div className={`pillars__panel reveal ${visible ? 'is-visible' : ''}`}>
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className={`pillars__item reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}
            >
              <div className="pillars__icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
