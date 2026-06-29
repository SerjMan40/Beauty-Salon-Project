import './TrustSection.scss'

export interface TrustItem {
  title: string
  description: string
}

export function TrustSection({ items }: { items: TrustItem[] }) {
  return (
    <section className="trust-section" aria-labelledby="trust-title">
      <h2 id="trust-title">Почему нам доверяют</h2>
      <div className="trust-section__grid">
        {items.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
