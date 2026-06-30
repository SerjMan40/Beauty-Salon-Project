interface DateCalendarProps {
  value: string
  min?: string
  onChange: (date: string) => void
}

export function DateCalendar({ value, min, onChange }: DateCalendarProps) {
  return (
    <label>
      <span>Дата записи</span>
      <input
        type="date"
        value={value}
        min={min}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}
