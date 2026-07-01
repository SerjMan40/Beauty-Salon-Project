import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PersonalOffer, Profile, VisitHistoryItem } from '../../../types/user.types'
import { fetchProfile, updateProfile } from './profile.thunks'

export interface ProfileState {
  profile: Profile | null
  activeAppointment: VisitHistoryItem | null
  visitHistory: VisitHistoryItem[]
  personalOffers: PersonalOffer[]
  isLoading: boolean
  error: string | null
}

const initialState: ProfileState = {
  profile: null,
  activeAppointment: null,
  visitHistory: [],
  personalOffers: [],
  isLoading: false,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile | null>) {
      state.profile = action.payload
    },
    setActiveAppointment(state, action: PayloadAction<VisitHistoryItem | null>) {
      state.activeAppointment = action.payload
    },
    setVisitHistory(state, action: PayloadAction<VisitHistoryItem[]>) {
      state.visitHistory = action.payload
    },
    setPersonalOffers(state, action: PayloadAction<PersonalOffer[]>) {
      state.personalOffers = action.payload
    },
    setProfileLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload
    },
    setProfileError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profile = action.payload
        state.isLoading = false
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Не удалось загрузить профиль.'
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = action.payload
      })
  },
})

export const {
  setProfile,
  setActiveAppointment,
  setVisitHistory,
  setPersonalOffers,
  setProfileLoading,
  setProfileError,
} = profileSlice.actions

export const profileReducer = profileSlice.reducer
