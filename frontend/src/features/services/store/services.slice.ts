import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Service } from '../../../types/service.types'
import { fetchServices } from './services.thunks'

export interface ServicesState {
  items: Service[]
  selectedId: string | null
  activeCategory: string | null
  isLoading: boolean
  hasLoaded: boolean
  error: string | null
}

const initialState: ServicesState = {
  items: [],
  selectedId: null,
  activeCategory: null,
  isLoading: false,
  hasLoaded: false,
  error: null,
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices(state, action: PayloadAction<Service[]>) {
      state.items = action.payload
      state.hasLoaded = true
    },
    selectService(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload
    },
    setActiveServiceCategory(state, action: PayloadAction<string | null>) {
      state.activeCategory = action.payload
    },
    setServicesLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setServicesError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
        state.hasLoaded = true
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false
        state.hasLoaded = true
        state.error = action.error.message ?? 'Не удалось загрузить услуги.'
      })
  },
})

export const {
  setServices,
  selectService,
  setActiveServiceCategory,
  setServicesLoading,
  setServicesError,
} = servicesSlice.actions

export const servicesReducer = servicesSlice.reducer
