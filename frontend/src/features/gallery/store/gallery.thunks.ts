import { createAsyncThunk } from '@reduxjs/toolkit'
import { galleryApi } from '../api/gallery.api'

export const fetchGallery = createAsyncThunk(
  'gallery/fetchAll',
  async () => (await galleryApi.getAll()).data,
)
