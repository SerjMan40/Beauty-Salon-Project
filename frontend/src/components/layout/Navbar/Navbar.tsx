import { NavLink } from 'react-router-dom'
import { NAVIGATION_ITEMS } from '../../../constants/navigation.constants'

export function Navbar() {
  return (
    <nav aria-label="Основная навигация">
      {NAVIGATION_ITEMS.map(({ label, path }) => (
        <NavLink key={path} to={path}>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
