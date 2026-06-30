export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (!hours) return `${remainingMinutes} мин`
  if (!remainingMinutes) return `${hours} ч`
  return `${hours} ч ${remainingMinutes} мин`
}
