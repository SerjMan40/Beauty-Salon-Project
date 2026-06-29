import { useEffect, useState } from 'react'
import { scrollToTop } from '../../../utils/scrollToTop'

interface ScrollToTopButtonProps {
  showAfter?: number
}

export function ScrollToTopButton({
  showAfter = 400,
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > showAfter)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [showAfter])

  if (!isVisible) return null

  return (
    <button
      type="button"
      className="scroll-to-top"
      aria-label="Наверх"
      onClick={scrollToTop}
    >
      ↑
    </button>
  )
}
