import { useEffect, useRef, useState } from 'react'

export function useThrottle<T>(value: T, interval = 300): T {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastUpdated = useRef(0)

  useEffect(() => {
    const remaining = interval - (Date.now() - lastUpdated.current)

    if (remaining <= 0) {
      lastUpdated.current = Date.now()
      setThrottledValue(value)
      return
    }

    const timeout = window.setTimeout(() => {
      lastUpdated.current = Date.now()
      setThrottledValue(value)
    }, remaining)

    return () => window.clearTimeout(timeout)
  }, [value, interval])

  return throttledValue
}
