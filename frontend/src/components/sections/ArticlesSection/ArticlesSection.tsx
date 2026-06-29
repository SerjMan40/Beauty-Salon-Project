import type { Article } from '../../../features/articles'
import './ArticlesSection.scss'

export function ArticlesSection({ articles }: { articles: Article[] }) {
  return (
    <section className="articles-section" aria-labelledby="articles-title">
      <h2 id="articles-title">Полезные статьи</h2>
      <div className="articles-section__grid">
        {articles.map((article) => (
          <article key={article.id}>
            {article.imageUrl && <img src={article.imageUrl} alt="" />}
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
