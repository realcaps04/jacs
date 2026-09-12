import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import './Gallery.css'

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

export function Gallery() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="gallery section" ref={ref}>
      <div className="container">
        <div className={`gallery__grid reveal ${visible ? 'is-visible' : ''}`}>
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
