import { AppointmentStatus } from '../../../appointments'
import { formatDate } from '../../../../utils/date/formatDate'
import type { VisitHistoryItem } from '../../../../types/user.types'

interface ActiveAppointmentProps {
  appointment: VisitHistoryItem | null
}

export function ActiveAppointment({ appointment }: ActiveAppointmentProps) {
  if (!appointment) {
    return <p className="active-appointment__empty">Активных записей нет.</p>
  }

  return (
    <article className="active-appointment">
      <h3>{appointment.serviceName}</h3>
      <p>Мастер: {appointment.masterName}</p>
      <p>{formatDate(appointment.startsAt, 'dd.MM.yyyy HH:mm')}</p>
      <AppointmentStatus status={appointment.status} />
    </article>
  )
}
