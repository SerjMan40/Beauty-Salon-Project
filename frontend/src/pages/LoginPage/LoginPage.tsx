import { Link, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { SectionHeader } from '../../components/ui'
import { LoginForm } from '../../features/auth'
import { useAuth } from '../../features/auth/hooks/useAuth'

import './LoginPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleLogin = async (values: { email: string; password: string }) => {
    await login(values)
    navigate(ROUTES.profile)
  }

  return (
    <section className="login-page" aria-labelledby="login-page-title">
      <PageContainer>
        <div className="login-page__inner">
          <div className="login-page__header">
            <SectionHeader
              eyebrow="Вход"
              title="Войти в аккаунт"
              titleId="login-page-title"
              description="Авторизуйтесь, чтобы управлять своими записями и быстрее оформлять новые визиты."
            />
          </div>

          <div className="login-page__card">
            <LoginForm onSubmit={(values) => void handleLogin(values)} />

            <p className="login-page__footer">
              Нет аккаунта?{' '}
              <Link to={ROUTES.register}>Зарегистрироваться</Link>
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
