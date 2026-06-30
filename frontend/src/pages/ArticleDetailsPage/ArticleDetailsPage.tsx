import { useParams } from 'react-router-dom'
import { selectArticleById } from '../../features/articles'
import { useAppSelector } from '../../hooks'
import './ArticleDetailsPage.scss'

export function ArticleDetailsPage() {
  const { articleId = '' } = useParams()
  const article = useAppSelector((state) => selectArticleById(state, articleId))

  if (!article) return <p>Статья не найдена.</p>

  return (
    <article className="article-details-page">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </article>
  )
}
