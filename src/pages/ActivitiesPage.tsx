import { PageHero } from '../components/PageHero'
import { Pillars } from '../components/Pillars'
import './pages.css'

const activities = [
  {
    title: 'Workshops & Trainings',
    copy: 'Practical sessions that strengthen programming, tools, and problem-solving.',
  },
  {
    title: 'Seminars & Talks',
    copy: 'Knowledge-sharing forums with peers, seniors, and industry voices.',
  },
  {
    title: 'Hackathons & Contests',
    copy: 'Competitive spaces to experiment, collaborate, and ship ideas fast.',
  },
  {
    title: 'Industry Connect',
    copy: 'Collaborations with colleges and tech industries for exposure and growth.',
  },
]

export function ActivitiesPage() {
  return (
    <>
      <PageHero
        mark="03 / ACTIVITIES"
        eyebrow="What We Do"
        title="Learn. Build. Compete. Lead."
        subtitle="JACS activities are designed to turn curious students into skilled builders and confident leaders."
      />
      <Pillars />
      <section className="page-block">
        <div className="container">
          <div className="page-card-grid">
            {activities.map((item) => (
              <article key={item.title} className="page-card">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
