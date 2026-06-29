import type { Review } from '../../types/review.types'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <header className="review-card__header">
        {review.avatarUrl && (
          <img className="review-card__avatar" src={review.avatarUrl} alt="" />
        )}
        <div>
          <h3>{review.authorName}</h3>
          <p aria-label={`Оценка: ${review.rating} из 5`}>
            {'★'.repeat(review.rating)}
            {'☆'.repeat(Math.max(0, 5 - review.rating))}
          </p>
        </div>
      </header>
      <p className="review-card__text">“{review.text}”</p>
    </article>
  )
}
