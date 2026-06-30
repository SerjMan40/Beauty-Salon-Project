import { LoginForm } from '../../features/auth'
import './LoginPage.scss'

export function LoginPage() {
  return (
    <section className="login-page">
      <h1>Вход</h1>
      <LoginForm onSubmit={() => undefined} />
    </section>
  )
}
