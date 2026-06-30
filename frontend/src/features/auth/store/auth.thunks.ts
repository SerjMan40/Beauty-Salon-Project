import { createAsyncThunk } from '@reduxjs/toolkit'
import { authApi } from '../api/auth.api'
import type { LoginCredentials } from '../types/auth.types'

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => (await authApi.login(credentials)).data,
)

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await authApi.logout()
})
