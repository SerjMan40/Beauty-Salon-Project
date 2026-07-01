import { useEffect } from 'react'
import type { MouseEvent } from 'react'


import './Modal.scss'
import type { ModalProps } from './types'

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = '',
  closeOnOverlayClick = true,
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modalClassName = ['modal__content', className].filter(Boolean).join(' ')

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose()
    }
  }

  const handleContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <div className="modal" role="presentation" onClick={handleOverlayClick}>
      <div
        className={modalClassName}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        onClick={handleContentClick}
      >
        <div className="modal__header">
          {title && (
            <h2 className="modal__title" id="modal-title">
              {title}
            </h2>
          )}

          <button
            className="modal__close"
            type="button"
            aria-label="Close modal"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}