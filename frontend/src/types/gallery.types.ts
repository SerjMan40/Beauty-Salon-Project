import type { Entity } from './common.types'

export interface GalleryImage extends Entity {
  src: string
  alt: string
  title?: string
  category?: string
}
