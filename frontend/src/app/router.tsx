import { createBrowserRouter } from 'react-router-dom'
import { ROUTES } from './config/routes'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { ProfileLayout } from '../layouts/ProfileLayout/ProfileLayout'
import { ArticlesPage } from '../pages/ArticlesPage/ArticlesPage'
import { BookingPage } from '../pages/BookingPage/BookingPage'
import { GalleryPage } from '../pages/GalleryPage/GalleryPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { MasterDetailsPage } from '../pages/MasterDetailsPage/MasterDetailsPage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage/ProfilePage'
import { ServiceDetailsPage } from '../pages/ServiceDetailsPage/ServiceDetailsPage'
import { ServicesPage } from '../pages/ServicesPage/ServicesPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.serviceDetails, element: <ServiceDetailsPage /> },
      { path: ROUTES.masterDetails, element: <MasterDetailsPage /> },
      { path: ROUTES.booking, element: <BookingPage /> },
      { path: ROUTES.articles, element: <ArticlesPage /> },
      { path: ROUTES.gallery, element: <GalleryPage /> },
      {
        element: <ProfileLayout />,
        children: [{ path: ROUTES.profile, element: <ProfilePage /> }],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
