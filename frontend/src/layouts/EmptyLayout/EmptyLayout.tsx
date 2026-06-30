import { Outlet } from 'react-router-dom'
import './EmptyLayout.scss'

export function EmptyLayout() {
  return (
    <main className="empty-layout">
      <Outlet />
    </main>
  )
}
