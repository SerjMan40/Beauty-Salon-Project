import { API_ROUTES } from '../../../constants/api.constants'
import type { Article } from '../types/article.types'
import { apiClient } from '../../../api/axios'

export const articlesApi = {
  getAll: () => apiClient.get<Article[]>(API_ROUTES.articles),
  getById: (id: string) => apiClient.get<Article>(`${API_ROUTES.articles}/${id}`),
}
