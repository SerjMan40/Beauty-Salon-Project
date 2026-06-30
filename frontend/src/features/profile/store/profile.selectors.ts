import type { RootState } from '../../../app/store'

export const selectProfileState = (state: RootState) => state.profile
export const selectProfile = (state: RootState) => selectProfileState(state).profile
export const selectActiveAppointment = (state: RootState) =>
  selectProfileState(state).activeAppointment
export const selectVisitHistory = (state: RootState) => selectProfileState(state).visitHistory
export const selectPersonalOffers = (state: RootState) => selectProfileState(state).personalOffers
export const selectProfileLoading = (state: RootState) => selectProfileState(state).isLoading
export const selectProfileError = (state: RootState) => selectProfileState(state).error
