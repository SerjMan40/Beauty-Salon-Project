import { useCallback, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type UseSessionStorageResult<T> = [T, Dispatch<SetStateAction<T>>, () => void]

export function useSessionStorage<T>(
  key: string,
  initialValue: T | (() => T),
): UseSessionStorageResult<T> {
  const resolveInitialValue = useCallback(
    () => (initialValue instanceof Function ? initialValue() : initialValue),
    [initialValue],
  )

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return resolveInitialValue()

    try {
      const item = window.sessionStorage.getItem(key)
      return item === null ? resolveInitialValue() : (JSON.parse(item) as T)
    } catch {
      return resolveInitialValue()
    }
  })

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      setStoredValue((currentValue) => {
        const nextValue = value instanceof Function ? value(currentValue) : value
        window.sessionStorage.setItem(key, JSON.stringify(nextValue))
        return nextValue
      })
    },
    [key],
  )

  const removeValue = useCallback(() => {
    window.sessionStorage.removeItem(key)
    setStoredValue(resolveInitialValue())
  }, [key, resolveInitialValue])

  return [storedValue, setValue, removeValue]
}
