import { Link } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { SectionHeader } from '../../components/ui'

import './ErrorPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function ErrorPage() {
  return (
    <section className="error-page" aria-labelledby="error-page-title">
      <PageContainer>
        <div className="error-page__content">
          <SectionHeader
            eyebrow="Ошибка"
            title="Что-то пошло не так"
            titleId="error-page-title"
            description="Во время обработки запроса произошла непредвиденная ошибка. Попробуйте обновить страницу или вернуться позже."
          />

          <Link
            to={ROUTES.home}
            className="error-page__button"
          >
            Вернуться на главную
          </Link>
        </div>
      </PageContainer>
    </section>
  )
}
