import type { PropsWithChildren } from 'react'
import './MobileMenu.scss'

interface MobileMenuProps extends PropsWithChildren {
  isOpen?: boolean
}

export function MobileMenu({ isOpen = true, children }: MobileMenuProps) {
  return (
    <aside className="mobile-menu" hidden={!isOpen}>
      {children}
    </aside>
  )
}
