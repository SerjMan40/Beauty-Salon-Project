import type { AppointmentStatus } from '../../../constants/appointment.constants'

export function StatusBadge({ status }: { status: AppointmentStatus }) {
  return <span className={`status-badge status-badge--${status}`}>{status}</span>
}
