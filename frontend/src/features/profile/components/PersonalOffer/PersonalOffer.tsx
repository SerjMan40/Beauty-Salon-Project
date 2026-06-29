import type { PersonalOffer as PersonalOfferType } from '../../types/profile.types'

interface PersonalOfferProps {
  offer: PersonalOfferType
}

export function PersonalOffer({ offer }: PersonalOfferProps) {
  return (
    <article className="personal-offer">
      <h3>{offer.title}</h3>
      <p>{offer.description}</p>
      {offer.discountPercent && <strong>Скидка {offer.discountPercent}%</strong>}
      {offer.expiresAt && (
        <time dateTime={offer.expiresAt}>Действует до {offer.expiresAt}</time>
      )}
    </article>
  )
}
