export const API_ROUTES = {
  auth: { login: '/auth/login', register: '/auth/register', logout: '/auth/logout' },
  services: '/services',
  masters: '/masters',
  appointments: '/appointments',
  reviews: '/reviews',
  articles: '/articles',
  gallery: '/gallery',
  profile: '/profile',
} as const
