import { Link } from 'react-router-dom'
import { Logo } from '../../../components/sections/Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import './Header.scss'

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" aria-label="На главную">
        <Logo />
      </Link>
      <Navigation />
    </header>
  )
}
