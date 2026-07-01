import { Link } from 'react-router-dom'

import { ROUTES } from '../../../app/config/routes'
import { SectionHeader } from '../../ui'
import { selectServices, ServicesList } from '../../../features/services'
import { useAppSelector } from '../../../hooks'
import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'

import './ServicesPreviewSection.scss'

export function ServicesPreviewSection() {
  const services = useAppSelector(selectServices).slice(0, 6)

  return (
    <section className="services-overview" aria-labelledby="services-title">
      <PageContainer>
        <SectionHeader
          eyebrow="Услуги"
          title="Наши услуги"
          titleId="services-title"
          description="Подберите уход, который подходит именно вам: от базовых процедур до комплексного преображения."
        />

        <div className="services-overview__grid">
          <ServicesList services={services} />
        </div>

        <Link className="services-overview__link" to={ROUTES.services}>
          Смотреть все услуги
        </Link>
      </PageContainer>
    </section>
  )
}
