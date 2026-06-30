import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileApi } from '../api/profile.api'
import type { Profile } from '../types/profile.types'

export const fetchProfile = createAsyncThunk(
  'profile/fetch',
  async () => (await profileApi.get()).data,
)

export const updateProfile = createAsyncThunk(
  'profile/update',
  async (payload: Partial<Profile>) => (await profileApi.update(payload)).data,
)
