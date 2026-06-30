import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Master } from '../../../types/master.types'
import { fetchMasters } from './masters.thunks'

export interface MastersState {
  items: Master[]
  selectedId: string | null
  isLoading: boolean
  hasLoaded: boolean
  error: string | null
}

const initialState: MastersState = {
  items: [],
  selectedId: null,
  isLoading: false,
  hasLoaded: false,
  error: null,
}

const mastersSlice = createSlice({
  name: 'masters',
  initialState,
  reducers: {
    setMasters(state, action: PayloadAction<Master[]>) {
      state.items = action.payload
      state.hasLoaded = true
    },
    selectMaster(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload
    },
    setMastersLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setMastersError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMasters.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchMasters.fulfilled, (state, action) => {
        state.items = action.payload
        state.isLoading = false
        state.hasLoaded = true
      })
      .addCase(fetchMasters.rejected, (state, action) => {
        state.isLoading = false
        state.hasLoaded = true
        state.error = action.error.message ?? 'Не удалось загрузить мастеров.'
      })
  },
})

export const { setMasters, selectMaster, setMastersLoading, setMastersError } = mastersSlice.actions

export const mastersReducer = mastersSlice.reducer
