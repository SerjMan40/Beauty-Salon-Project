import { MasterCard } from '../MasterCard/MasterCard'

import type { MastersListProps } from './types'

import './MasterList.scss'

export function MastersList({ masters }: MastersListProps) {
  if (!masters.length) {
    return <p className="masters-list__empty">Мастера пока не добавлены.</p>
  }

  return (
    <div className="masters-list">
      {masters.map((master) => (
        <MasterCard key={master.id} master={master} />
      ))}
    </div>
  )
}
