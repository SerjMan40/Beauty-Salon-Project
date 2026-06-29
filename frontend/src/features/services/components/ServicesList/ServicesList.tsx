import { ServiceCard } from '../ServiceCard/ServiceCard'
import type { Service } from '../../types/service.types'

interface ServicesListProps {
  services: Service[]
}

export function ServicesList({ services }: ServicesListProps) {
  if (!services.length) {
    return <p className="services-list__empty">Услуги пока не добавлены.</p>
  }

  return (
    <div className="services-list">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
