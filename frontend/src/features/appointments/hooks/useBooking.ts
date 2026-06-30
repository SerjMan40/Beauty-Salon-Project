import { useCallback } from 'react'
import { appointmentsApi } from '../api/appointments.api'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { addAppointment } from '../store/appointments.slice'
import { selectAppointments, selectAppointmentsLoading } from '../store/appointments.selectors'
import type { CreateAppointmentDto } from '../types/appointment.types'

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
