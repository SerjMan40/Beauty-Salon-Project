import { APPOINTMENT_STATUSES } from '../../constants/appointment.constants'

import { SectionHeader } from '../../components/ui/SectionHeader'
import { BookingForm } from '../../features/booking'

import './BookingPage.scss'
import { PageContainer } from '../../layouts/components/PageContainer/PageContainer'

const bookingMockData = {
  status: APPOINTMENT_STATUSES.pending,
  serviceName: 'Женская стрижка',
  masterName: 'Анна Иванова',
  price: 800,
  slots: ['09:00', '10:00', '11:30', '13:00', '15:30', '17:00'],
  minDate: new Date().toISOString().slice(0, 10),
}

export function BookingPage() {
  return (
    <section className="booking-page" aria-labelledby="booking-page-title">
      <PageContainer>
        <div className="booking-page__header">
          <SectionHeader
            eyebrow="Онлайн-запись"
            title="Запись на услугу"
            titleId="booking-page-title"
            description="Выберите удобную дату и время визита. После подтверждения мы свяжемся с вами для уточнения деталей."
          />
        </div>

        <BookingForm {...bookingMockData} />
      </PageContainer>
    </section>
  )
}