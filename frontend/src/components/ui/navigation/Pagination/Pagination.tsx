
import './Pagination.scss'
import type { PaginationProps } from './types'

const DOTS = '...'

const getPaginationItems = (
  currentPage: number,
  totalPages: number,
  siblingCount: number
): Array<number | typeof DOTS> => {
  const totalPageNumbers = siblingCount * 2 + 5

  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + siblingCount * 2

    return [
      ...Array.from({ length: leftItemCount }, (_, index) => index + 1),
      DOTS,
      totalPages,
    ]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + siblingCount * 2

    return [
      1,
      DOTS,
      ...Array.from(
        { length: rightItemCount },
        (_, index) => totalPages - rightItemCount + index + 1
      ),
    ]
  }

  return [
    1,
    DOTS,
    ...Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, index) => leftSiblingIndex + index
    ),
    DOTS,
    totalPages,
  ]
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = '',
}: PaginationProps) => {
  if (totalPages <= 1) return null

  const paginationItems = getPaginationItems(
    currentPage,
    totalPages,
    siblingCount
  )

  const paginationClassName = ['pagination', className].filter(Boolean).join(' ')

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  return (
    <nav className={paginationClassName} aria-label="Pagination">
      <button
        type="button"
        className="pagination__button"
        disabled={isFirstPage}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      <ul className="pagination__list">
        {paginationItems.map((item, index) => {
          if (item === DOTS) {
            return (
              <li key={`dots-${index}`} className="pagination__item">
                <span className="pagination__dots">...</span>
              </li>
            )
          }

          const isActive = item === currentPage

          return (
            <li key={item} className="pagination__item">
              <button
                type="button"
                className={[
                  'pagination__page',
                  isActive && 'pagination__page--active',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onPageChange(item)}
              >
                {item}
              </button>
            </li>
          )
        })}
      </ul>

      <button
        type="button"
        className="pagination__button"
        disabled={isLastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  )
}