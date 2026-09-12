import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import './Impact.css'

type StatConfig = {
  label: string
  target: number | null
  suffix?: string
  infinite?: boolean
  delay?: number
}

const stats: StatConfig[] = [
  { label: 'Students Engaged', target: 1000, suffix: '+', delay: 0 },
  { label: 'Events & Workshops', target: 50, suffix: '+', delay: 120 },
  { label: 'Industry Collaborations', target: 10, suffix: '+', delay: 240 },
  { label: 'Opportunities Ahead', target: null, infinite: true, delay: 360 },
]

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
  suffix = '',
  active,
  delay = 0,
}: {
  target: number
  suffix?: string
  active: boolean
  delay?: number
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

export function Impact() {
  const { ref, visible } = useReveal<HTMLElement>(0.25)

  return (
    <section className="impact section" ref={ref}>
      <div className="container">
        <div className={`impact__intro reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">Our Impact</p>
          <h2 className="section-heading">Numbers Speak</h2>
        </div>

        <div className={`impact__grid reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
          {stats.map((stat) => (
            <article key={stat.label} className="impact__item">
              <p className="impact__value">
                {stat.infinite ? (
                  <span className={`impact__infinity ${visible ? 'is-visible' : ''}`}>∞</span>
                ) : (
                  <CountStat
                    target={stat.target!}
                    suffix={stat.suffix}
                    active={visible}
                    delay={stat.delay}
                  />
                )}
              </p>
              <p className="impact__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
