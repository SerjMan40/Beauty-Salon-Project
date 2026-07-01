import type { SectionActionsProps } from './SectionActions.types'

import './SectionActions.scss'

export const SectionActions = ({
  children,
  className = '',
  ...props
}: SectionActionsProps) => {
  const sectionActionsClassName = [
    'section-actions',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={sectionActionsClassName} {...props}>
      {children}
    </div>
  )
}