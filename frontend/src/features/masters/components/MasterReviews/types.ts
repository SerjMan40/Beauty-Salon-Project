export interface MasterReview {
  id: string
  author: string
  text: string
  rating?: number
  date?: string
}

export interface MasterReviewsProps {
  reviews: MasterReview[]
}
