export const ENV = {
  apiUrl: import.meta.env.VITE_API_URL ?? '/api',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const
