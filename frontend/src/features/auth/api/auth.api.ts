import { API_ROUTES } from '../../../constants/api.constants'
import type { AuthResponse, LoginCredentials } from '../types/auth.types'
import { apiClient } from '../../../api/axios'

export const authApi = {
  login: (credentials: LoginCredentials) =>
    apiClient.post<AuthResponse>(API_ROUTES.auth.login, credentials),
  logout: () => apiClient.post<void>(API_ROUTES.auth.logout),
}
