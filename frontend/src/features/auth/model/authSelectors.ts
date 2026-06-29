import type { RootState } from '../../../app/store'

export const selectAuthState = (state: RootState) => state.auth
export const selectCurrentUser = (state: RootState) =>
  selectAuthState(state).user
export const selectAccessToken = (state: RootState) =>
  selectAuthState(state).accessToken
export const selectIsAuthenticated = (state: RootState) =>
  Boolean(selectAccessToken(state))
export const selectAuthLoading = (state: RootState) =>
  selectAuthState(state).isLoading
export const selectAuthError = (state: RootState) =>
  selectAuthState(state).error
