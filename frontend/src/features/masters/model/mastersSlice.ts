import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Master } from '../types/master.types'

export interface MastersState {
  items: Master[]
  selectedId: string | null
  isLoading: boolean
  error: string | null
}

const initialState: MastersState = {
  items: [],
  selectedId: null,
  isLoading: false,
  error: null,
}

const mastersSlice = createSlice({
  name: 'masters',
  initialState,
  reducers: {
    setMasters(state, action: PayloadAction<Master[]>) {
      state.items = action.payload
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
})

export const {
  setMasters,
  selectMaster,
  setMastersLoading,
  setMastersError,
} = mastersSlice.actions

export const mastersReducer = mastersSlice.reducer
