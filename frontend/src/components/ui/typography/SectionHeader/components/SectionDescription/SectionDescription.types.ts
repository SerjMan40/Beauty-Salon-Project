import type { HTMLAttributes, ReactNode } from 'react'

export interface SectionDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}