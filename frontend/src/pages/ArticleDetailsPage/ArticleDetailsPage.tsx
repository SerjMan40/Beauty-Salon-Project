import { Link, useParams } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'

import { EmptyState } from '../../components/sections/EmptyState/EmptyState'

import './ArticleDetailsPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

const ARTICLES = [
  {
    id: '1',
    title: 'Как выбрать уход для волос',
    description: 'Разбираем базовые принципы домашнего и салонного ухода.',
    content:
      'Правильный уход начинается с понимания состояния волос, кожи головы и желаемого результата. Лучше всего подобрать уход после консультации с мастером.',
  },
  {
    id: '2',
    title: 'Что важно знать перед окрашиванием',
    description: 'Коротко о подготовке, консультации и ожиданиях от процедуры.',
    content:
      'Перед окрашиванием важно обсудить с мастером историю предыдущих процедур, желаемый оттенок и состояние волос. Это помогает получить более предсказуемый результат.',
  },
  {
    id: '3',
    title: 'Почему регулярный уход работает лучше',
    description: 'Объясняем, как системность помогает сохранить результат.',
    content:
      'Регулярный уход помогает поддерживать качество волос, кожи и общего образа. Даже простые процедуры дают лучший эффект, если выполняются системно.',
  },
] as const

export function ArticleDetailsPage() {
  const { articleId = '' } = useParams<{ articleId: string }>()

  const article = ARTICLES.find((article) => article.id === articleId)

  if (!article) {
    return (
      <section className="article-details-page">
        <PageContainer>
          <div className="article-details-page__state">
            <EmptyState
              title="Статья не найдена"
              description="Возможно, она была удалена или ссылка устарела."
            />

            <Link className="article-details-page__link" to={ROUTES.articles}>
              Вернуться к статьям
            </Link>
          </div>
        </PageContainer>
      </section>
    )
  }

  return (
    <article className="article-details-page">
      <PageContainer>
        <Link className="article-details-page__back" to={ROUTES.articles}>
          ← Все статьи
        </Link>

        <header className="article-details-page__header">
          <span className="article-details-page__eyebrow">Статья</span>

          <h1 className="article-details-page__title">{article.title}</h1>

          <p className="article-details-page__description">
            {article.description}
          </p>
        </header>

        <div className="article-details-page__content">
          <p>{article.content}</p>
        </div>
      </PageContainer>
    </article>
  )
}