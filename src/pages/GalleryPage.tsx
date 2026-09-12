import { PageHero } from '../components/PageHero'
import { Gallery } from '../components/Gallery'
import './pages.css'

export function GalleryPage() {
  return (
    <>
      <PageHero
        mark="05 / GALLERY"
        eyebrow="Moments"
        title="Moments in Motion"
        subtitle="Campus nights, collaborative builds, and festival energy — captured in a cinematic frame."
      />
      <Gallery />
    </>
  )
}
