import { API_ROUTES } from '../constants/api.constants'
import type { AuthResponse, LoginCredentials } from '../features/auth'
import { apiClient } from './axios'

export const authApi = {
  login: (credentials: LoginCredentials) =>
    apiClient.post<AuthResponse>(API_ROUTES.auth.login, credentials),
  logout: () => apiClient.post<void>(API_ROUTES.auth.logout),
}
