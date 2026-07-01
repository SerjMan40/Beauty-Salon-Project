export interface BookingCalendarProps {
  value: Date | null
  minDate?: string
  onChange: (date: Date) => void
}
