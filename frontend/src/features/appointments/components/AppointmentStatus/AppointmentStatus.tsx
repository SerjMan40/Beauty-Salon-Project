import type { AppointmentStatus as AppointmentStatusValue } from '../../../../constants/appointment.constants'
import { StatusBadge } from '../../../../components/ui/StatusBadge/StatusBadge'

interface AppointmentStatusProps {
  status: AppointmentStatusValue
}

export function AppointmentStatus({ status }: AppointmentStatusProps) {
  return <StatusBadge status={status} />
}
