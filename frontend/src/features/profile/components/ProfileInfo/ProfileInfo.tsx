import type { Profile } from '../../types/profile.types'

interface ProfileInfoProps {
  profile: Profile
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <section className="profile-info" aria-labelledby="profile-info-title">
      {profile.avatarUrl && (
        <img className="profile-info__avatar" src={profile.avatarUrl} alt="" />
      )}
      <div className="profile-info__content">
        <h2 id="profile-info-title">{profile.name}</h2>
        <p>{profile.email}</p>
        {profile.phone && <p>{profile.phone}</p>}
        {profile.birthday && (
          <time dateTime={profile.birthday}>Дата рождения: {profile.birthday}</time>
        )}
      </div>
    </section>
  )
}
