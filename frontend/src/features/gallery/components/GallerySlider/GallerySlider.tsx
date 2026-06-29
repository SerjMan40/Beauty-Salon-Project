import { useMemo, useState } from 'react'
import type { GalleryImage } from '../../types/gallery.types'

interface GallerySliderProps {
  images: GalleryImage[]
}

export function GallerySlider({ images }: GallerySliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  const controlsLabel = useMemo(
    () => `${activeIndex + 1} из ${images.length}`,
    [activeIndex, images.length],
  )

  if (!activeImage) {
    return <p className="gallery-slider__empty">Изображения пока не добавлены.</p>
  }

  const showPrevious = () =>
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1))

  const showNext = () =>
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1))

  return (
    <div className="gallery-slider">
      <img src={activeImage.src} alt={activeImage.alt} />
      <div className="gallery-slider__controls" aria-label={controlsLabel}>
        <button type="button" onClick={showPrevious}>
          Назад
        </button>
        <span>{controlsLabel}</span>
        <button type="button" onClick={showNext}>
          Вперёд
        </button>
      </div>
    </div>
  )
}
