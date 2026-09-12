import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { FensterPage } from './pages/FensterPage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="fenster" element={<FensterPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
