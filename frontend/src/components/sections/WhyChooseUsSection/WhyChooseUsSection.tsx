import { PageContainer } from '../../../layouts/components/PageContainer/PageContainer'
import { SectionHeader } from '../../ui/SectionHeader'

import './WhyChooseUsSection.scss'

const ADVANTAGES = [
  {
    title: 'Индивидуальный подход',
    description: 'Мы подбираем уход и процедуры под ваши особенности, стиль и пожелания.',
  },
  {
    title: 'Опытные мастера',
    description: 'С вами работают специалисты, которые внимательно относятся к деталям.',
  },
  {
    title: 'Качественные материалы',
    description: 'Используем профессиональные средства и современные техники ухода.',
  },
  {
    title: 'Комфортная атмосфера',
    description: 'Создаём пространство, куда хочется возвращаться снова.',
  },
] as const

export function WhyChooseUsSection() {
  return (
    <section className="why-choose-us" aria-labelledby="why-choose-us-title">
      <PageContainer>
        <SectionHeader
          eyebrow="Преимущества"
          title="Почему выбирают нас"
          titleId="why-choose-us-title"
          description="Мы объединяем профессиональный уход, внимание к деталям и спокойную атмосферу, чтобы каждый визит был приятным и результативным."
        />

        <div className="why-choose-us__grid">
          {ADVANTAGES.map(({ title, description }) => (
            <article className="why-choose-us__card" key={title}>
              <h3 className="why-choose-us__card-title">{title}</h3>
              <p className="why-choose-us__card-description">{description}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
