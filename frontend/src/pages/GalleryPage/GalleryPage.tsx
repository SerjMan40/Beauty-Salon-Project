import { useEffect } from 'react'

import { EmptyState } from '../../components/sections/EmptyState/EmptyState'
import { Loader, SectionHeader } from '../../components/ui'
import {
  fetchGallery,
  GalleryGrid,
  selectGalleryError,
  selectGalleryImages,
  selectGalleryLoading,
} from '../../features/gallery'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

import './GalleryPage.scss'

export function GalleryPage() {
  const dispatch = useAppDispatch()
  const images = useAppSelector(selectGalleryImages)
  const isLoading = useAppSelector(selectGalleryLoading)
  const error = useAppSelector(selectGalleryError)

  useEffect(() => {
    if (!images.length && !isLoading) void dispatch(fetchGallery())
  }, [dispatch, images.length, isLoading])

  return (
    <section className="gallery-page" aria-labelledby="gallery-page-title">
      <PageContainer>
        <div className="gallery-page__header">
          <SectionHeader eyebrow="Галерея" title="Наши работы" titleId="gallery-page-title" description="Примеры образов и результатов работы наших мастеров." />
        </div>
        {isLoading && <Loader />}
        {!isLoading && error && <EmptyState title="Не удалось загрузить галерею" description={error} />}
        {!isLoading && !error && <GalleryGrid images={images} />}
      </PageContainer>
    </section>
  )
}
