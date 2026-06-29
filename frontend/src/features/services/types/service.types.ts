import type { Entity } from '../../../types/common.types'

export interface Service extends Entity {
  name: string
  description: string
  durationMinutes: number
  price: number
  imageUrl?: string
  category?: string
}
