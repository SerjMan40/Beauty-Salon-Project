import { NavLink } from 'react-router-dom'
import { NAVIGATION_ITEMS } from '../../../constants/navigation.constants'
import './Navigation.scss'

export function Navigation() {
  return (
    <nav className="navigation" aria-label="Основная навигация">
      {NAVIGATION_ITEMS.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
