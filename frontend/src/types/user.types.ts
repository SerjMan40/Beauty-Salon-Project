import type { Appointment } from './appointment.types'

export interface User {
  id: string
  name: string
  email: string
  role?: 'user' | 'admin'
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  name: string
}

export interface AuthResponse {
  user: User
  accessToken: string
}

export interface Profile extends User {
  phone?: string
  birthday?: string
  avatarUrl?: string
}

export interface VisitHistoryItem extends Appointment {
  serviceName: string
  masterName: string
  price: number
}

export interface PersonalOffer {
  id: string
  title: string
  description: string
  discountPercent?: number
  expiresAt?: string
}
