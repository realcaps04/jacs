import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import './Fenster.css'

export function Fenster() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="fenster section" ref={ref}>
      <div className="container">
        <div className="fenster__grid">
          <div className={`fenster__copy reveal ${visible ? 'is-visible' : ''}`}>
            <p className="eyebrow">Our Signature Event</p>
            <h2 className="fenster__title">Fenster</h2>
            <p className="fenster__subtitle">NATIONAL LEVEL TECH FEST</p>
            <p className="fenster__body">
              Fenster is a national level tech fest presented by JACS (JPM Association Of Computer
              Students), conducted at JPM Arts and Science College, Labbakkada, every year to boost
              the talents and skills of students and make them suitable for creating the world by
              using computers.
            </p>
            <Link to="/fenster" className="btn btn-outline">
              Explore Fenster →
            </Link>
          </div>

          <figure className={`fenster__media reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
            <img
              src={images.fenster}
              alt="Dramatic stage lighting at Fenster national tech fest"
            />
            <div className="fenster__overlay">
              <img
                className="fenster__crest"
                src="/fenster_logo.png"
                alt=""
                width={1774}
                height={887}
                decoding="async"
              />
              <span className="fenster__brand">Fenster</span>
              <span className="fenster__tags">TECH | TALENT | TOMORROW</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
