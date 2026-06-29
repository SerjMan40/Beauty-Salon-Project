import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { GalleryImage } from '../types/gallery.types'

export interface GalleryState {
  images: GalleryImage[]
  selectedId: string | null
  isLoading: boolean
  error: string | null
}

const initialState: GalleryState = {
  images: [],
  selectedId: null,
  isLoading: false,
  error: null,
}

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setGalleryImages(state, action: PayloadAction<GalleryImage[]>) {
      state.images = action.payload
    },
    selectGalleryImage(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload
    },
    setGalleryLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setGalleryError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const {
  setGalleryImages,
  selectGalleryImage,
  setGalleryLoading,
  setGalleryError,
} = gallerySlice.actions

export const galleryReducer = gallerySlice.reducer
