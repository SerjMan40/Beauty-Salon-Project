import { classNames } from '../../../../utils/helpers/classNames'

import type { ButtonProps } from './types'

import './Button.scss'

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'button',
        `button--${variant}`,
        `button--${size}`,
        fullWidth && 'button--full-width',
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
