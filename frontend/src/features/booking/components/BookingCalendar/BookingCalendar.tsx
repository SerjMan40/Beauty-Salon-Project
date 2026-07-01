import { addDays, format, isAfter, isSameDay, parseISO, startOfDay } from 'date-fns'
import { ru } from 'date-fns/locale'

import type { BookingCalendarProps } from './types'

import './BookingCalendar.scss'

const AVAILABLE_DAYS_COUNT = 7

export function BookingCalendar({
  value,
  minDate,
  onChange,
}: BookingCalendarProps) {
  const today = startOfDay(new Date())
  const parsedMinDate = minDate ? startOfDay(parseISO(minDate)) : today
  const firstAvailableDay = isAfter(parsedMinDate, today) ? parsedMinDate : today
  const days = Array.from({ length: AVAILABLE_DAYS_COUNT }, (_, index) =>
    addDays(firstAvailableDay, index)
  )

  return (
    <div className="booking-calendar">
      <h3 className="booking-calendar__title">Выберите дату</h3>

      <div className="booking-calendar__grid">
        {days.map((day) => {
          const isSelected = value ? isSameDay(value, day) : false

          return (
            <button
              key={day.toISOString()}
              type="button"
              className={
                isSelected
                  ? 'booking-calendar__day booking-calendar__day--selected'
                  : 'booking-calendar__day'
              }
              onClick={() => onChange(day)}
            >
              <span className="booking-calendar__weekday">
                {format(day, 'EEE', { locale: ru })}
              </span>

              <span className="booking-calendar__date">
                {format(day, 'd MMM', { locale: ru })}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
