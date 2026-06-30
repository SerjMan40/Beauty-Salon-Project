export { AuthModal } from './components/AuthModal/AuthModal'
export { LoginForm } from './components/LoginForm/LoginForm'
export { RegisterForm } from './components/RegisterForm/RegisterForm'
export {
  authReducer,
  clearCredentials,
  setAuthError,
  setAuthLoading,
  setCredentials,
} from './store/auth.slice'
export {
  selectAccessToken,
  selectAuthError,
  selectAuthLoading,
  selectAuthState,
  selectCurrentUser,
  selectIsAuthenticated,
} from './store/auth.selectors'
export {
  loginSchema,
  registerSchema,
  type LoginFormValues,
  type RegisterFormValues,
} from './schemas/auth.schema'
export type { AuthResponse, LoginCredentials, RegisterCredentials, User } from './types/auth.types'
export { useAuth } from './hooks/useAuth'
export { loginThunk, logoutThunk } from './store/auth.thunks'
