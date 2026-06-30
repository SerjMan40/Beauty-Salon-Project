import type { AppointmentStatus } from '../../../../constants/appointment.constants'

export interface BookingFormProps {
  className?: string
  status?: AppointmentStatus
  serviceName: string
  masterName: string
  price: number
  slots: string[]
  minDate?: string
}
