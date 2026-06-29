import { Outlet } from 'react-router-dom'

export function ProfileLayout() {
  return (
    <section className="profile-layout">
      <Outlet />
    </section>
  )
}
