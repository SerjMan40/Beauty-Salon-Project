import type { ProfileActionsProps } from './types'

import './ProfileActions.scss'

export function ProfileActions({
  onEditProfile,
  onChangePassword,
  onLogout,
}: ProfileActionsProps) {
  return (
    <section className="profile-actions" aria-labelledby="profile-actions-title">
      <h2 id="profile-actions-title" className="profile-actions__title">
        Действия
      </h2>

      <div className="profile-actions__list">
        <button
          type="button"
          className="profile-actions__button"
          onClick={onEditProfile}
        >
          Редактировать профиль
        </button>

        <button
          type="button"
          className="profile-actions__button"
          onClick={onChangePassword}
        >
          Изменить пароль
        </button>

        <button
          type="button"
          className="profile-actions__button profile-actions__button--danger"
          onClick={onLogout}
        >
          Выйти
        </button>
      </div>
    </section>
  )
}