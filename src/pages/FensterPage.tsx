import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import '../components/Fenster.css'
import './pages.css'

export function FensterPage() {
  const { ref, visible } = useReveal<HTMLElement>(0.08)

  return (
    <>
      <PageHero
        eyebrow="Our Signature Event"
        title="FENSTER"
        subtitle="National level tech fest — a platform for bright minds."
      />

      <section className={`fenster fenster--page section ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="container">
          <div className="fenster__grid">
            <div className={`fenster__copy reveal ${visible ? 'is-visible' : ''}`}>
              <p className="fenster__subtitle">NATIONAL LEVEL TECH FEST</p>
              <p className="fenster__body">
                Fenster is a national level tech fest presented by JACS (JPM Association Of Computer
                Students), conducted at JPM Arts and Science College, Labbakkada, every year to boost
                the talents and skills of students and make them suitable for creating the world by
                using computers.
              </p>
              <p className="fenster__body">
                From stage showcases to competitive events, Fenster brings together students from
                across the nation who code, create, collaborate, and compete — turning the campus
                into a living technology festival.
              </p>
              <Link to="/gallery" className="btn btn-outline">
                Explore Fenster →
              </Link>
            </div>

            <figure className={`fenster__media reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
              <img src={images.fenster} alt="Dramatic stage lighting at Fenster national tech fest" />
              <div className="fenster__overlay">
                <span className="fenster__brand">FENSTER</span>
                <span className="fenster__tags">NATIONAL LEVEL TECH FEST</span>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}
