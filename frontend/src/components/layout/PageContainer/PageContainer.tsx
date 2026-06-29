import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { classNames } from '../../../utils/classNames'
import './PageContainer.scss'

interface PageContainerProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  as?: ElementType
  children: ReactNode
}

export function PageContainer({
  as: Component = 'div',
  className,
  children,
  ...props
}: PageContainerProps) {
  return (
    <Component
      className={classNames('page-container', className)}
      {...props}
    >
      {children}
    </Component>
  )
}
