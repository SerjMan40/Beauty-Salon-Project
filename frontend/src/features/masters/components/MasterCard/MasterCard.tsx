import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../app/config/routes'
import type { MasterCardProps } from './types'

import './MasterCard.scss'

export function MasterCard({ master }: MasterCardProps) {
  const { id, name, specialization, experienceYears, bio, avatarUrl } = master

  return (
    <article className="master-card">
      <div className="master-card__image">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} />
        ) : (
          <div className="master-card__placeholder">Фото</div>
        )}
      </div>

      <div className="master-card__content">
        <h3 className="master-card__name">{name}</h3>
        <p className="master-card__specialization">{specialization}</p>

        {experienceYears !== undefined && (
          <p className="master-card__experience">Опыт: {experienceYears} лет</p>
        )}

        {bio && <p className="master-card__description">{bio}</p>}
      </div>

      <div className="master-card__actions">
        <Link className="master-card__link" to={ROUTES.masterDetails.replace(':masterId', id)}>
          Подробнее
        </Link>
        <Link
          className="master-card__booking"
          to={`${ROUTES.booking}?masterId=${encodeURIComponent(id)}`}
        >
          Записаться
        </Link>
      </div>
    </article>
  )
}
