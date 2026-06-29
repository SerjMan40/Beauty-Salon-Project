import { API_ROUTES } from '../constants/api.constants'
import type { Article } from '../features/articles'
import { apiClient } from './axios'

export const articlesApi = {
  getAll: () => apiClient.get<Article[]>(API_ROUTES.articles),
  getById: (id: string) => apiClient.get<Article>(`${API_ROUTES.articles}/${id}`),
}
