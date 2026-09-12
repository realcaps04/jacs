import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import './Gallery.css'
import './HomeGallery.css'

const shots = [
  {
    src: images.collegeNight,
    label: 'Campus · Night',
    filter: 'brightness(0.55) contrast(1.1) saturate(0.6)',
  },
  {
    src: images.collegeMono,
    label: 'Architecture',
    filter: 'grayscale(1) brightness(0.7) contrast(1.15)',
  },
  {
    src: images.fenster,
    label: 'Fenster Stage',
    filter: 'brightness(0.58) contrast(1.12) saturate(0.75)',
  },
  {
    src: images.mountains,
    label: 'Horizon',
    filter: 'brightness(0.5) contrast(1.15) saturate(0.65)',
  },
]

export function HomeGallery() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="home-gallery section" ref={ref}>
      <div className="container">
        <div className={`home-gallery__head reveal ${visible ? 'is-visible' : ''}`}>
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="section-heading">Moments in Motion</h2>
          </div>
          <Link to="/gallery" className="home-gallery__link">
            View Gallery →
          </Link>
        </div>

        <div className={`gallery__grid reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
          {shots.map((shot) => (
            <figure key={shot.label} className="gallery__item">
              <img src={shot.src} alt={shot.label} style={{ filter: shot.filter }} />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
