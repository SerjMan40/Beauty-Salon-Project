import { RegisterForm } from '../../features/auth'
import './RegisterPage.scss'

export function RegisterPage() {
  return (
    <section className="register-page">
      <h1>Регистрация</h1>
      <RegisterForm onSubmit={() => undefined} />
    </section>
  )
}
