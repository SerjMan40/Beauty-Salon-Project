import type { SelectHTMLAttributes } from 'react'
import { classNames } from '../../../utils/classNames'

export interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  placeholder?: string
}

export function Select({
  options,
  placeholder,
  className,
  ...props
}: SelectProps) {
  return (
    <select className={classNames('select', className)} {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map(({ label, value, disabled }) => (
        <option key={value} value={value} disabled={disabled}>
          {label}
        </option>
      ))}
    </select>
  )
}
