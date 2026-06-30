import { format } from 'date-fns'

export const formatTime = (date: Date | string, pattern = 'HH:mm') =>
  format(new Date(date), pattern)
