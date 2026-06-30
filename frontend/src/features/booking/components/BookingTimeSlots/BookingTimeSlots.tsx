import type { BookingTimeSlotsProps } from './types'

import './BookingTimeSlots.scss'

const TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
] as const

export function BookingTimeSlots({
  selectedTime,
  onSelect,
}: BookingTimeSlotsProps) {
  return (
    <div className="booking-time-slots">
      <h3 className="booking-time-slots__title">Выберите время</h3>

      <div className="booking-time-slots__grid">
        {TIME_SLOTS.map((time) => {
          const isSelected = selectedTime === time

          return (
            <button
              key={time}
              type="button"
              className={
                isSelected
                  ? 'booking-time-slots__item booking-time-slots__item--selected'
                  : 'booking-time-slots__item'
              }
              onClick={() => onSelect(time)}
            >
              {time}
            </button>
          )
        })}
      </div>
    </div>
  )
}