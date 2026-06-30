import { useEffect, useState } from 'react'

export interface WindowSize {
  width: number
  height: number
}

const getWindowSize = (): WindowSize => ({
  width: typeof window === 'undefined' ? 0 : window.innerWidth,
  height: typeof window === 'undefined' ? 0 : window.innerHeight,
})

export function useWindowSize(): WindowSize {
  const [size, setSize] = useState(getWindowSize)

  useEffect(() => {
    const update = () => setSize(getWindowSize())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return size
}
