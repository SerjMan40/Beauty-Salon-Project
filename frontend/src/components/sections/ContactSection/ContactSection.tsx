import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'
import { SectionHeader } from '../../ui/SectionHeader'
import './ContactSection.scss'

const CONTACT_ITEMS = [
  {
    label: 'Адрес',
    value: 'ул. Центральная, 12, Днепр',
  },
  {
    label: 'Телефон',
    value: '+38 (000) 000-00-00',
  },
  {
    label: 'График',
    value: 'Пн–Вс: 09:00–20:00',
  },
] as const

export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <PageContainer>
        <div className="contact-section__inner">
          <div className="contact-section__content">
            <SectionHeader
              eyebrow="Контакты"
              title="Мы рядом"
              titleId="contact-title"
              description="Приходите в удобное время или запишитесь онлайн — мы поможем подобрать услугу и мастера."
            />

            <div className="contact-section__list">
              {CONTACT_ITEMS.map(({ label, value }) => (
                <div className="contact-section__item" key={label}>
                  <span className="contact-section__label">{label}</span>
                  <span className="contact-section__value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section__map" aria-hidden="true">
            Карта / схема проезда
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
