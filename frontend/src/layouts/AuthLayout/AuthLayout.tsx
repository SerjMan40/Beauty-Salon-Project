import { Outlet } from 'react-router-dom'
import './AuthLayout.scss'

export function AuthLayout() {
  return (
    <main className="auth-layout">
      <Outlet />
    </main>
  )
}
