import { Link } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'

import { SectionHeader } from '../../components/ui'

import './ArticlesPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

const ARTICLES = [
  {
    id: '1',
    title: 'Как выбрать уход для волос',
    description: 'Разбираем базовые принципы домашнего и салонного ухода.',
  },
  {
    id: '2',
    title: 'Что важно знать перед окрашиванием',
    description: 'Коротко о подготовке, консультации и ожиданиях от процедуры.',
  },
  {
    id: '3',
    title: 'Почему регулярный уход работает лучше',
    description: 'Объясняем, как системность помогает сохранить результат.',
  },
] as const

export function ArticlesPage() {
  return (
    <section className="articles-page" aria-labelledby="articles-page-title">
      <PageContainer>
        <div className="articles-page__header">
          <SectionHeader
            eyebrow="Статьи"
            title="Полезные материалы"
            titleId="articles-page-title"
            description="Советы по уходу, подготовке к процедурам и поддержанию результата после визита."
          />
        </div>

        <div className="articles-page__grid">
          {ARTICLES.map(({ id, title, description }) => (
            <article className="articles-page__card" key={id}>
              <h2 className="articles-page__card-title">{title}</h2>

              <p className="articles-page__card-description">{description}</p>

              <Link
                className="articles-page__card-link"
                to={ROUTES.articleDetails.replace(':articleId', id)}
              >
                Читать
              </Link>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
