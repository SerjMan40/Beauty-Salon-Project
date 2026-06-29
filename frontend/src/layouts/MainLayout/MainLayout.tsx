import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/layout/Footer/Footer'
import { Header } from '../../components/layout/Header/Header'
import { MainContent } from '../../components/layout/MainContent/MainContent'
import { ScrollToTopButton } from '../../components/layout/ScrollToTopButton/ScrollToTopButton'

export function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
