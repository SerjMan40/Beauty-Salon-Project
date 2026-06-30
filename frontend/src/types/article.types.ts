import type { Entity } from './common.types'

export interface Article extends Entity {
  title: string
  excerpt: string
  content: string
  imageUrl?: string
  author?: string
  publishedAt?: string
  tags?: string[]
}
