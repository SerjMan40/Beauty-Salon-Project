import { useEffect, useState } from 'react'

export type ScrollDirection = 'up' | 'down'

export function useScrollDirection() {
  const [direction, setDirection] = useState<ScrollDirection>('up')

  useEffect(() => {
    let previous = window.scrollY
    const update = () => {
      const current = window.scrollY
      if (Math.abs(current - previous) > 8) {
        setDirection(current > previous ? 'down' : 'up')
        previous = current
      }
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return direction
}
