import { Link } from 'react-router-dom'
import type { Master } from '../../../../types/master.types'

interface MasterCardProps {
  master: Master
}

export function MasterCard({ master }: MasterCardProps) {
  return (
    <article className="master-card">
      {master.avatarUrl && <img src={master.avatarUrl} alt="" className="master-card__avatar" />}
      <h3>{master.name}</h3>
      <p>{master.specialization}</p>
      <Link to={`/masters/${master.id}`}>Подробнее</Link>
    </article>
  )
}
