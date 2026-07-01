export interface ProfileUser {
  name: string
  email: string
  phone?: string
}

export interface ProfileBooking {
  id: string
  serviceName: string
  masterName: string
  date: string
  time: string
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
}