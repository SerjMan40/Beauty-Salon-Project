interface SpinnerProps {
  label?: string
}

export function Spinner({ label = 'Загрузка' }: SpinnerProps) {
  return <span className="spinner" role="status" aria-label={label} />
}
