import { API_ROUTES } from '../../../constants/api.constants'
import type { Service } from '../types/service.types'
import { apiClient } from '../../../api/axios'

export const servicesApi = {
  getAll: () => apiClient.get<Service[]>(API_ROUTES.services),
  getById: (id: string) => apiClient.get<Service>(`${API_ROUTES.services}/${id}`),
}
