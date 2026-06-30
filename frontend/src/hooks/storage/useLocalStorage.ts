import { useCallback, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type UseLocalStorageResult<T> = [T, Dispatch<SetStateAction<T>>, () => void]

export function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T),
): UseLocalStorageResult<T> {
  const resolveInitialValue = useCallback(
    () => (initialValue instanceof Function ? initialValue() : initialValue),
    [initialValue],
  )

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return resolveInitialValue()

    try {
      const item = window.localStorage.getItem(key)
      return item === null ? resolveInitialValue() : (JSON.parse(item) as T)
    } catch {
      return resolveInitialValue()
    }
  })

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      setStoredValue((currentValue) => {
        const nextValue = value instanceof Function ? value(currentValue) : value
        window.localStorage.setItem(key, JSON.stringify(nextValue))
        return nextValue
      })
    },
    [key],
  )

  const removeValue = useCallback(() => {
    window.localStorage.removeItem(key)
    setStoredValue(resolveInitialValue())
  }, [key, resolveInitialValue])

  return [storedValue, setValue, removeValue]
}
