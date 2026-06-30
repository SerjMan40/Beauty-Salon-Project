import type { HTMLAttributes, PropsWithChildren } from 'react'
import { classNames } from '../../../utils/helpers/classNames'
import './MainContent.scss'

export function MainContent({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <main className={classNames('main-content', className)} {...props}>
      {children}
    </main>
  )
}
