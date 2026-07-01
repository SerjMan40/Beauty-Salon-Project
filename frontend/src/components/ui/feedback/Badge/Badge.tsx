
import './Badge.scss'
import type { BadgeProps } from './types'

export const Badge = ({
  children,
  variant = 'neutral',
  size = 'md',
  rounded = false,
  className = '',
  ...props
}: BadgeProps) => {
  const badgeClassName = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded && 'badge--rounded',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={badgeClassName} {...props}>
      {children}
    </span>
  )
}