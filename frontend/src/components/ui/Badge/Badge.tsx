import type { PropsWithChildren } from 'react'
import { classNames } from '../../../utils/classNames'

type BadgeVariant = 'neutral' | 'success' | 'warning' | 'danger'

interface BadgeProps extends PropsWithChildren {
  variant?: BadgeVariant
  className?: string
}

export function Badge({
  variant = 'neutral',
  className,
  children,
}: BadgeProps) {
  return (
    <span className={classNames('badge', `badge--${variant}`, className)}>
      {children}
    </span>
  )
}
