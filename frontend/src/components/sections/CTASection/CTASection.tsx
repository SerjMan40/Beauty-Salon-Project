import { Link } from 'react-router-dom'

import { ROUTES } from '../../../app/config/routes'

import './CTASection.scss'
import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'

export function CTASection() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <PageContainer>
        <div className="cta-section__content">
          <span className="cta-section__eyebrow">Онлайн-запись</span>

          <h2 id="cta-title">Готовы уделить время себе?</h2>

          <p className="cta-section__description">
            Выберите удобное время, услугу и мастера — мы позаботимся об остальном.
          </p>

          <Link className="cta-section__button" to={ROUTES.booking}>
            Записаться онлайн
          </Link>
        </div>
      </PageContainer>
    </section>
  )
}
