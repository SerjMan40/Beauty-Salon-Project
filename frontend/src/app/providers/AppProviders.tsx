import type { PropsWithChildren } from 'react'
import { ReduxProvider } from './ReduxProvider'
import { ThemeProvider } from './ThemeProvider'
import { ToastProvider } from './ToastProvider'

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </ReduxProvider>
  )
}
