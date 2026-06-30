import { useCallback, useState } from 'react'

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle = useCallback(() => setValue((current) => !current), [])
  const on = useCallback(() => setValue(true), [])
  const off = useCallback(() => setValue(false), [])

  return { value, setValue, toggle, on, off }
}
