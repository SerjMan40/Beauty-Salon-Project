import { Navigate, Outlet } from 'react-router-dom'
import { selectCurrentUser } from '../../features/auth'
import { useAppSelector } from '../../hooks'
import { ROUTES } from '../config/routes'

export function AdminGuard() {
  const user = useAppSelector(selectCurrentUser)
  return user?.role === 'admin' ? <Outlet /> : <Navigate to={ROUTES.home} replace />
}
