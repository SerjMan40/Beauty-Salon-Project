import { cloneElement, useId, type ReactElement, type ReactNode } from 'react'

interface TooltipProps {
  content: ReactNode
  children: ReactElement<{ 'aria-describedby'?: string }>
}

export function Tooltip({ content, children }: TooltipProps) {
  const id = useId()

  return (
    <span className="tooltip">
      {cloneElement(children, { 'aria-describedby': id })}
      <span id={id} className="tooltip__content" role="tooltip">
        {content}
      </span>
    </span>
  )
}
