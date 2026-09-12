import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { UpdatePopup } from './UpdatePopup'
import { MobileBottomNav } from './MobileBottomNav'

export function Layout() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
      <UpdatePopup />
    </div>
  )
}
