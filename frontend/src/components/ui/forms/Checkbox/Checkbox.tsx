import { forwardRef } from 'react'


import './Checkbox.scss'
import type { CheckboxProps } from './types'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      error,
      hint,
      className = '',
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const checkboxId = id || props.name
    const hasError = Boolean(error)

    const checkboxClassName = [
      'checkbox',
      disabled && 'checkbox--disabled',
      hasError && 'checkbox--error',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={checkboxClassName}>
        <label className="checkbox__label" htmlFor={checkboxId}>
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className="checkbox__input"
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${checkboxId}-error`
                : hint
                  ? `${checkboxId}-hint`
                  : undefined
            }
            {...props}
          />

          <span className="checkbox__box" />

          {label && (
            <span className="checkbox__text">
              {label}
              {required && (
                <span className="checkbox__required">*</span>
              )}
            </span>
          )}
        </label>

        {hint && !error && (
          <p
            className="checkbox__hint"
            id={`${checkboxId}-hint`}
          >
            {hint}
          </p>
        )}

        {error && (
          <p
            className="checkbox__error"
            id={`${checkboxId}-error`}
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'