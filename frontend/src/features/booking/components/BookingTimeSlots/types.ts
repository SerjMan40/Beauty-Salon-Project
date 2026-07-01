export interface BookingTimeSlotsProps {
  slots: string[]
  selectedTime: string
  onSelect: (time: string) => void
}
