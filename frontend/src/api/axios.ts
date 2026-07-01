import axios from 'axios'
import { AXIOS_CONFIG } from '../../config/axios.config'
import { ENV } from '../../config/env'
import { mockAdapter } from '../mocks/adapter'

export const apiClient = axios.create({
  ...AXIOS_CONFIG,
  adapter: ENV.useMockApi ? mockAdapter : undefined,
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
