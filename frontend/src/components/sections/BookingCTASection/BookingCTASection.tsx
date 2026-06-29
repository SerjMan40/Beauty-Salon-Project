import { Link } from 'react-router-dom'
import { ROUTES } from '../../../constants/routes.constants'
import './BookingCTASection.scss'

export function BookingCTASection() {
  return (
    <section className="booking-cta">
      <div>
        <h2>Время позаботиться о себе</h2>
        <p>Выберите удобную дату и запишитесь онлайн.</p>
      </div>
      <Link className="button" to={ROUTES.booking}>Записаться</Link>
    </section>
  )
}
