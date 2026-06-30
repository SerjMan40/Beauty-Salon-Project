import type { AppointmentStatus } from '../../../../constants/appointment.constants'

export type BookingStatusVariant = 'idle' | 'info' | 'success' | 'error'

export interface BookingStatusProps {
  status?: AppointmentStatus
  title?: string
  description?: string
  variant?: BookingStatusVariant
}
