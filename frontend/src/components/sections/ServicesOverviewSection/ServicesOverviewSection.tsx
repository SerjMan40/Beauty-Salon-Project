import { ServicesList, type Service } from '../../../features/services'
import './ServicesOverviewSection.scss'

export function ServicesOverviewSection({ services }: { services: Service[] }) {
  return (
    <section className="services-overview" aria-labelledby="services-title">
      <h2 id="services-title">Наши услуги</h2>
      <div className="services-overview__grid">
        <ServicesList services={services} />
      </div>
    </section>
  )
}
