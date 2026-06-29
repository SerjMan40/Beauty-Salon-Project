import type { Master } from '../../types/master.types'

interface MasterProfileProps {
  master: Master
}

export function MasterProfile({ master }: MasterProfileProps) {
  return (
    <section className="master-profile" aria-labelledby="master-profile-title">
      {master.avatarUrl && (
        <img className="master-profile__avatar" src={master.avatarUrl} alt="" />
      )}
      <div className="master-profile__content">
        <h1 id="master-profile-title">{master.name}</h1>
        <p className="master-profile__specialization">{master.specialization}</p>
        {master.experienceYears && (
          <p className="master-profile__experience">
            Опыт: {master.experienceYears} лет
          </p>
        )}
        {master.bio && <p className="master-profile__bio">{master.bio}</p>}
      </div>
    </section>
  )
}
