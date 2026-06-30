import { MasterCard, selectMasters } from '../../features/masters'
import { useAppSelector } from '../../hooks'
import './MastersPage.scss'

export function MastersPage() {
  const masters = useAppSelector(selectMasters)

  return (
    <section className="masters-page">
      <h1>Мастера</h1>
      <div className="masters-page__grid">
        {masters.map((master) => (
          <MasterCard key={master.id} master={master} />
        ))}
      </div>
    </section>
  )
}
