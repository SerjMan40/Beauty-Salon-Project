import type { ProfileBookingsProps } from './types'

import './ProfileBookings.scss'

export function ProfileBookings({
  bookings,
}: ProfileBookingsProps) {
  return (
    <section
      className="profile-bookings"
      aria-labelledby="profile-bookings-title"
    >
      <h2
        id="profile-bookings-title"
        className="profile-bookings__title"
      >
        Мои записи
      </h2>

      {bookings.length === 0 ? (
        <p className="profile-bookings__empty">
          У вас пока нет записей.
        </p>
      ) : (
        <div className="profile-bookings__list">
          {bookings.map((booking) => (
            <article
              key={booking.id}
              className="profile-bookings__card"
            >
              <h3 className="profile-bookings__service">
                {booking.serviceName}
              </h3>

              <p>
                <strong>Мастер:</strong> {booking.masterName}
              </p>

              <p>
                <strong>Дата:</strong> {booking.date}
              </p>

              <p>
                <strong>Время:</strong> {booking.time}
              </p>

              <p>
                <strong>Статус:</strong> {booking.status}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}