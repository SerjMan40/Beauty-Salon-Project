import { ROUTES } from './routes'

export const NAVIGATION_ITEMS = [
  { label: 'Главная', path: ROUTES.home },
  { label: 'Услуги', path: ROUTES.services },
  { label: 'Мастера', path: ROUTES.masters },
  { label: 'Статьи', path: ROUTES.articles },
  { label: 'Галерея', path: ROUTES.gallery },
  { label: 'Запись', path: ROUTES.booking },
] as const
