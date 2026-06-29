import axios from 'axios'
import { AXIOS_CONFIG } from '../../config/axios.config'

export const apiClient = axios.create(AXIOS_CONFIG)

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
