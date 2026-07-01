import { Link } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { SectionHeader } from '../../components/ui/SectionHeader'

import './NotFoundPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

export function NotFoundPage() {
  return (
    <section
      className="not-found-page"
      aria-labelledby="not-found-page-title"
    >
      <PageContainer>
        <div className="not-found-page__content">
          <SectionHeader
            eyebrow="404"
            title="Страница не найдена"
            titleId="not-found-page-title"
            description="Возможно, ссылка устарела или страница была перемещена."
          />

          <Link
            to={ROUTES.home}
            className="not-found-page__button"
          >
            На главную
          </Link>
        </div>
      </PageContainer>
    </section>
  )
}