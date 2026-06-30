import type { ButtonHTMLAttributes } from 'react'
import { classNames } from '../../../utils/helpers/classNames'

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={classNames('button', className)} {...props} />
}
