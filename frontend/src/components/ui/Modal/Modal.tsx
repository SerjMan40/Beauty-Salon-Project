import type { PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
