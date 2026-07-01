import type { BookingTimeSlotsProps } from './types'

import './BookingTimeSlots.scss'

export function BookingTimeSlots({
  slots,
  selectedTime,
  onSelect,
}: BookingTimeSlotsProps) {
  return (
    <div className="booking-time-slots">
      <h3 className="booking-time-slots__title">Выберите время</h3>

      <div className="booking-time-slots__grid">
        {slots.map((time) => {
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
