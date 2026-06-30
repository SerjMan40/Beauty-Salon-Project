import { Outlet } from 'react-router-dom'
import './AdminLayout.scss'

export function AdminLayout() {
  return (
    <div className="admin-layout">
      <Outlet />
    </div>
  )
}
