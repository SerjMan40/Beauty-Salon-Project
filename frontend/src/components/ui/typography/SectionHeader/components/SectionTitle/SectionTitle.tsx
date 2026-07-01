import type { SectionTitleProps } from './SectionTitle.types'

import './SectionTitle.scss'

export const SectionTitle = ({
  children,
  level = 2,
  className = '',
  ...props
}: SectionTitleProps) => {
  const Tag = `h${level}` as const

  const sectionTitleClassName = [
    'section-title',
    `section-title--h${level}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={sectionTitleClassName} {...props}>
      {children}
    </Tag>
  )
}