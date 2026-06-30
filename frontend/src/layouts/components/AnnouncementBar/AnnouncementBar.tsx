import type { PropsWithChildren } from 'react'
import './AnnouncementBar.scss'

export function AnnouncementBar({ children }: PropsWithChildren) {
  if (!children) return null

  return (
    <aside className="announcement-bar" aria-label="Объявление">
      {children}
    </aside>
  )
}
