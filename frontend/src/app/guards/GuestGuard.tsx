import { Navigate, Outlet } from 'react-router-dom'
import { selectIsAuthenticated } from '../../features/auth'
import { useAppSelector } from '../../hooks'
import { ROUTES } from '../config/routes'

export function GuestGuard() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  return isAuthenticated ? <Navigate to={ROUTES.profile} replace /> : <Outlet />
}
