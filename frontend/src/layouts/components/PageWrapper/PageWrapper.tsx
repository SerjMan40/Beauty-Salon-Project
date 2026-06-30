import type { HTMLAttributes, PropsWithChildren } from 'react'
import { classNames } from '../../../utils/helpers/classNames'
import './PageWrapper.scss'

export function PageWrapper({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={classNames('page-wrapper', className)} {...props}>
      {children}
    </div>
  )
}
