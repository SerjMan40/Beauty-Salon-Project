import { Outlet } from 'react-router-dom'
import './BookingLayout.scss'

export function BookingLayout() {
  return (
    <section className="booking-layout">
      <Outlet />
    </section>
  )
}
