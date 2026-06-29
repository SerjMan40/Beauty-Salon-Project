import type { Entity } from '../../../types/common.types'

export interface Article extends Entity {
  title: string
  excerpt: string
  content: string
  imageUrl?: string
  author?: string
  publishedAt?: string
  tags?: string[]
}
