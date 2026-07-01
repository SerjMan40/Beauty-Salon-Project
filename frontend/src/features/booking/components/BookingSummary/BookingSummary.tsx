import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import type { BookingSummaryProps } from './types'

import './BookingSummary.scss'

export function BookingSummary({
  serviceName,
  masterName,
  selectedDate,
  selectedTime,
  price,
}: BookingSummaryProps) {
  const formattedDate = selectedDate
    ? format(selectedDate, 'd MMMM yyyy', { locale: ru })
    : 'Дата не выбрана'

  return (
    <aside className="booking-summary" aria-labelledby="booking-summary-title">
      <h3 className="booking-summary__title" id="booking-summary-title">
        Ваша запись
      </h3>

      <dl className="booking-summary__list">
        <div className="booking-summary__item">
          <dt>Услуга</dt>
          <dd>{serviceName}</dd>
        </div>

        <div className="booking-summary__item">
          <dt>Мастер</dt>
          <dd>{masterName}</dd>
        </div>

        <div className="booking-summary__item">
          <dt>Дата</dt>
          <dd>{formattedDate}</dd>
        </div>

        <div className="booking-summary__item">
          <dt>Время</dt>
          <dd>{selectedTime || 'Время не выбрано'}</dd>
        </div>
        <div className="booking-summary__item">
          <dt>Стоимость</dt>
          <dd>{price.toLocaleString('ru-RU')} ₽</dd>
        </div>
      </dl>

      <button
        className="booking-summary__button"
        type="button"
        disabled={!selectedDate || !selectedTime}
      >
        Подтвердить запись
      </button>
    </aside>
  )
}
