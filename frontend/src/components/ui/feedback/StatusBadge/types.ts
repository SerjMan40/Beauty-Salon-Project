import type { HTMLAttributes } from 'react'

export type StatusBadgeStatus =
  | 'active'
  | 'inactive'
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed'
  | 'available'
  | 'unavailable'

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: StatusBadgeStatus
  label?: string
}