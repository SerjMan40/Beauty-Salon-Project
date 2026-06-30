import { Outlet } from 'react-router-dom'

import { AnnouncementBar } from '../components/AnnouncementBar/AnnouncementBar'
import { CookieBanner } from '../components/CookieBanner/CookieBanner'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { MainContent } from '../components/MainContent/MainContent'
import { PageWrapper } from '../components/PageWrapper/PageWrapper'
import { ScrollToTopButton } from '../components/ScrollToTopButton/ScrollToTopButton'

import './MainLayout.scss'

export function MainLayout() {
  return (
    <PageWrapper className="app-shell">
      <AnnouncementBar>Онлайн-запись доступна круглосуточно</AnnouncementBar>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
      <ScrollToTopButton />
      <CookieBanner />
    </PageWrapper>
  )
}
