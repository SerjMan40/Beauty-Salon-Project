import type { ReactNode } from 'react'
import { classNames } from '../../../utils/helpers/classNames'
import './HeroSection.scss'

interface HeroSectionProps {
  title: string
  description: string
  eyebrow?: string
  actions?: ReactNode
  image?: ReactNode
}

export function HeroSection(props: HeroSectionProps) {
  const { title, description, eyebrow, actions, image } = props

  return (
    <section className={classNames('hero', 'hero-section')}>
      <div className="hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="hero__description">{description}</p>
        {actions && <div className="hero__actions">{actions}</div>}
      </div>
      {image && <div className="hero__media">{image}</div>}
    </section>
  )
}
