import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Pillars } from '../components/Pillars'
import { Pathway } from '../components/Pathway'
import { Fenster } from '../components/Fenster'
import { HomeGallery } from '../components/HomeGallery'
import { Impact } from '../components/Impact'
import { CommunityCTA } from '../components/CommunityCTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <Pathway />
      <Fenster />
      <HomeGallery />
      <Impact />
      <CommunityCTA />
    </>
  )
}
