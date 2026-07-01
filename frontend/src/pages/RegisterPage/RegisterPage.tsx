import { Link, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { SectionHeader } from '../../components/ui'
import { RegisterForm } from '../../features/auth'
import { useAuth } from '../../features/auth/hooks/useAuth'

import './RegisterPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleRegister = async (values: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => {
    await register({
      name: values.name,
      email: values.email,
      password: values.password,
    })
    navigate(ROUTES.profile)
  }

  return (
    <section className="register-page" aria-labelledby="register-page-title">
      <PageContainer>
        <div className="register-page__inner">
          <div className="register-page__header">
            <SectionHeader
              eyebrow="Регистрация"
              title="Создать аккаунт"
              titleId="register-page-title"
              description="Создайте аккаунт, чтобы быстрее записываться на услуги и управлять своими визитами."
            />
          </div>

          <div className="register-page__card">
            <RegisterForm onSubmit={(values) => void handleRegister(values)} />

            <p className="register-page__footer">
              Уже есть аккаунт? <Link to={ROUTES.login}>Войти</Link>
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
