export type LoaderSize = 'sm' | 'md' | 'lg'

export interface LoaderProps {
  size?: LoaderSize
  text?: string
  fullScreen?: boolean
  className?: string
}