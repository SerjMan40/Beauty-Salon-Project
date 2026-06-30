import type { PortfolioItem } from './types'

import './MasterPortfolio.scss'

interface MasterPortfolioProps {
  items: PortfolioItem[]
}

export function MasterPortfolio({ items }: MasterPortfolioProps) {
  if (!items.length) {
    return <p className="master-portfolio__empty">Портфолио пока не добавлено.</p>
  }

  return (
    <div className="master-portfolio">
      {items.map(({ id, title, image }) => (
        <article className="master-portfolio__item" key={id}>
          <div className="master-portfolio__image">
            {image ? (
              <img src={image} alt={title} />
            ) : (
              <div className="master-portfolio__placeholder">{title}</div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
