import type { Entity } from './common.types'

export interface Review extends Entity {
  authorName: string
  rating: number
  text: string
  avatarUrl?: string
  masterId?: string
}

export type CreateReviewDto = Pick<Review, 'rating' | 'text' | 'masterId'>
