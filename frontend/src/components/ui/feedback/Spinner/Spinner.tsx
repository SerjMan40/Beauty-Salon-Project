
import './Spinner.scss'
import type { SpinnerProps } from './types'

export const Spinner = ({
  size = 'md',
  className = '',
  ...props
}: SpinnerProps) => {
  const spinnerClassName = [
    'spinner',
    `spinner--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      className={spinnerClassName}
      role="status"
      aria-label="Loading"
      {...props}
    />
  )
}