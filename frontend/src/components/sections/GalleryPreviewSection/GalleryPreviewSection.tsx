import { Link } from 'react-router-dom'

import { ROUTES } from '../../../app/config/routes'
import { SectionHeader } from '../../ui'

import './GalleryPreviewSection.scss'
import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'

const GALLERY_PREVIEW_ITEMS = ['Работа 1', 'Работа 2', 'Работа 3', 'Работа 4'] as const

export function GalleryPreviewSection() {
  return (
    <section className="gallery-preview" aria-labelledby="gallery-preview-title">
      <PageContainer>
        <SectionHeader
          eyebrow="Галерея"
          title="Наши работы"
          titleId="gallery-preview-title"
          description="Несколько примеров образов и результатов, которые помогут почувствовать стиль нашего салона."
        />

        <div className="gallery-preview__grid">
          {GALLERY_PREVIEW_ITEMS.map((item) => (
            <article className="gallery-preview__item" key={item}>
              <div className="gallery-preview__placeholder">{item}</div>
            </article>
          ))}
        </div>

        <div className="gallery-preview__footer">
          <Link className="gallery-preview__link" to={ROUTES.gallery}>
            Смотреть галерею
          </Link>
        </div>
      </PageContainer>
    </section>
  )
}
