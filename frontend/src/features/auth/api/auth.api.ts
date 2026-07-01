import { API_ROUTES } from '../../../constants/api.constants'
import type { AuthResponse, LoginCredentials, RegisterCredentials } from '../types/auth.types'
import { apiClient } from '../../../api/axios'

export const authApi = {
  login: (credentials: LoginCredentials) =>
    apiClient.post<AuthResponse>(API_ROUTES.auth.login, credentials),
  register: (credentials: RegisterCredentials) =>
    apiClient.post<AuthResponse>(API_ROUTES.auth.register, credentials),
  logout: () => apiClient.post<void>(API_ROUTES.auth.logout),
}
