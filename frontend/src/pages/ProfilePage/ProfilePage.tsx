import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../app/config/routes'
import { SectionHeader } from '../../components/ui'
import { useAuth } from '../../features/auth/hooks/useAuth'
import { fetchAppointments, selectAppointments } from '../../features/booking'
import { fetchMasters, selectMasters } from '../../features/masters'
import { fetchProfile, selectProfile } from '../../features/profile'
import { fetchServices, selectServices } from '../../features/services'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'
import { ProfileActions } from './components/ProfileActions/ProfileActions'
import { ProfileBookings } from './components/ProfileBookings/ProfileBookings'
import { ProfileInfo } from './components/ProfileInfo/ProfileInfo'

import type { ProfileBooking } from './types'

import './ProfilePage.scss'

export function ProfilePage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { logout } = useAuth()
  const profile = useAppSelector(selectProfile)
  const appointments = useAppSelector(selectAppointments)
  const services = useAppSelector(selectServices)
  const masters = useAppSelector(selectMasters)

  useEffect(() => {
    void Promise.all([
      dispatch(fetchProfile()),
      dispatch(fetchAppointments()),
      dispatch(fetchServices()),
      dispatch(fetchMasters()),
    ])
  }, [dispatch])

  const bookings: ProfileBooking[] = appointments.map((appointment) => {
    const [date, time = ''] = appointment.startsAt.split('T')
    return {
      id: appointment.id,
      serviceName: services.find(({ id }) => id === appointment.serviceId)?.name ?? 'Услуга',
      masterName: masters.find(({ id }) => id === appointment.masterId)?.name ?? 'Мастер',
      date,
      time: time.slice(0, 5),
      status: appointment.status,
    }
  })

  const handleLogout = async () => {
    await logout()
    navigate(ROUTES.login)
  }

  return (
    <section className="profile-page" aria-labelledby="profile-page-title">
      <PageContainer>
        <div className="profile-page__header">
          <SectionHeader eyebrow="Личный кабинет" title="Профиль" titleId="profile-page-title" description="Управляйте личными данными и просматривайте свои записи." />
        </div>
        <div className="profile-page__grid">
          <div className="profile-page__main">
            {profile && <ProfileInfo user={profile} />}
            <ProfileBookings bookings={bookings} />
          </div>
          <aside className="profile-page__aside">
            <ProfileActions onLogout={() => void handleLogout()} />
          </aside>
        </div>
      </PageContainer>
    </section>
  )
}
