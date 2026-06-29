import type { GalleryImage } from '../../types/gallery.types'

interface GalleryImageCardProps {
  image: GalleryImage
  onClick?: (image: GalleryImage) => void
}

export function GalleryImageCard({ image, onClick }: GalleryImageCardProps) {
  const handleClick = () => onClick?.(image)

  return (
    <article className="gallery-image-card">
      <button
        className="gallery-image-card__button"
        type="button"
        onClick={handleClick}
        disabled={!onClick}
      >
        <img src={image.src} alt={image.alt} loading="lazy" />
      </button>
      {image.title && <h3 className="gallery-image-card__title">{image.title}</h3>}
      {image.category && (
        <span className="gallery-image-card__category">{image.category}</span>
      )}
    </article>
  )
}
