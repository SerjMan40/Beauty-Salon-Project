import type { InputHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../../utils/helpers/classNames'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <label className={classNames('checkbox', className)}>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  )
}
