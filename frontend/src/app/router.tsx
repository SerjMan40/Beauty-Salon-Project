import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from './config/routes'
import { AdminGuard } from './guards/AdminGuard'
import { AuthGuard } from './guards/AuthGuard'
import { GuestGuard } from './guards/GuestGuard'
import { AdminLayout } from '../layouts/AdminLayout/AdminLayout'
import { ArticleLayout } from '../layouts/ArticleLayout/ArticleLayout'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { BookingLayout } from '../layouts/BookingLayout/BookingLayout'
import { EmptyLayout } from '../layouts/EmptyLayout/EmptyLayout'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { ProfileLayout } from '../layouts/ProfileLayout/ProfileLayout'
import { ArticleDetailsPage } from '../pages/ArticleDetailsPage/ArticleDetailsPage'
import { ArticlesPage } from '../pages/ArticlesPage/ArticlesPage'
import { BookingPage } from '../pages/BookingPage/BookingPage'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { GalleryPage } from '../pages/GalleryPage/GalleryPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { MasterDetailsPage } from '../pages/MasterDetailsPage/MasterDetailsPage'
import { MastersPage } from '../pages/MastersPage/MastersPage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage/ProfilePage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'
import { ServiceDetailsPage } from '../pages/ServiceDetailsPage/ServiceDetailsPage'
import { ServicesPage } from '../pages/ServicesPage/ServicesPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: ROUTES.home, element: <HomePage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.serviceDetails, element: <ServiceDetailsPage /> },
      { path: ROUTES.masters, element: <MastersPage /> },
      { path: ROUTES.masterDetails, element: <MasterDetailsPage /> },
      { path: ROUTES.articles, element: <ArticlesPage /> },
      {
        element: <ArticleLayout />,
        children: [
          {
            path: ROUTES.articleDetails,
            element: <ArticleDetailsPage />,
          },
        ],
      },
      { path: ROUTES.gallery, element: <GalleryPage /> },
      {
        element: <AuthGuard />,
        children: [
          {
            element: <BookingLayout />,
            children: [{ path: ROUTES.booking, element: <BookingPage /> }],
          },
          {
            element: <ProfileLayout />,
            children: [{ path: ROUTES.profile, element: <ProfilePage /> }],
          },
          {
            element: <AdminGuard />,
            children: [
              {
                path: ROUTES.admin,
                element: <AdminLayout />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <GuestGuard />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: ROUTES.login, element: <LoginPage /> },
          { path: ROUTES.register, element: <RegisterPage /> },
        ],
      },
    ],
  },
  {
    element: <EmptyLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }],
  },
])
