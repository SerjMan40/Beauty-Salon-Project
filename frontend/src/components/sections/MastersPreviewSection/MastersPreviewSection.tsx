import { Link } from 'react-router-dom'

import { ROUTES } from '../../../app/config/routes'
import { SectionHeader } from '../../ui'
import { MasterCard, selectMasters } from '../../../features/masters'
import { useAppSelector } from '../../../hooks'
import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'

import './MastersPreviewSection.scss'

export function MastersPreviewSection() {
  const masters = useAppSelector(selectMasters).slice(0, 4)

  return (
    <section className="masters-preview" aria-labelledby="masters-title">
      <PageContainer>
        <SectionHeader
          eyebrow="Команда"
          title="Наши мастера"
          titleId="masters-title"
          description="Опытные специалисты, которые помогут подобрать образ, соответствующий вашим пожеланиям и индивидуальному стилю."
        />

        <div className="masters-preview__grid">
          {masters.length ? (
            masters.map((master) => <MasterCard key={master.id} master={master} />)
          ) : (
            <p className="masters-preview__empty">Информация о мастерах скоро появится.</p>
          )}
        </div>

        <div className="masters-preview__footer">
          <Link className="masters-preview__link" to={ROUTES.masters}>
            Смотреть всех мастеров
          </Link>
        </div>
      </PageContainer>
    </section>
  )
}
