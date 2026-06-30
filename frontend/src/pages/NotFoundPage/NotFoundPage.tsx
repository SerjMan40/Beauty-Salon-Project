import { Link } from 'react-router-dom'
import './NotFoundPage.scss'

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h1>Страница не найдена</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  )
}
