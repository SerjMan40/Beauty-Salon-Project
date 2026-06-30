import { formatDate } from '../../../../utils/date/formatDate'
import { formatPrice } from '../../../../utils/formatters/formatPrice'
import type { VisitHistoryItem } from '../../../../types/user.types'

interface VisitHistoryProps {
  visits: VisitHistoryItem[]
}

export function VisitHistory({ visits }: VisitHistoryProps) {
  if (!visits.length) {
    return <p className="visit-history__empty">История визитов пока пустая.</p>
  }

  return (
    <section className="visit-history" aria-labelledby="visit-history-title">
      <h2 id="visit-history-title">История визитов</h2>
      <ul>
        {visits.map((visit) => (
          <li key={visit.id}>
            <strong>{visit.serviceName}</strong>
            <span>{visit.masterName}</span>
            <time dateTime={visit.startsAt}>{formatDate(visit.startsAt, 'dd.MM.yyyy HH:mm')}</time>
            <span>{formatPrice(visit.price)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
