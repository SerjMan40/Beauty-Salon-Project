import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectIsAuthenticated } from '../../features/auth'
import { useAppSelector } from '../../hooks'
import { ROUTES } from '../config/routes'

export function AuthGuard() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const location = useLocation()
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.login} replace state={{ from: location }} />
  )
}
