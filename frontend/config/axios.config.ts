import { ENV } from './env'

export const AXIOS_CONFIG = {
  baseURL: ENV.apiUrl,
  headers: { 'Content-Type': 'application/json' },
} as const
