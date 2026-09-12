import './PageHero.css'

type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle?: string
  mark?: string
}

export function PageHero({ eyebrow, title, subtitle, mark }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" aria-hidden="true" />
      <div className="container page-hero__inner">
        {mark ? <span className="page-hero__mark">{mark}</span> : null}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
      </div>
    </section>
  )
}
