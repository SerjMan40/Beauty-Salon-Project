import { ArticleCard } from '../ArticleCard/ArticleCard'
import type { Article } from '../../../../types/article.types'

interface ArticleListProps {
  articles: Article[]
  onArticleClick?: (article: Article) => void
}

export function ArticleList({ articles, onArticleClick }: ArticleListProps) {
  if (!articles.length) {
    return <p className="article-list__empty">Статьи пока не добавлены.</p>
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} onClick={onArticleClick} />
      ))}
    </div>
  )
}
