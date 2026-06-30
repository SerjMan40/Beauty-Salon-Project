import { API_ROUTES } from '../../../constants/api.constants'
import type { CreateReviewDto, Review } from '../types/review.types'
import { apiClient } from '../../../api/axios'

export const reviewsApi = {
  getAll: () => apiClient.get<Review[]>(API_ROUTES.reviews),
  create: (data: CreateReviewDto) => apiClient.post<Review>(API_ROUTES.reviews, data),
}
