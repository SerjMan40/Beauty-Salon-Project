import './ContactsSection.scss'

interface ContactsSectionProps {
  address: string
  phone: string
  email: string
  workingHours: string
}

export function ContactsSection({ address, phone, email, workingHours }: ContactsSectionProps) {
  return (
    <section className="contacts-section" aria-labelledby="contacts-title">
      <h2 id="contacts-title">Контакты</h2>
      <address>
        <p>{address}</p>
        <a href={`tel:${phone}`}>{phone}</a>
        <a href={`mailto:${email}`}>{email}</a>
        <p>{workingHours}</p>
      </address>
    </section>
  )
}
