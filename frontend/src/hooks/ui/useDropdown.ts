import { useCallback, useState } from 'react'
import { useClickOutside } from '../browser/useClickOutside'

export function useDropdown<T extends HTMLElement>(initiallyOpen = false) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((current) => !current), [])
  const ref = useClickOutside<T>(close)

  return { ref, isOpen, open, close, toggle }
}
