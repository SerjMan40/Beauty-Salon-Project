import type { ApiError } from '../../types/api.types'

export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string' &&
    (!('statusCode' in error) ||
      error.statusCode === undefined ||
      typeof error.statusCode === 'number')
  )
}
