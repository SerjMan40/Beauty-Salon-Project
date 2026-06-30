import { createContext, useCallback, useMemo, useState, type PropsWithChildren } from 'react'

interface ToastContextValue {
  message: string | null
  showToast: (message: string) => void
  hideToast: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<ToastContextValue | null>(null)

export function ToastProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState<string | null>(null)
  const showToast = useCallback((value: string) => setMessage(value), [])
  const hideToast = useCallback(() => setMessage(null), [])
  const value = useMemo(() => ({ message, showToast, hideToast }), [message, showToast, hideToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      {message && (
        <div role="status" aria-live="polite">
          {message}
          <button type="button" onClick={hideToast} aria-label="Закрыть">
            ×
          </button>
        </div>
      )}
    </ToastContext.Provider>
  )
}
