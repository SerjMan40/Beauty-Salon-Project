import { Link } from 'react-router-dom'

import { ROUTES } from '../../../app/config/routes'
import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'
import type { HeroSectionProps } from './types'

import './HeroSection.scss'

export function HeroSection({
  title = 'Красота, созданная для вас',
  description = 'Профессиональный уход, современные техники и атмосфера, в которую хочется возвращаться.',
  eyebrow = 'Beauty Salon',
  actions,
  image,
}: HeroSectionProps = {}) {
  const heroActions = actions ?? (
    <>
      <Link className="button" to={ROUTES.booking}>
        Записаться
      </Link>

      <Link className="button button--secondary" to={ROUTES.services}>
        Услуги
      </Link>
    </>
  )

  return (
    <section className="hero-section">
      <PageContainer className="hero-section__inner">
        <div className="hero-section__content">
          {eyebrow && <p className="hero-section__eyebrow">{eyebrow}</p>}

          <h1 className="hero-section__title">{title}</h1>

          <p className="hero-section__description">{description}</p>

          <div className="hero-section__actions">{heroActions}</div>
        </div>

        {image && <div className="hero-section__media">{image}</div>}
      </PageContainer>
    </section>
  )
}
