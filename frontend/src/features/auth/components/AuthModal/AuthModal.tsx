import type { AuthModalProps } from './types'

import './AuthModal.scss'

export function AuthModal({
  isOpen,
  title = 'Авторизация',
  onClose,
  children,
}: AuthModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="auth-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div className="auth-modal__overlay" onClick={onClose} />

      <div className="auth-modal__content">
        <header className="auth-modal__header">
          <h2 id="auth-modal-title">{title}</h2>

          <button
            type="button"
            className="auth-modal__close"
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </header>

        <div className="auth-modal__body">
          {children}
        </div>
      </div>
    </div>
  )
}