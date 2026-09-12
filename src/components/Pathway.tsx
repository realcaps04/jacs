import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Pathway.css'

const steps = [
  { label: 'Curious Students', n: '01' },
  { label: 'Skilled Developers', n: '02' },
  { label: 'Creative Thinkers', n: '03' },
  { label: 'Collaborative Teams', n: '04' },
  { label: 'Future Leaders', n: '05' },
]

export function Pathway() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="pathway section" ref={ref}>
      <div className="container">
        <div className={`pathway__head reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">The JACS Journey</p>
          <h2 className="section-heading">From Curiosity to Leadership</h2>
          <p>
            JACS isn&apos;t just a computer science association — it&apos;s where students come
            together to build what comes next.
          </p>
        </div>

        <ol className={`pathway__track reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
          {steps.map((step, i) => (
            <li key={step.n} className="pathway__step">
              <span className="pathway__n">{step.n}</span>
              <p>{step.label}</p>
              {i < steps.length - 1 ? <span className="pathway__line" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>

        <div className={`pathway__cta reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
          <Link to="/activities" className="btn btn-outline">
            Explore Activities →
          </Link>
        </div>
      </div>
    </section>
  )
}
