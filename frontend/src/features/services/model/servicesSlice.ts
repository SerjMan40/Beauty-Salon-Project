import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Service } from '../types/service.types'

export interface ServicesState {
  items: Service[]
  selectedId: string | null
  activeCategory: string | null
  isLoading: boolean
  error: string | null
}

const initialState: ServicesState = {
  items: [],
  selectedId: null,
  activeCategory: null,
  isLoading: false,
  error: null,
}

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices(state, action: PayloadAction<Service[]>) {
      state.items = action.payload
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
})

export const {
  setServices,
  selectService,
  setActiveServiceCategory,
  setServicesLoading,
  setServicesError,
} = servicesSlice.actions

export const servicesReducer = servicesSlice.reducer
