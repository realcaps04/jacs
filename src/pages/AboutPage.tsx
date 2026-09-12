import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import { Impact } from '../components/Impact'
import { CommunityCTA } from '../components/CommunityCTA'
import './AboutPage.css'

const storyImages = {
  student:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  ideas:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  community:
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=80',
  quoteBg:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
}

const values = [
  {
    title: 'Learning First',
    copy: 'A culture of continuous growth and curiosity.',
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
    title: 'Innovation',
    copy: 'Turning ideas into real-world impact.',
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
    title: 'Collaboration',
    copy: 'Stronger together with peers, industries and institutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 14c-2.2 0-4 1.3-4 3v2h8v-2c0-1.7-1.8-3-4-3Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M16 14c2.2 0 4 1.3 4 3v2h-5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.5 12.5 13.5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    copy: 'Striving for meaningful and practical outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6.5 16V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M12 16V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M17.5 16v-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Leadership',
    copy: 'Empowering students to lead with confidence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5 13.8 9h5.7l-4.6 3.4 1.8 5.6L12 14.8 7.3 18l1.8-5.6L4.5 9h5.7L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
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

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__bg" aria-hidden="true">
          <img src={images.collegeNight} alt="" />
          <div className="about-hero__overlay" />
        </div>

        <div className="about-hero__content container-wide">
          <p className="eyebrow">About Us</p>
          <h1 className="about-hero__title">
            More Than
            <br />
            A <span className="about-hero__accent">Department.</span>
            <br />
            A <span className="about-hero__accent">Community.</span>
          </h1>
          <p className="about-hero__sub">
            JACS is a student-driven Computer Science community at JPM Arts and Science College,
            Labbakkada — where curiosity becomes skill, and skill becomes impact.
          </p>
          <a href="#our-story" className="btn btn-outline">
            Our Journey →
          </a>
        </div>

        <aside className="about-hero__aside" aria-hidden="true">
          IDEAS
          <br />
          PEOPLE
          <br />
          TECHNOLOGY
          <br />
          A BRIGHTER
          <br />
          TOMORROW
        </aside>

        <p className="about-hero__footer container-wide">
          LEARN <span>|</span> BUILD <span>|</span> SHARE <span>|</span> LEAD
        </p>
      </section>

      <RevealSection className="about-story" id="our-story">
        <div className="container about-story__grid">
          <div className="about-story__copy">
            <p className="about-story__side" aria-hidden="true">
              SAME STUDENTS
              <br />
              BIGGER POSSIBILITIES
            </p>
            <p className="eyebrow">Our Story</p>
            <h2 className="section-heading">The Spirit Behind JACS</h2>
            <p>
              JACS (JPM Association of Computer Students) focuses on extracting the hidden talents of
              students in Information Technology. By collaborating with colleges and software
              industries, it builds a platform for knowledge sharing, innovative thinking, and real
              competence.
            </p>
            <p>
              The goal is to develop programming, management, and technical skills — while nurturing
              teamwork and leadership qualities that shape confident future creators.
            </p>
          </div>

          <div className="about-story__collage">
            <figure className="about-story__shot about-story__shot--main">
              <img src={storyImages.student} alt="Student focused on building with technology" />
              <figcaption>Curiosity Creates Change.</figcaption>
            </figure>
            <figure className="about-story__shot about-story__shot--mid">
              <img src={storyImages.ideas} alt="Students collaborating on ideas" />
              <figcaption>GOOD IDEAS START WITH GREAT PEOPLE</figcaption>
            </figure>
            <figure className="about-story__shot about-story__shot--small">
              <img src={storyImages.community} alt="JACS community together" />
              <figcaption>A COMMUNITY FOR TOMORROW</figcaption>
            </figure>
            <span className="about-story__frame" aria-hidden="true" />
          </div>
        </div>
      </RevealSection>

      <RevealSection className="about-mv">
        <div className="container about-mv__grid">
          <article className="about-mv__card about-mv__card--mission">
            <p className="eyebrow">Our Mission</p>
            <h3>
              Empower
              <br />
              Innovate
              <br />
              Lead
            </h3>
            <p>
              To extract hidden talent, enhance technological skills through collaboration, and give
              students a stage to showcase competence through knowledge sharing and innovation.
            </p>
            <span className="about-mv__num" aria-hidden="true">
              01
            </span>
          </article>

          <article className="about-mv__card about-mv__card--vision">
            <div className="about-mv__card-bg" aria-hidden="true">
              <img src={images.earth} alt="" />
            </div>
            <p className="eyebrow">Our Vision</p>
            <h3>
              A Brighter
              <br />
              Tomorrow
            </h3>
            <p>
              To build a dynamic learning environment where students grow as programmers, thinkers,
              collaborators, and leaders who shape the future with technology.
            </p>
            <span className="about-mv__num" aria-hidden="true">
              02
            </span>
          </article>
        </div>
      </RevealSection>

      <RevealSection className="about-values">
        <div className="container">
          <div className="about-values__head">
            <div>
              <p className="eyebrow">Our Values</p>
              <h2 className="section-heading">What Drives Us</h2>
            </div>
            <p className="about-values__lede">
              The principles that turn curious students into skilled builders, creative thinkers, and
              future leaders.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value) => (
              <article key={value.title} className="about-values__card">
                <div className="about-values__icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="about-quote">
        <div className="about-quote__bg" aria-hidden="true">
          <img src={storyImages.quoteBg} alt="" />
          <div className="about-quote__overlay" />
        </div>
        <div className="container about-quote__content">
          <span className="about-quote__mark" aria-hidden="true">
            “
          </span>
          <blockquote>Technology is best when it brings people together.</blockquote>
          <cite>— JACS, JPM Association Of Computer Students</cite>
        </div>
      </RevealSection>

      <Impact
        title="Numbers Tell Our Story"
        lede="Every workshop, collaboration, and idea adds to a growing community of builders."
      />

      <CommunityCTA
        title="BE A PART OF THE JOURNEY"
        ctaLabel="Join JACS →"
        leftText={'IDEAS\nSKILLS\nPEOPLE\nIMPACT'}
        rightText={'COMPUTERS\nCREATE\nCONNECT\nCHANGE'}
      />
    </div>
  )
}
