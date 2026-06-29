import { formatDate } from '../../../../utils/formatDate'
import { formatPrice } from '../../../../utils/formatPrice'

interface BookingSummaryProps {
  serviceName: string
  masterName: string
  startsAt: string
  price: number
}

export function BookingSummary({
  serviceName,
  masterName,
  startsAt,
  price,
}: BookingSummaryProps) {
  return (
    <section aria-labelledby="booking-summary-title">
      <h2 id="booking-summary-title">Ваша запись</h2>
      <dl>
        <dt>Услуга</dt>
        <dd>{serviceName}</dd>
        <dt>Мастер</dt>
        <dd>{masterName}</dd>
        <dt>Дата и время</dt>
        <dd>{formatDate(startsAt, 'dd.MM.yyyy HH:mm')}</dd>
        <dt>Стоимость</dt>
        <dd>{formatPrice(price)}</dd>
      </dl>
    </section>
  )
}
