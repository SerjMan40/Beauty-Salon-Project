import type { InputHTMLAttributes, ReactNode } from 'react'
import { classNames } from '../../../utils/classNames'

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode
}

export function Radio({ label, className, ...props }: RadioProps) {
  return (
    <label className={classNames('radio', className)}>
      <input type="radio" {...props} />
      <span>{label}</span>
    </label>
  )
}
