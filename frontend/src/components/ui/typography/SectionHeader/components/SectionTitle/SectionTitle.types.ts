import type { HTMLAttributes, ReactNode } from 'react'

export type SectionTitleLevel = 1 | 2 | 3 | 4

export interface SectionTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  level?: SectionTitleLevel
}