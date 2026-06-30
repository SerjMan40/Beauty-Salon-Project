export const ROUTES = {
  // public
  home: '/',
  services: '/services',
  serviceDetails: '/services/:serviceId',

  masters: '/masters',
  masterDetails: '/masters/:masterId',

  articles: '/articles',
  articleDetails: '/articles/:articleId',

  gallery: '/gallery',

  // protected
  booking: '/booking',
  profile: '/profile',

  // auth
  login: '/login',
  register: '/register',

  // admin
  admin: '/admin',
} as const
