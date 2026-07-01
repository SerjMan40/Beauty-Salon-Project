import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { EmptyState } from '../../components/sections/EmptyState/EmptyState'
import { Loader } from '../../components/ui'
import {
  fetchArticles,
  selectArticleById,
  selectArticles,
  selectArticlesError,
  selectArticlesLoading,
} from '../../features/articles'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

import './ArticleDetailsPage.scss'

export function ArticleDetailsPage() {
  const { articleId = '' } = useParams<{ articleId: string }>()
  const dispatch = useAppDispatch()
  const articles = useAppSelector(selectArticles)
  const article = useAppSelector(selectArticleById(articleId))
  const isLoading = useAppSelector(selectArticlesLoading)
  const error = useAppSelector(selectArticlesError)

  useEffect(() => {
    if (!articles.length && !isLoading) void dispatch(fetchArticles())
  }, [articles.length, dispatch, isLoading])

  if (isLoading) return <PageContainer><Loader /></PageContainer>
  if (error || !article) {
    return <PageContainer><EmptyState title="Статья не найдена" description={error ?? 'Возможно, ссылка устарела.'} /></PageContainer>
  }

  return (
    <article className="article-details-page">
      <PageContainer>
        <Link className="article-details-page__back" to={ROUTES.articles}>← Все статьи</Link>
        <header className="article-details-page__header">
          <span className="article-details-page__eyebrow">Статья</span>
          <h1 className="article-details-page__title">{article.title}</h1>
          <p className="article-details-page__description">{article.excerpt}</p>
        </header>
        <div className="article-details-page__content"><p>{article.content}</p></div>
      </PageContainer>
    </article>
  )
}
