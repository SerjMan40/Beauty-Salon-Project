import type { HTMLAttributes, ReactNode } from 'react'

export type SectionHeaderAlign = 'left' | 'center'

export interface SectionHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  eyebrow?: ReactNode
  titleId?: string
  description?: ReactNode
  actions?: ReactNode
  align?: SectionHeaderAlign
}
