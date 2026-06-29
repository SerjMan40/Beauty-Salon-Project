export const API_ROUTES = {
  auth: { login: '/auth/login', logout: '/auth/logout' },
  services: '/services',
  masters: '/masters',
  appointments: '/appointments',
  reviews: '/reviews',
  articles: '/articles',
} as const
