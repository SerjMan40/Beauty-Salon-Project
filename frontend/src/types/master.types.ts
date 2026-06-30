import type { Entity } from './common.types'

export interface Master extends Entity {
  name: string
  specialization: string
  avatarUrl?: string
  serviceIds: string[]
  experienceYears?: number
  bio?: string
}
