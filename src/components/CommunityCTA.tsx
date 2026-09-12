import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import { JoinEmailCTA } from './JoinEmailCTA'
import './CommunityCTA.css'

type CommunityCTAProps = {
  title?: string
  subtitle?: string
  ctaLabel?: string
  leftText?: string
  rightText?: string
}

export function CommunityCTA({
  title = 'BE A PART OF JACS',
  subtitle = 'Learn. Collaborate. Innovate. Lead.',
  ctaLabel = 'Join with Google',
  leftText = 'SAME\nSTUDENTS\nBIGGER\nPOSSIBILITIES',
  rightText = 'COMPUTERS\nPEOPLE\nIDEAS\nCHANGE',
}: CommunityCTAProps) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className="community" ref={ref}>
      <div className="community__bg" aria-hidden="true">
        <img src={images.mountains} alt="" />
        <div className="community__overlay" />
      </div>

      <p className="community__side community__side--left" aria-hidden="true">
        {leftText.split('\n').map((line, i, arr) => (
          <span key={line}>
            {line}
            {i < arr.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>

      <div className={`community__content reveal ${visible ? 'is-visible' : ''}`}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <JoinEmailCTA label={ctaLabel} variant="primary" align="center" />
      </div>

      <p className="community__side community__side--right" aria-hidden="true">
        {rightText.split('\n').map((line, i, arr) => (
          <span key={line}>
            {line}
            {i < arr.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
    </section>
  )
}
