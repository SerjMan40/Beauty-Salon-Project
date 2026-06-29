import { MasterCard, type Master } from '../../../features/masters'
import './MastersPreviewSection.scss'

export function MastersPreviewSection({ masters }: { masters: Master[] }) {
  return (
    <section className="masters-preview" aria-labelledby="masters-title">
      <h2 id="masters-title">Наши мастера</h2>
      <div className="masters-preview__grid">
        {masters.map((master) => (
          <MasterCard key={master.id} master={master} />
        ))}
      </div>
    </section>
  )
}
