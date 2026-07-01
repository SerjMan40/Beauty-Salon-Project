import { forwardRef } from 'react'


import './Radio.scss'
import type { RadioProps } from './types'

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
    const radioId = id || props.name
    const hasError = Boolean(error)

    const radioClassName = [
      'radio',
      disabled && 'radio--disabled',
      hasError && 'radio--error',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={radioClassName}>
        <label className="radio__label" htmlFor={radioId}>
          <input
            ref={ref}
            id={radioId}
            type="radio"
            className="radio__input"
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError
                ? `${radioId}-error`
                : hint
                  ? `${radioId}-hint`
                  : undefined
            }
            {...props}
          />

          <span className="radio__circle" />

          {label && (
            <span className="radio__text">
              {label}
              {required && <span className="radio__required">*</span>}
            </span>
          )}
        </label>

        {hint && !error && (
          <p className="radio__hint" id={`${radioId}-hint`}>
            {hint}
          </p>
        )}

        {error && (
          <p className="radio__error" id={`${radioId}-error`}>
            {error}
          </p>
        )}
      </div>
    )
  }
)

Radio.displayName = 'Radio'