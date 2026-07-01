import type { ReactNode } from 'react'

export interface TabItem {
  value: string
  label: ReactNode
  disabled?: boolean
}

export interface TabsProps {
  items: TabItem[]
  activeTab: string
  onChange: (value: string) => void
  className?: string
}