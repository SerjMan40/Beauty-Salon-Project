import type { Theme } from '../../../constants/theme.constants'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button type="button" onClick={onToggle}>
      Тема: {theme}
    </button>
  )
}
