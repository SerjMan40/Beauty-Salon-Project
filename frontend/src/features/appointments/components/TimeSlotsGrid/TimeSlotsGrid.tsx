interface TimeSlotsGridProps {
  slots: string[]
  value?: string
  onChange: (time: string) => void
}

export function TimeSlotsGrid({ slots, value, onChange }: TimeSlotsGridProps) {
  return (
    <div className="time-slots-grid" role="group" aria-label="Доступное время">
      {slots.map((slot) => (
        <button
          key={slot}
          type="button"
          aria-pressed={slot === value}
          onClick={() => onChange(slot)}
        >
          {slot}
        </button>
      ))}
    </div>
  )
}
