import { forwardRef } from 'react'


import './Select.scss'
import type { SelectProps } from './types'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      hint,
      options,
      placeholder = 'Select option',
      fullWidth = false,
      id,
      className = '',
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const selectId = id || props.name
    const hasError = Boolean(error)

    const selectClassName = [
      'select',
      fullWidth && 'select--full',
      hasError && 'select--error',
      disabled && 'select--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={selectClassName}>
        {label && (
          <label className="select__label" htmlFor={selectId}>
            {label}
            {required && <span className="select__required">*</span>}
          </label>
        )}

        <div className="select__control-wrapper">
          <select
            ref={ref}
            id={selectId}
            className="select__control"
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              hasError ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>

          <span className="select__arrow" aria-hidden="true">
            ▾
          </span>
        </div>

        {hint && !error && (
          <p className="select__hint" id={`${selectId}-hint`}>
            {hint}
          </p>
        )}

        {error && (
          <p className="select__error" id={`${selectId}-error`}>
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'