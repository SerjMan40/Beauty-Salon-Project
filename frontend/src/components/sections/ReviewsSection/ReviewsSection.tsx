import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'
import { SectionHeader } from '../../ui/SectionHeader'
import './ReviewsSection.scss'

const REVIEWS = [
  {
    id: 1,
    author: 'Анна',
    text: 'Очень внимательные мастера. Результат превзошёл мои ожидания.',
  },
  {
    id: 2,
    author: 'Екатерина',
    text: 'Приятная атмосфера, отличный сервис и профессиональный подход.',
  },
  {
    id: 3,
    author: 'Мария',
    text: 'Уже несколько лет доверяю свои волосы только этому салону.',
  },
] as const

export function ReviewsSection() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <PageContainer>
        <SectionHeader
          eyebrow="Отзывы"
          title="Что говорят наши клиенты"
          titleId="reviews-title"
          description="Для нас важно, чтобы каждый визит оставлял приятные впечатления."
        />

        <div className="reviews-section__grid">
          {REVIEWS.map(({ id, author, text }) => (
            <article key={id} className="reviews-section__card">
              <h3 className="reviews-section__author">{author}</h3>

              <p className="reviews-section__text">{text}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
