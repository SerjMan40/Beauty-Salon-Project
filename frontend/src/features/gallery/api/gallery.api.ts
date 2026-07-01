import { apiClient } from '../../../api/axios'
import { API_ROUTES } from '../../../constants/api.constants'
import type { GalleryImage } from '../types/gallery.types'

export const galleryApi = {
  getAll: () => apiClient.get<GalleryImage[]>(API_ROUTES.gallery),
  getById: (id: string) => apiClient.get<GalleryImage>(`${API_ROUTES.gallery}/${id}`),
}
