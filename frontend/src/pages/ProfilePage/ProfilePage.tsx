import { SectionHeader } from '../../components/ui/SectionHeader'

import { ProfileActions } from './components/ProfileActions/ProfileActions'
import { ProfileBookings } from './components/ProfileBookings/ProfileBookings'
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo'

import type { ProfileBooking, ProfileUser } from './types'

import './ProfilePage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

const mockUser: ProfileUser = {
  name: 'Сергей',
  email: 'sergey@example.com',
  phone: '+38 (000) 000-00-00',
}

const mockBookings: ProfileBooking[] = [
  {
    id: '1',
    serviceName: 'Женская стрижка',
    masterName: 'Анна Иванова',
    date: '2026-07-05',
    time: '12:00',
    status: 'confirmed',
  },
]

export function ProfilePage() {
  return (
    <section className="profile-page" aria-labelledby="profile-page-title">
      <PageContainer>
        <div className="profile-page__header">
          <SectionHeader
            eyebrow="Личный кабинет"
            title="Профиль"
            titleId="profile-page-title"
            description="Здесь вы сможете управлять личными данными и просматривать свои записи."
          />
        </div>

        <div className="profile-page__grid">
          <div className="profile-page__main">
            <ProfileInfo user={mockUser} />
            <ProfileBookings bookings={mockBookings} />
          </div>

          <aside className="profile-page__aside">
            <ProfileActions />
          </aside>
        </div>
      </PageContainer>
    </section>
  )
}