import { API_ROUTES } from '../constants/api.constants'
import type { Master } from '../features/masters'
import { apiClient } from './axios'

export const mastersApi = {
  getAll: () => apiClient.get<Master[]>(API_ROUTES.masters),
  getById: (id: string) => apiClient.get<Master>(`${API_ROUTES.masters}/${id}`),
}
