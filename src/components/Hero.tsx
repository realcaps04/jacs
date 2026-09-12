import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { images } from '../data/images'
import './Hero.css'

export function Hero() {
  const particlesRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = particlesRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.3,
      s: Math.random() * 0.15 + 0.04,
      a: Math.random() * 0.45 + 0.15,
    }))

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.y -= p.s * 0.0015
        if (p.y < -0.02) p.y = 1.02
        ctx.beginPath()
        ctx.fillStyle = `rgba(196, 181, 253, ${p.a})`
        ctx.arc(p.x * canvas.offsetWidth, p.y * canvas.offsetHeight, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img className="hero__college" src={images.collegeNight} alt="" />
        <img className="hero__earth" src={images.earth} alt="" />
        <div className="hero__overlay" />
        <div className="hero__grid" />
        <canvas ref={particlesRef} className="hero__particles" />
        <div className="hero__mark hero__mark--tr">N 09°48′ · E 77°09′</div>
      </div>

      <div className="hero__content container-wide">
        <div className="hero__main">
          <p className="eyebrow hero__eyebrow">Department of Computer Science</p>
          <h1 className="hero__title">
            <span>Code Collaborate</span>
            <span className="hero__title-accent">Create Tomorrow</span>
          </h1>
          <p className="hero__sub">
            JACS — JPM Association Of Computer Students
            <br />
            JPM Arts and Science College, Labbakkada
          </p>
          <div className="hero__actions">
            <Link to="/about" className="btn btn-primary">
              Explore JACS →
            </Link>
            <Link to="/activities" className="btn btn-outline">
              Our Events
            </Link>
          </div>
        </div>

        <aside className="hero__aside" aria-hidden="true">
          <p>
            PEOPLE
            <br />
            IDEAS
            <br />
            TECHNOLOGY
            <br />
            A BRIGHTER
            <br />
            TOMORROW
          </p>
        </aside>
      </div>

      <div className="hero__footer container-wide">
        <p className="hero__pillars-line">
          <span>LEARN</span>
          <span className="sep">|</span>
          <span>BUILD</span>
          <span className="sep">|</span>
          <span>SHARE</span>
          <span className="sep">|</span>
          <span>LEAD</span>
        </p>
        <blockquote className="hero__quote">
          “Where Curiosity Meets Opportunity.”
        </blockquote>
      </div>
    </section>
  )
}
