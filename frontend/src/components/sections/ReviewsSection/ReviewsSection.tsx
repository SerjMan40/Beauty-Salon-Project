import { ReviewCard, type Review } from '../../../features/reviews'
import './ReviewsSection.scss'

export function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <h2 id="reviews-title">Отзывы клиентов</h2>
      <div className="reviews-section__grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  )
}
