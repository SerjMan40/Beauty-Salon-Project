import type { AppointmentStatus } from '../../../../constants/appointment.constants'
import type { BookingStatusProps, BookingStatusVariant } from './types'

import './BookingStatus.scss'

const DEFAULT_CONTENT = {
  idle: {
    title: 'Выберите дату и время',
    description: 'После выбора мы покажем краткое резюме вашей записи.',
  },
  info: {
    title: 'Запись формируется',
    description: 'Проверьте выбранные данные перед подтверждением.',
  },
  success: {
    title: 'Запись готова к подтверждению',
    description: 'Если всё верно, можно переходить к следующему шагу.',
  },
  error: {
    title: 'Что-то пошло не так',
    description: 'Проверьте выбранные данные и попробуйте ещё раз.',
  },
} as const

const STATUS_VARIANTS: Record<AppointmentStatus, BookingStatusVariant> = {
  pending: 'info',
  confirmed: 'success',
  completed: 'success',
  cancelled: 'error',
}

export function BookingStatus({
  status,
  title,
  description,
  variant,
}: BookingStatusProps) {
  const resolvedVariant = variant ?? (status ? STATUS_VARIANTS[status] : 'idle')
  const content = DEFAULT_CONTENT[resolvedVariant]

  return (
    <div className={`booking-status booking-status--${resolvedVariant}`} role="status">
      <h2 className="booking-status__title">{title ?? content.title}</h2>

      <p className="booking-status__description">
        {description ?? content.description}
      </p>
    </div>
  )
}
