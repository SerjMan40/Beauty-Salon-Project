import { ArticleList } from '../ArticleList/ArticleList'
import type { Article } from '../../../../types/article.types'

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles.length) return null

  return (
    <section className="related-articles" aria-labelledby="related-articles-title">
      <h2 id="related-articles-title">Похожие статьи</h2>
      <ArticleList articles={articles} />
    </section>
  )
}
