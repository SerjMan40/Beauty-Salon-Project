import { Link } from 'react-router-dom'
import { formatPrice } from '../../../../utils/formatPrice'
import type { Service } from '../../types/service.types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      {service.imageUrl && (
        <img className="service-card__image" src={service.imageUrl} alt="" />
      )}
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>{service.durationMinutes} мин.</p>
      <strong>{formatPrice(service.price)}</strong>
      <Link to={`/services/${service.id}`}>Подробнее</Link>
    </article>
  )
}
