import { ReviewCard, type Review } from '../../../reviews'

interface MasterReviewsProps {
  reviews: Review[]
}

export function MasterReviews({ reviews }: MasterReviewsProps) {
  return (
    <section aria-labelledby="master-reviews-title">
      <h2 id="master-reviews-title">Отзывы</h2>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </section>
  )
}
