import type { Entity } from '../../../types/common.types'

export interface GalleryImage extends Entity {
  src: string
  alt: string
  title?: string
  category?: string
}
