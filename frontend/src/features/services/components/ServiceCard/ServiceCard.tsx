import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../app/config/routes'
import { formatDuration } from '../../../../utils/formatters/formatDuration'
import { formatPrice } from '../../../../utils/formatters/formatPrice'
import type { ServiceCardProps } from './types'

import './ServiceCard.scss'

export function ServiceCard({ service }: ServiceCardProps) {
  const { id, name, description, price, durationMinutes, imageUrl, category } = service

  return (
    <article className="service-card">
      {imageUrl && <img className="service-card__image" src={imageUrl} alt={name} />}

      <div className="service-card__content">
        {category && <span className="service-card__category">{category}</span>}

        <h3 className="service-card__title">{name}</h3>

        <p className="service-card__description">{description}</p>

        <div className="service-card__meta">
          <span>от {formatPrice(price)}</span>
          <span>{formatDuration(durationMinutes)}</span>
        </div>
      </div>

      <div className="service-card__actions">
        <Link className="service-card__link" to={ROUTES.serviceDetails.replace(':serviceId', id)}>
          Подробнее
        </Link>

        <Link
          className="service-card__booking"
          to={`${ROUTES.booking}?serviceId=${encodeURIComponent(id)}`}
        >
          Записаться
        </Link>
      </div>
    </article>
  )
}
