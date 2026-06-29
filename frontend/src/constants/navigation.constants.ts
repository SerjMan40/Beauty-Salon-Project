import { ROUTES } from './routes.constants'

export const NAVIGATION_ITEMS = [
  { label: 'Главная', path: ROUTES.home },
  { label: 'Услуги', path: ROUTES.services },
  { label: 'Статьи', path: ROUTES.articles },
  { label: 'Галерея', path: ROUTES.gallery },
  { label: 'Профиль', path: ROUTES.profile },
] as const
