
import './Loader.scss'
import type { LoaderProps } from './types'

export const Loader = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
  className = '',
}: LoaderProps) => {
  const loaderClassName = [
    'loader',
    `loader--${size}`,
    fullScreen && 'loader--fullscreen',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={loaderClassName} role="status" aria-live="polite">
      <span className="loader__circle" aria-hidden="true" />

      {text && <span className="loader__text">{text}</span>}
    </div>
  )
}