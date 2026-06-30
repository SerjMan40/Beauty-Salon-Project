
import type { Service } from '../../types/service.types'
import { ServiceCard } from '../ServiceCard/ServiceCard'


import './ServicesList.scss'

interface ServicesListProps {
  services: Service[]
}

export function ServicesList({ services }: ServicesListProps) {
  if (!services.length) {
    return (
      <p className="services-list__empty">
        Пока нет доступных услуг.
      </p>
    )
  }

  return (
    <div className="services-list">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}