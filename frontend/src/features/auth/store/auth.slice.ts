import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthResponse, User } from '../../../types/user.types'

export interface AuthState {
  user: User | null
  accessToken: string | null
  isLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  accessToken: localStorage.getItem('accessToken'),
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<AuthResponse>) {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
      state.error = null
    },
    clearCredentials(state) {
      state.user = null
      state.accessToken = null
      state.error = null
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setAuthError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { setCredentials, clearCredentials, setAuthLoading, setAuthError } = authSlice.actions

export const authReducer = authSlice.reducer
