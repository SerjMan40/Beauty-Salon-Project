import './SectionHeader.scss'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  titleId?: string
}

export function SectionHeader({ eyebrow, title, description, titleId }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {eyebrow && <span className="section-header__eyebrow">{eyebrow}</span>}

      <h2 id={titleId} className="section-header__title">
        {title}
      </h2>

      {description && <p className="section-header__description">{description}</p>}
    </div>
  )
}
