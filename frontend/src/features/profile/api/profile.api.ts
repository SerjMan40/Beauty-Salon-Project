import { apiClient } from '../../../api/axios'
import type { Profile } from '../types/profile.types'

const PROFILE_ROUTE = '/profile'

export const profileApi = {
  get: () => apiClient.get<Profile>(PROFILE_ROUTE),
  update: (data: Partial<Profile>) => apiClient.patch<Profile>(PROFILE_ROUTE, data),
}
