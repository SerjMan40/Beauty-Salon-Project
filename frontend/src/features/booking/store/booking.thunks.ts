import { createAsyncThunk } from '@reduxjs/toolkit'
import { appointmentsApi } from '../api/booking.api'
import type { CreateAppointmentDto } from '../types/booking.types'

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAll',
  async () => (await appointmentsApi.getMine()).data,
)

export const createAppointment = createAsyncThunk(
  'appointments/create',
  async (payload: CreateAppointmentDto) => (await appointmentsApi.create(payload)).data,
)
