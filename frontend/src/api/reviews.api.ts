import { API_ROUTES } from '../constants/api.constants'
import type { CreateReviewDto, Review } from '../features/reviews'
import { apiClient } from './axios'

export const reviewsApi = {
  getAll: () => apiClient.get<Review[]>(API_ROUTES.reviews),
  create: (data: CreateReviewDto) => apiClient.post<Review>(API_ROUTES.reviews, data),
}
