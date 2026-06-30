import { useCallback } from 'react'
import { authApi } from '../api/auth.api'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { clearCredentials, setCredentials } from '../store/auth.slice'
import {
  selectAuthLoading,
  selectCurrentUser,
  selectIsAuthenticated,
} from '../store/auth.selectors'
import type { LoginCredentials } from '../types/auth.types'

export function useAuth() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser)
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const isLoading = useAppSelector(selectAuthLoading)

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      const { data } = await authApi.login(credentials)
      localStorage.setItem('accessToken', data.accessToken)
      dispatch(setCredentials(data))
      return data
    },
    [dispatch],
  )

  const logout = useCallback(async () => {
    await authApi.logout()
    localStorage.removeItem('accessToken')
    dispatch(clearCredentials())
  }, [dispatch])

  return { user, isAuthenticated, isLoading, login, logout }
}
