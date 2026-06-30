import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../../components/sections/Logo/Logo'
import { useMediaQuery } from '../../../hooks'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { Navigation } from '../Navigation/Navigation'
import { PageContainer } from '../PageContainer/PageContainer'

import './Header.scss'

export function Header() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <PageContainer className="site-header__inner">
        <Link to="/" aria-label="На главную">
          <Logo />
        </Link>

        {isMobile ? (
          <>
            <button
              type="button"
              className="site-header__menu-toggle"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              Меню
            </button>

            <MobileMenu isOpen={isMenuOpen}>
              <div id="mobile-navigation" onClick={() => setIsMenuOpen(false)}>
                <Navigation />
              </div>
            </MobileMenu>
          </>
        ) : (
          <Navigation />
        )}
      </PageContainer>
    </header>
  )
}
