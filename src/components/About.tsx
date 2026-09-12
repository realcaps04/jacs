import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { images } from '../data/images'
import './About.css'

export function About() {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section className={`about section ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="container">
        <div className={`about__intro reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">About JACS</p>
          <h2 className="section-heading">
            Nurturing Talent.
            <br />
            Building Future.
          </h2>
        </div>

        <div className="about__grid">
          <figure className={`about__media reveal reveal-delay-1 ${visible ? 'is-visible' : ''}`}>
            <img src={images.collegeMono} alt="Campus architecture at JPM Arts and Science College" />
            <figcaption>
              More Than A <span className="about__accent">Department.</span> A{' '}
              <span className="about__accent">Community.</span>
            </figcaption>
          </figure>

          <div className={`about__copy reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}>
            <p>
              JACS (JPM Association of Computer Students) focuses on extracting the hidden talents
              of the students in the field of Information Technology. It aims to improve and enhance
              the technological skill set of students by collaborating with other colleges and
              software industries. The objective is to provide a platform to showcase their
              competence through knowledge sharing and innovative thinking.
            </p>
            <p>
              The goal is to develop programming skills, management skills, as well as other
              technical skills among students. JACS also aims to develop teamwork skills and
              encourage students to bring forth their leadership qualities.
            </p>
            <Link to="/about" className="btn btn-outline about__cta">
              Know More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
