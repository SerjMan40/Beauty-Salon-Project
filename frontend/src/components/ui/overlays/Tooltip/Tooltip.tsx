
import './Tooltip.scss'
import type { TooltipProps } from './types'

export const Tooltip = ({
  content,
  children,
  position = 'top',
  className = '',
}: TooltipProps) => {
  const tooltipClassName = [
    'tooltip',
    `tooltip--${position}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={tooltipClassName}>
      <span className="tooltip__trigger">{children}</span>

      <span className="tooltip__content" role="tooltip">
        {content}
      </span>
    </span>
  )
}