import { normalizePhone } from '../validation/normalizePhone'

export function formatPhone(phone: string): string {
  const normalized = normalizePhone(phone)
  const digits = normalized.replace(/\D/g, '')

  if (digits.length === 12 && digits.startsWith('380')) {
    return `+380 (${digits.slice(3, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10)}`
  }

  return normalized
}
