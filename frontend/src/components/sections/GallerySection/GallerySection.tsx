import { GalleryGrid, type GalleryImage } from '../../../features/gallery'
import './GallerySection.scss'

export function GallerySection({ images }: { images: GalleryImage[] }) {
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <h2 id="gallery-title">Галерея</h2>
      <div className="gallery-section__grid">
        <GalleryGrid images={images} />
      </div>
    </section>
  )
}
