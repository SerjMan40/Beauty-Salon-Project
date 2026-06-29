import { API_ROUTES } from '../constants/api.constants'
import type {
  Appointment,
  CreateAppointmentDto,
} from '../features/appointments'
import { apiClient } from './axios'

export const appointmentsApi = {
  getMine: () => apiClient.get<Appointment[]>(API_ROUTES.appointments),
  create: (data: CreateAppointmentDto) =>
    apiClient.post<Appointment>(API_ROUTES.appointments, data),
}
