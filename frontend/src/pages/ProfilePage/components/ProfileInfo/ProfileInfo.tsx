import type { ProfileInfoProps } from './types'

import './ProfileInfo.scss'

export function ProfileInfo({ user }: ProfileInfoProps) {
  return (
    <section className="profile-info" aria-labelledby="profile-info-title">
      <h2 id="profile-info-title" className="profile-info__title">
        Личные данные
      </h2>

      <dl className="profile-info__list">
        <div className="profile-info__item">
          <dt>Имя</dt>
          <dd>{user.name}</dd>
        </div>

        <div className="profile-info__item">
          <dt>Email</dt>
          <dd>{user.email}</dd>
        </div>

        {user.phone && (
          <div className="profile-info__item">
            <dt>Телефон</dt>
            <dd>{user.phone}</dd>
          </div>
        )}
      </dl>
    </section>
  )
}