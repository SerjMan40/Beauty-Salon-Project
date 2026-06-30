import { GalleryImageCard } from '../GalleryImageCard/GalleryImageCard'
import type { GalleryImage } from '../../../../types/gallery.types'

interface GalleryGridProps {
  images: GalleryImage[]
  onImageClick?: (image: GalleryImage) => void
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  if (!images.length) {
    return <p className="gallery-grid__empty">Изображения пока не добавлены.</p>
  }

  return (
    <div className="gallery-grid">
      {images.map((image) => (
        <GalleryImageCard key={image.id} image={image} onClick={onImageClick} />
      ))}
    </div>
  )
}
