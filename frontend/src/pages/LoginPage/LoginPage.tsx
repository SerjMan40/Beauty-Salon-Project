import { Link } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { LoginForm } from '../../features/auth'

import './LoginPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function LoginPage() {
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
            <LoginForm />

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