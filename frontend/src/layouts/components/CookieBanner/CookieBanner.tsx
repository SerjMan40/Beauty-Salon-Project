import { useLocalStorage } from '../../../hooks'
import './CookieBanner.scss'

export function CookieBanner() {
  const [isAccepted, setIsAccepted] = useLocalStorage('cookie-consent', false)

  if (isAccepted) return null

  return (
    <aside className="cookie-banner" aria-label="Использование файлов cookie">
      <p>Мы используем cookie, чтобы сайт работал удобнее.</p>
      <button type="button" onClick={() => setIsAccepted(true)}>
        Принять
      </button>
    </aside>
  )
}
