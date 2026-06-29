export interface PortfolioItem {
  id: string
  imageUrl: string
  description: string
}

interface MasterPortfolioProps {
  items: PortfolioItem[]
}

export function MasterPortfolio({ items }: MasterPortfolioProps) {
  return (
    <section aria-labelledby="master-portfolio-title">
      <h2 id="master-portfolio-title">Работы мастера</h2>
      <div className="master-portfolio">
        {items.map((item) => (
          <figure key={item.id}>
            <img src={item.imageUrl} alt={item.description} loading="lazy" />
            <figcaption>{item.description}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
