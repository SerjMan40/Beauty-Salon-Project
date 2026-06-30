import type { Article } from '../../../../types/article.types'

interface ArticleCardProps {
  article: Article
  onClick?: (article: Article) => void
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  const handleClick = () => onClick?.(article)

  return (
    <article className="article-card">
      {article.imageUrl && <img className="article-card__image" src={article.imageUrl} alt="" />}
      <div className="article-card__content">
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        {article.publishedAt && (
          <time className="article-card__date" dateTime={article.publishedAt}>
            {article.publishedAt}
          </time>
        )}
        {onClick && (
          <button className="article-card__button" type="button" onClick={handleClick}>
            Читать
          </button>
        )}
      </div>
    </article>
  )
}
