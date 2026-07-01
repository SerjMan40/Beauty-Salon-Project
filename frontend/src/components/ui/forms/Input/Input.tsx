import { classNames } from '../../../../utils/helpers/classNames'

import type { InputProps } from './types'

import './Input.scss'

export function Input({
  id,
  label,
  error,
  helperText,
  fullWidth = false,
  leftAddon,
  rightAddon,
  className,
  disabled,
  ...props
}: InputProps) {
  const helperId = helperText ? `${id}-helper` : undefined
  const errorId = error ? `${id}-error` : undefined

  return (
    <label
      className={classNames(
        'input',
        fullWidth && 'input--full-width',
        error && 'input--error',
        disabled && 'input--disabled',
        className
      )}
    >
      {label && <span className="input__label">{label}</span>}

      <span className="input__control">
        {leftAddon && <span className="input__addon">{leftAddon}</span>}

        <input
          id={id}
          className="input__field"
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={errorId ?? helperId}
          {...props}
        />

        {rightAddon && <span className="input__addon">{rightAddon}</span>}
      </span>

      {error ? (
        <span id={errorId} className="input__message input__message--error">
          {error}
        </span>
      ) : (
        helperText && (
          <span id={helperId} className="input__message">
            {helperText}
          </span>
        )
      )}
    </label>
  )
}
