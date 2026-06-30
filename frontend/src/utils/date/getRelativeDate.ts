import { formatDistanceToNow } from 'date-fns'
import { uk } from 'date-fns/locale'

export const getRelativeDate = (date: Date | string) =>
  formatDistanceToNow(new Date(date), { addSuffix: true, locale: uk })
