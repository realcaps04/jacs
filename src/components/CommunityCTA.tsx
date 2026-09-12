import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import './CommunityCTA.css'

export function CommunityCTA() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="community" ref={ref}>
      <div className="community__bg" aria-hidden="true">
        <img src={images.mountains} alt="" />
        <div className="community__overlay" />
      </div>

      <p className="community__side community__side--left" aria-hidden="true">
        SAME
        <br />
        STUDENTS
        <br />
        BIGGER
        <br />
        POSSIBILITIES
      </p>

      <div className={`community__content reveal ${visible ? 'is-visible' : ''}`}>
        <h2>BE A PART OF JACS</h2>
        <p>Learn. Collaborate. Innovate. Lead.</p>
        <a href="mailto:jacs@jpmcollege.ac.in" className="btn btn-primary">
          Join the Community →
        </a>
      </div>

      <p className="community__side community__side--right" aria-hidden="true">
        COMPUTERS
        <br />
        PEOPLE
        <br />
        IDEAS
        <br />
        CHANGE
      </p>
    </section>
  )
}
