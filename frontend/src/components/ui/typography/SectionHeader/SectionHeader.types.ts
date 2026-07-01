import type { HTMLAttributes, ReactNode } from 'react'

export type SectionHeaderAlign = 'left' | 'center'

export interface SectionHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  align?: SectionHeaderAlign
}