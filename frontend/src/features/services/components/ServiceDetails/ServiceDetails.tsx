import { formatPrice } from '../../../../utils/formatPrice'
import type { Service } from '../../types/service.types'

interface ServiceDetailsProps {
  service: Service
}

export function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <section className="service-details">
      {service.imageUrl && <img src={service.imageUrl} alt="" />}
      <div>
        <h1>{service.name}</h1>
        {service.category && <p>{service.category}</p>}
        <p>{service.description}</p>
        <p>{service.durationMinutes} мин.</p>
        <strong>{formatPrice(service.price)}</strong>
      </div>
    </section>
  )
}
