import type { MasterReviewsProps } from './types'

import './MasterReviews.scss'

export function MasterReviews({ reviews }: MasterReviewsProps) {
  if (!reviews.length) {
    return <p className="master-reviews__empty">У этого мастера пока нет отзывов.</p>
  }

  return (
    <div className="master-reviews">
      {reviews.map(({ id, author, text, rating, date }) => (
        <article className="master-reviews__item" key={id}>
          <div className="master-reviews__header">
            <h3 className="master-reviews__author">{author}</h3>

            {rating && <span className="master-reviews__rating">{rating}/5</span>}
          </div>

          <p className="master-reviews__text">{text}</p>

          {date && (
            <time className="master-reviews__date" dateTime={date}>
              {date}
            </time>
          )}
        </article>
      ))}
    </div>
  )
}
