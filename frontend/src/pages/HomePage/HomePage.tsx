import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes.constants'

export function HomePage() {
  return (
    <section className="hero-section">
      <p className="eyebrow">Красота в деталях</p>
      <h1>Beauty Salon</h1>
      <p>Архитектура готова — теперь здесь можно собирать главную страницу.</p>
      <Link className="button" to={ROUTES.booking}>
        Записаться
      </Link>
    </section>
  )
}
