import { Outlet } from 'react-router-dom'
import { CookieBanner } from '../components/CookieBanner/CookieBanner'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { MainContent } from '../components/MainContent/MainContent'
import { ScrollToTopButton } from '../components/ScrollToTopButton/ScrollToTopButton'
import './MainLayout.scss'

export function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
      <ScrollToTopButton />
      <CookieBanner />
    </div>
  )
}
