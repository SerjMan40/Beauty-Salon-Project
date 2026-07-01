import { Link } from 'react-router-dom'


import './Breadcrumbs.scss'
import type { BreadcrumbsProps } from './types'

export const Breadcrumbs = ({
  items,
  className = '',
}: BreadcrumbsProps) => {
  const breadcrumbsClassName = ['breadcrumbs', className]
    .filter(Boolean)
    .join(' ')

  if (!items.length) return null

  return (
    <nav className={breadcrumbsClassName} aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li className="breadcrumbs__item" key={index}>
              {item.href && !isLast ? (
                <Link className="breadcrumbs__link" to={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}