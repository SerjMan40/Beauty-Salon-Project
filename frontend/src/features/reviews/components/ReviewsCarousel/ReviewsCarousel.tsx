import { useMemo, useState } from 'react'
import { ReviewCard } from '../ReviewCard/ReviewCard'
import type { Review } from '../../types/review.types'

interface ReviewsCarouselProps {
  reviews: Review[]
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeReview = reviews[activeIndex]

  const controlsLabel = useMemo(
    () => `${activeIndex + 1} из ${reviews.length}`,
    [activeIndex, reviews.length],
  )

  if (!activeReview) {
    return <p className="reviews-carousel__empty">Отзывов пока нет.</p>
  }

  const showPrevious = () =>
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))

  const showNext = () =>
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1))

  return (
    <div className="reviews-carousel">
      <ReviewCard review={activeReview} />
      <div className="reviews-carousel__controls" aria-label={controlsLabel}>
        <button type="button" onClick={showPrevious}>
          Назад
        </button>
        <span>{controlsLabel}</span>
        <button type="button" onClick={showNext}>
          Вперёд
        </button>
      </div>
    </div>
  )
}
