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
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  return (
    <section className={className ?? 'booking-form'}>
      <BookingStatus status={status} />

      <div className="booking-form__content">
        <BookingCalendar
          value={selectedDate}
          min={minDate}
          onChange={setSelectedDate}
        />

        <BookingTimeSlots
          slots={slots}
          value={selectedTime}
          onChange={setSelectedTime}
        />
      </div>

      {selectedDate && selectedTime && (
        <BookingSummary
          serviceName={serviceName}
          masterName={masterName}
          startsAt={`${selectedDate}T${selectedTime}`}
          price={price}
        />
      )}
    </section>
  )
}
