import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

export function useClickOutside<T extends HTMLElement>(
  onClickOutside: (event: MouseEvent | TouchEvent) => void,
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent) => {
      const target = event.target
      if (ref.current && target instanceof Node && !ref.current.contains(target)) {
        onClickOutside(event)
      }
    }

    document.addEventListener('mousedown', handleEvent)
    document.addEventListener('touchstart', handleEvent, { passive: true })

    return () => {
      document.removeEventListener('mousedown', handleEvent)
      document.removeEventListener('touchstart', handleEvent)
    }
  }, [onClickOutside])

  return ref
}
