import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export function useOnScreen<T extends Element>(
  options?: IntersectionObserverInit,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [isOnScreen, setIsOnScreen] = useState(false)
  const root = options?.root
  const rootMargin = options?.rootMargin
  const threshold = options?.threshold

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting), {
      root,
      rootMargin,
      threshold,
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [root, rootMargin, threshold])

  return [ref, isOnScreen]
}
