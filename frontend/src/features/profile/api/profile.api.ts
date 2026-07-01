import { apiClient } from '../../../api/axios'
import { API_ROUTES } from '../../../constants/api.constants'
import type { Profile } from '../types/profile.types'

export const profileApi = {
  get: () => apiClient.get<Profile>(API_ROUTES.profile),
  update: (data: Partial<Profile>) => apiClient.patch<Profile>(API_ROUTES.profile, data),
}
