import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Appointment } from '../../../types/appointment.types'
import { createAppointment, fetchAppointments } from './booking.thunks'

export interface AppointmentsState {
  items: Appointment[]
  selectedId: string | null
  isLoading: boolean
  error: string | null
}

const initialState: AppointmentsState = {
  items: [],
  selectedId: null,
  isLoading: false,
  error: null,
}

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    setAppointments(state, action: PayloadAction<Appointment[]>) {
      state.items = action.payload
    },
    addAppointment(state, action: PayloadAction<Appointment>) {
      state.items.push(action.payload)
    },
    removeAppointment(state, action: PayloadAction<string>) {
      state.items = state.items.filter(({ id }) => id !== action.payload)
    },
    selectAppointment(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload
    },
    setAppointmentsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setAppointmentsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Не удалось загрузить записи.'
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
  },
})

export const {
  setAppointments,
  addAppointment,
  removeAppointment,
  selectAppointment,
  setAppointmentsLoading,
  setAppointmentsError,
} = appointmentsSlice.actions

export const appointmentsReducer = appointmentsSlice.reducer
