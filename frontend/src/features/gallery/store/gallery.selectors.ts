import type { RootState } from '../../../app/store'

export const selectGalleryState = (state: RootState) => state.gallery
export const selectGalleryImages = (state: RootState) => selectGalleryState(state).images
export const selectGalleryLoading = (state: RootState) => selectGalleryState(state).isLoading
export const selectGalleryError = (state: RootState) => selectGalleryState(state).error
export const selectSelectedGalleryImage = (state: RootState) => {
  const { images, selectedId } = selectGalleryState(state)
  return images.find(({ id }) => id === selectedId)
}
export const selectGalleryImageById = (id: string) => (state: RootState) =>
  selectGalleryImages(state).find((image) => image.id === id)
