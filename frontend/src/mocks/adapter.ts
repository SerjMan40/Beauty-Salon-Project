import type { AxiosAdapter, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { Appointment } from '../types/appointment.types'

import {
  mockAppointments,
  mockArticles,
  mockGallery,
  mockMasters,
  mockProfile,
  mockReviews,
  mockServices,
  updateMockProfile,
} from './data'

const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))
const parseBody = <T>(data: unknown): T =>
  typeof data === 'string' ? JSON.parse(data) as T : data as T

const response = <T>(
  config: InternalAxiosRequestConfig,
  data: T,
  status = 200,
): AxiosResponse<T> => ({
  data,
  status,
  statusText: status === 201 ? 'Created' : 'OK',
  headers: {},
  config,
})

export const mockAdapter: AxiosAdapter = async (config) => {
  await wait(350)

  const method = config.method?.toUpperCase() ?? 'GET'
  const path = `/${(config.url ?? '').replace(/^\/?(api\/)?/, '')}`.replace(/\/$/, '')
  const collection = <T extends { id: string }>(route: string, items: T[]) => {
    if (path === route) return response(config, items)
    const id = path.match(new RegExp(`^${route}/([^/]+)$`))?.[1]
    return id ? response(config, items.find((item) => item.id === id) ?? null, id ? 200 : 404) : null
  }

  if (method === 'GET') {
    const result =
      collection('/services', mockServices) ??
      collection('/masters', mockMasters) ??
      collection('/articles', mockArticles) ??
      collection('/gallery', mockGallery) ??
      collection('/reviews', mockReviews) ??
      collection('/appointments', mockAppointments)
    if (result) return result
    if (path === '/profile') return response(config, mockProfile)
  }

  if (method === 'POST' && path === '/auth/login') {
    const credentials = parseBody<{ email: string }>(config.data)
    return response(config, {
      user: { ...mockProfile, email: credentials.email },
      accessToken: 'mock-access-token',
    })
  }
  if (method === 'POST' && path === '/auth/register') {
    const credentials = parseBody<{ name: string; email: string }>(config.data)
    return response(config, {
      user: { id: crypto.randomUUID(), name: credentials.name, email: credentials.email, role: 'user' as const },
      accessToken: 'mock-access-token',
    }, 201)
  }
  if (method === 'POST' && path === '/auth/logout') return response(config, undefined)
  if (method === 'POST' && path === '/reviews') {
    const payload = parseBody<{ rating: number; text: string; masterId?: string }>(config.data)
    const review = { ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString(), authorName: mockProfile.name }
    mockReviews.unshift(review)
    return response(config, review, 201)
  }
  if (method === 'POST' && path === '/appointments') {
    const payload = parseBody<Omit<Appointment, 'id' | 'createdAt' | 'status'>>(config.data)
    const appointment = { ...payload, id: crypto.randomUUID(), createdAt: new Date().toISOString(), status: 'pending' as const }
    mockAppointments.push(appointment)
    return response(config, appointment, 201)
  }
  if (method === 'PATCH' && path === '/profile') {
    return response(config, updateMockProfile(parseBody(config.data)))
  }

  return response(config, { message: `Mock route not found: ${method} ${path}` }, 404)
}
