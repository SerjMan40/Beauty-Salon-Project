export const ENV = {
  apiUrl: import.meta.env.VITE_API_URL ?? '/api',
  useMockApi: import.meta.env.VITE_USE_MOCK_API !== 'false',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const
