
import './StatusBadge.scss'
import type { StatusBadgeProps, StatusBadgeStatus } from './types'

const statusLabels: Record<StatusBadgeStatus, string> = {
  active: 'Active',
  inactive: 'Inactive',
  pending: 'Pending',
  confirmed: 'Confirmed',
  cancelled: 'Cancelled',
  completed: 'Completed',
  available: 'Available',
  unavailable: 'Unavailable',
}

export const StatusBadge = ({
  status,
  label,
  className = '',
  ...props
}: StatusBadgeProps) => {
  const statusBadgeClassName = [
    'status-badge',
    `status-badge--${status}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={statusBadgeClassName} {...props}>
      <span className="status-badge__dot" aria-hidden="true" />
      {label || statusLabels[status]}
    </span>
  )
}