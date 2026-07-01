import { classNames } from '../../../../utils/helpers/classNames'

import type { TextareaProps } from './types'

import './Textarea.scss'

export function Textarea({
  id,
  label,
  error,
  helperText,
  fullWidth = false,
  className,
  disabled,
  ...props
}: TextareaProps) {
  const helperId = helperText ? `${id}-helper` : undefined
  const errorId = error ? `${id}-error` : undefined

  return (
    <label
      className={classNames(
        'textarea',
        fullWidth && 'textarea--full-width',
        error && 'textarea--error',
        disabled && 'textarea--disabled',
        className
      )}
    >
      {label && <span className="textarea__label">{label}</span>}

      <textarea
        id={id}
        className="textarea__field"
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId ?? helperId}
        {...props}
      />

      {error ? (
        <span id={errorId} className="textarea__message textarea__message--error">
          {error}
        </span>
      ) : (
        helperText && (
          <span id={helperId} className="textarea__message">
            {helperText}
          </span>
        )
      )}
    </label>
  )
}
