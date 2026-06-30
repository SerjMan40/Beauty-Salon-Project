import { createAsyncThunk } from '@reduxjs/toolkit'
import { mastersApi } from '../api/masters.api'

export const fetchMasters = createAsyncThunk(
  'masters/fetchAll',
  async () => (await mastersApi.getAll()).data,
)
