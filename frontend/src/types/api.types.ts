export interface ApiResponse<T> {
  data: T
  message?: string
}

export interface ApiError {
  message: string
  statusCode?: number
  errors?: Record<string, string[]>
}

export interface PaginationParams {
  page?: number
  limit?: number
}

export interface PaginatedResponse<T> {
  items: T[]
  page: number
  limit: number
  total: number
  totalPages: number
}
