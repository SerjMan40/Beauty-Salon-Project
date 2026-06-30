import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../app/config/routes'
import type { MasterProfileProps } from './types'

import './MasterProfile.scss'

export function MasterProfile({ master }: MasterProfileProps) {
  const { id, name, specialization, avatarUrl, experienceYears, bio } = master

  return (
    <section className="master-profile" aria-labelledby="master-profile-name">
      <div className="master-profile__hero">
        <div className="master-profile__image">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} />
          ) : (
            <div className="master-profile__placeholder">Фото мастера</div>
          )}
        </div>

        <div className="master-profile__content">
          <span className="master-profile__specialization">{specialization}</span>

          <h1 id="master-profile-name" className="master-profile__name">
            {name}
          </h1>

          {bio && <p className="master-profile__description">{bio}</p>}

          {experienceYears !== undefined && (
            <p className="master-profile__experience">Опыт: {experienceYears} лет</p>
          )}

          <Link
            className="button master-profile__button"
            to={`${ROUTES.booking}?masterId=${encodeURIComponent(id)}`}
          >
            Записаться к мастеру
          </Link>
        </div>
      </div>
    </section>
  )
}
