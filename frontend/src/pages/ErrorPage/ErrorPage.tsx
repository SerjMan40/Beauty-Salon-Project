import { Link, useRouteError } from 'react-router-dom'
import './ErrorPage.scss'

export function ErrorPage() {
  const error = useRouteError()
  const message = error instanceof Error ? error.message : 'Произошла непредвиденная ошибка.'

  return (
    <section className="error-page" role="alert">
      <h1>Что-то пошло не так</h1>
      <p>{message}</p>
      <Link to="/">Вернуться на главную</Link>
    </section>
  )
}
