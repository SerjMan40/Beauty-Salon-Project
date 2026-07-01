import type { SectionHeaderProps } from './SectionHeader.types'

import { SectionActions } from './components/SectionActions/SectionActions'
import { SectionDescription } from './components/SectionDescription/SectionDescription'
import { SectionTitle } from './components/SectionTitle/SectionTitle'

import './SectionHeader.scss'

export const SectionHeader = ({
  title,
  eyebrow,
  titleId,
  description,
  actions,
  align = 'left',
  className = '',
  ...props
}: SectionHeaderProps) => {
  const sectionHeaderClassName = [
    'section-header',
    `section-header--${align}`,
    actions && 'section-header--with-actions',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={sectionHeaderClassName} {...props}>
      <div className="section-header__content">
        {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}

        <SectionTitle id={titleId}>{title}</SectionTitle>

        {description && (
          <SectionDescription>
            {description}
          </SectionDescription>
        )}
      </div>

      {actions && (
        <SectionActions>
          {actions}
        </SectionActions>
      )}
    </div>
  )
}
