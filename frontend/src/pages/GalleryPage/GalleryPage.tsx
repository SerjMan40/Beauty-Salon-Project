
import { SectionHeader } from '../../components/ui'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

import './GalleryPage.scss'

const GALLERY_ITEMS = [
  { id: '1', title: 'Работа 1' },
  { id: '2', title: 'Работа 2' },
  { id: '3', title: 'Работа 3' },
  { id: '4', title: 'Работа 4' },
  { id: '5', title: 'Работа 5' },
  { id: '6', title: 'Работа 6' },
] as const

export function GalleryPage() {
  return (
    <section className="gallery-page" aria-labelledby="gallery-page-title">
      <PageContainer>
        <div className="gallery-page__header">
          <SectionHeader
            eyebrow="Галерея"
            title="Наши работы"
            titleId="gallery-page-title"
            description="Посмотрите примеры образов, ухода и результатов работы наших мастеров."
          />
        </div>

        <div className="gallery-page__grid">
          {GALLERY_ITEMS.map(({ id, title }) => (
            <article className="gallery-page__item" key={id}>
              <div className="gallery-page__placeholder">{title}</div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
