import type { AppointmentStatus } from '../../../constants/appointment.constants'
import type { Entity } from '../../../types/common.types'

export interface Appointment extends Entity {
  serviceId: string
  masterId: string
  startsAt: string
  status: AppointmentStatus
}

export type CreateAppointmentDto = Pick<
  Appointment,
  'serviceId' | 'masterId' | 'startsAt'
>
