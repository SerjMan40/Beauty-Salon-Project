import type { RootState } from '../../../app/store'

export const selectAppointmentsState = (state: RootState) => state.appointments
export const selectAppointments = (state: RootState) =>
  selectAppointmentsState(state).items
export const selectAppointmentsLoading = (state: RootState) =>
  selectAppointmentsState(state).isLoading
export const selectAppointmentsError = (state: RootState) =>
  selectAppointmentsState(state).error
export const selectSelectedAppointment = (state: RootState) => {
  const { items, selectedId } = selectAppointmentsState(state)
  return items.find(({ id }) => id === selectedId)
}
