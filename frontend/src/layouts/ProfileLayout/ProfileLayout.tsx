import { Outlet } from 'react-router-dom'
import './ProfileLayout.scss'

export function ProfileLayout() {
  return (
    <section className="profile-layout">
      <Outlet />
    </section>
  )
}
