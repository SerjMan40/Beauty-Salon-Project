export function normalizePhone(phone: string): string {
  const value = phone.trim()
  const digits = value.replace(/\D/g, '')

  if (!digits) return ''
  if (digits.startsWith('380')) return `+${digits}`
  if (digits.length === 10 && digits.startsWith('0')) return `+38${digits}`
  return value.startsWith('+') ? `+${digits}` : digits
}
