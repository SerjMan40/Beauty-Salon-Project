import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { EmptyState } from '../../components/sections/EmptyState/EmptyState'
import { Loader, SectionHeader } from '../../components/ui'
import {
  fetchArticles,
  selectArticles,
  selectArticlesError,
  selectArticlesLoading,
} from '../../features/articles'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

import './ArticlesPage.scss'

export function ArticlesPage() {
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)
  const isLoading = useAppSelector(selectArticlesLoading)
  const error = useAppSelector(selectArticlesError)

  useEffect(() => {
    if (!articles.length && !isLoading) void dispatch(fetchArticles())
  }, [articles.length, dispatch, isLoading])

  return (
    <section className="articles-page" aria-labelledby="articles-page-title">
      <PageContainer>
        <div className="articles-page__header">
          <SectionHeader eyebrow="Статьи" title="Полезные материалы" titleId="articles-page-title" description="Советы по уходу, подготовке к процедурам и сохранению результата." />
        </div>

        {isLoading && <Loader />}
        {!isLoading && error && <EmptyState title="Не удалось загрузить статьи" description={error} />}
        {!isLoading && !error && (
          <div className="articles-page__grid">
            {articles.map(({ id, title, excerpt }) => (
              <article className="articles-page__card" key={id}>
                <h2 className="articles-page__card-title">{title}</h2>
                <p className="articles-page__card-description">{excerpt}</p>
                <Link className="articles-page__card-link" to={ROUTES.articleDetails.replace(':articleId', id)}>Читать</Link>
              </article>
            ))}
          </div>
        )}
      </PageContainer>
    </section>
  )
}
