import { Outlet } from 'react-router-dom'
import './ArticleLayout.scss'

export function ArticleLayout() {
  return (
    <article className="article-layout">
      <Outlet />
    </article>
  )
}
