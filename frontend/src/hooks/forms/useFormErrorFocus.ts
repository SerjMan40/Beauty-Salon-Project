import { useEffect } from 'react'
import type { FieldErrors, FieldValues } from 'react-hook-form'

function findErrorPath(errors: FieldErrors, parentPath = ''): string | undefined {
  for (const [key, value] of Object.entries(errors)) {
    if (!value) continue

    const path = parentPath ? `${parentPath}.${key}` : key
    if ('message' in value || 'type' in value) return path

    const nestedPath = findErrorPath(value as FieldErrors, path)
    if (nestedPath) return nestedPath
  }

  return undefined
}

export function useFormErrorFocus<T extends FieldValues>(
  errors: FieldErrors<T>,
  enabled = true,
): void {
  useEffect(() => {
    if (!enabled) return

    const firstError = findErrorPath(errors)
    if (!firstError) return

    const field = document.querySelector<HTMLElement>(`[name="${CSS.escape(firstError)}"]`)
    field?.focus()
    field?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [errors, enabled])
}
