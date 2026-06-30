import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../app/config/routes'
import { formatDuration } from '../../../../utils/formatters/formatDuration'
import { formatPrice } from '../../../../utils/formatters/formatPrice'
import type { ServiceDetailsProps } from './types'

import './ServiceDetails.scss'

export function ServiceDetails({ service }: ServiceDetailsProps) {
  const { id, name, description, price, durationMinutes, imageUrl, category } = service

  return (
    <div className="service-details" aria-labelledby="service-title">
      <div className="service-details__content">
        {category && <span className="service-details__eyebrow">{category}</span>}

        <h1 id="service-title" className="service-details__title">
          {name}
        </h1>

        <p className="service-details__description">{description}</p>

        <div className="service-details__meta">
          <span>от {formatPrice(price)}</span>
          <span>{formatDuration(durationMinutes)}</span>
        </div>

        <div className="service-details__actions">
          <Link className="button" to={`${ROUTES.booking}?serviceId=${encodeURIComponent(id)}`}>
            Записаться
          </Link>

          <Link to={ROUTES.services}>Все услуги</Link>
        </div>
      </div>

      <aside className="service-details__aside">
        {imageUrl && <img className="service-details__image" src={imageUrl} alt={name} />}

        <h2>Что входит</h2>

        <ul>
          <li>Консультация мастера</li>
          <li>Подбор подходящего ухода</li>
          <li>Профессиональное выполнение процедуры</li>
          <li>Рекомендации после визита</li>
        </ul>
      </aside>
    </div>
  )
}
