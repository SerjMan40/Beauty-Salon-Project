import type { ReactNode } from 'react'
import { classNames } from '../../../utils/classNames'

interface HeroProps {
  title: string
  description?: string
  eyebrow?: string
  actions?: ReactNode
  image?: ReactNode
  className?: string
}

export function Hero({
  title,
  description,
  eyebrow,
  actions,
  image,
  className,
}: HeroProps) {
  return (
    <section className={classNames('hero', className)}>
      <div className="hero__content">
        {eyebrow && <p className="hero__eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p className="hero__description">{description}</p>}
        {actions && <div className="hero__actions">{actions}</div>}
      </div>
      {image && <div className="hero__media">{image}</div>}
    </section>
  )
}
