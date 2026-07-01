import { useState } from 'react'

import { APPOINTMENT_STATUSES } from '../../../../constants/appointment.constants'
import { BookingCalendar } from '../BookingCalendar/BookingCalendar'
import { BookingStatus } from '../BookingStatus/BookingStatus'
import { BookingSummary } from '../BookingSummary/BookingSummary'
import { BookingTimeSlots } from '../BookingTimeSlots/BookingTimeSlots'

import type { BookingFormProps } from './types'

import './BookingForm.scss'

export function BookingForm({
  className,
  status = APPOINTMENT_STATUSES.pending,
  serviceName,
  masterName,
  price,
  slots,
  minDate,
}: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState('')

  return (
    <section className={className ?? 'booking-form'}>
      <BookingStatus status={status} />

      <div className="booking-form__content">
        <BookingCalendar
          value={selectedDate}
          minDate={minDate}
          onChange={setSelectedDate}
        />

        <BookingTimeSlots
          slots={slots}
          selectedTime={selectedTime}
          onSelect={setSelectedTime}
        />
      </div>

      {selectedDate && selectedTime && (
        <BookingSummary
          serviceName={serviceName}
          masterName={masterName}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          price={price}
        />
      )}
    </section>
  )
}
