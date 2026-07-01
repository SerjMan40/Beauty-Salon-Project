import type { SectionDescriptionProps } from './SectionDescription.types'

import './SectionDescription.scss'

export const SectionDescription = ({
  children,
  className = '',
  ...props
}: SectionDescriptionProps) => {
  const sectionDescriptionClassName = [
    'section-description',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <p className={sectionDescriptionClassName} {...props}>
      {children}
    </p>
  )
}