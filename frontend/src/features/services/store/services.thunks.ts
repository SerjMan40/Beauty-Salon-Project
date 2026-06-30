import { createAsyncThunk } from '@reduxjs/toolkit'
import { servicesApi } from '../api/services.api'

export const fetchServices = createAsyncThunk(
  'services/fetchAll',
  async () => (await servicesApi.getAll()).data,
)
