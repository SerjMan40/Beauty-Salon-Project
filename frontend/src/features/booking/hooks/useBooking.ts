import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { appointmentsApi } from '../api/booking.api'
import { selectAppointments, selectAppointmentsLoading } from '../store/booking.selectors'
import { addAppointment } from '../store/booking.slice'
import type { CreateAppointmentDto } from '../types/booking.types'

export function useBooking() {
  const dispatch = useAppDispatch()
  const appointments = useAppSelector(selectAppointments)
  const isLoading = useAppSelector(selectAppointmentsLoading)

  const book = useCallback(
    async (payload: CreateAppointmentDto) => {
      const { data } = await appointmentsApi.create(payload)
      dispatch(addAppointment(data))
      return data
    },
    [dispatch],
  )

  return { appointments, isLoading, book }
}
