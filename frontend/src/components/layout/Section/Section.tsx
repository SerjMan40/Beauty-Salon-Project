import type { HTMLAttributes, PropsWithChildren } from 'react'
import { classNames } from '../../../utils/classNames'

interface SectionProps
  extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  spacing?: 'small' | 'medium' | 'large'
}

export function Section({
  spacing = 'medium',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={classNames('section', `section--${spacing}`, className)}
      {...props}
    >
      {children}
    </section>
  )
}
