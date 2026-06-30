import { apiClient } from '../../../api/axios'
import type { GalleryImage } from '../types/gallery.types'

const GALLERY_ROUTE = '/gallery'

export const galleryApi = {
  getAll: () => apiClient.get<GalleryImage[]>(GALLERY_ROUTE),
  getById: (id: string) => apiClient.get<GalleryImage>(`${GALLERY_ROUTE}/${id}`),
}
