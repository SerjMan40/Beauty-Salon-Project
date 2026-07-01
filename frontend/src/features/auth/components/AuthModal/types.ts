import type { ReactNode } from 'react'

export interface AuthModalProps {
  isOpen: boolean
  title?: string
  onClose: () => void
  children: ReactNode
}