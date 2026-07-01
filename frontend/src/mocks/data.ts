import type { Appointment } from '../types/appointment.types'
import type { Article } from '../types/article.types'
import type { GalleryImage } from '../types/gallery.types'
import type { Master } from '../types/master.types'
import type { Review } from '../types/review.types'
import type { Service } from '../types/service.types'
import type { Profile } from '../types/user.types'

const createdAt = '2026-01-15T10:00:00.000Z'
const image = (label: string, color: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="42">${label}</text></svg>`,
  )}`

export const mockServices: Service[] = [
  { id: 'haircut', createdAt, name: 'Женская стрижка', description: 'Стрижка с консультацией и укладкой.', durationMinutes: 60, price: 900, category: 'Волосы' },
  { id: 'coloring', createdAt, name: 'Окрашивание', description: 'Персональный подбор оттенка и профессиональное окрашивание.', durationMinutes: 150, price: 2400, category: 'Волосы' },
  { id: 'manicure', createdAt, name: 'Маникюр', description: 'Комбинированный маникюр с покрытием.', durationMinutes: 90, price: 750, category: 'Ногти' },
  { id: 'pedicure', createdAt, name: 'Педикюр', description: 'Комплексный уход за стопами и ногтями.', durationMinutes: 100, price: 950, category: 'Ногти' },
  { id: 'brows', createdAt, name: 'Архитектура бровей', description: 'Коррекция формы и окрашивание.', durationMinutes: 45, price: 500, category: 'Лицо' },
  { id: 'makeup', createdAt, name: 'Вечерний макияж', description: 'Стойкий макияж под ваш образ.', durationMinutes: 75, price: 1200, category: 'Лицо' },
]

export const mockMasters: Master[] = [
  { id: 'anna', createdAt, name: 'Анна Иванова', specialization: 'Стилист-колорист', serviceIds: ['haircut', 'coloring'], experienceYears: 8, bio: 'Создаёт естественные формы и сложные оттенки.' },
  { id: 'olena', createdAt, name: 'Елена Коваль', specialization: 'Nail-мастер', serviceIds: ['manicure', 'pedicure'], experienceYears: 6, bio: 'Специалист по безопасному маникюру и дизайну.' },
  { id: 'maria', createdAt, name: 'Мария Бондарь', specialization: 'Визажист-бровист', serviceIds: ['brows', 'makeup'], experienceYears: 5, bio: 'Подчёркивает индивидуальность без перегруженного образа.' },
]

export const mockArticles: Article[] = [
  { id: 'hair-care', createdAt, title: 'Как выбрать уход для волос', excerpt: 'Базовые принципы домашнего и салонного ухода.', content: 'Правильный уход начинается с определения типа волос и состояния кожи головы. Мастер поможет подобрать средства и частоту процедур.', author: 'Анна Иванова', publishedAt: '2026-06-10T09:00:00.000Z', tags: ['волосы', 'уход'] },
  { id: 'coloring-guide', createdAt, title: 'Что важно знать перед окрашиванием', excerpt: 'Подготовка, консультация и реалистичные ожидания.', content: 'Перед окрашиванием расскажите мастеру о предыдущих процедурах и домашнем уходе. Это поможет выбрать безопасную технику.', author: 'Beauty Salon', publishedAt: '2026-06-18T09:00:00.000Z', tags: ['окрашивание'] },
  { id: 'nail-care', createdAt, title: 'Уход за руками между визитами', excerpt: 'Простые привычки для аккуратного маникюра.', content: 'Используйте масло для кутикулы и перчатки при контакте с бытовой химией. Не снимайте покрытие самостоятельно.', author: 'Елена Коваль', publishedAt: '2026-06-24T09:00:00.000Z', tags: ['ногти', 'уход'] },
]

export const mockGallery: GalleryImage[] = [
  ['Мягкий блонд', '#b87b91'], ['Текстурная стрижка', '#8f6574'], ['Нюдовый маникюр', '#c8959f'],
  ['Вечерний образ', '#73515f'], ['Архитектура бровей', '#aa6f7f'], ['Молочный педикюр', '#d0a4aa'],
].map(([title, color], index) => ({
  id: String(index + 1), createdAt, src: image(title, color), alt: title, title, category: index < 2 ? 'Волосы' : 'Красота',
}))

export const mockReviews: Review[] = [
  { id: '1', createdAt, authorName: 'Анна', rating: 5, text: 'Очень внимательный мастер и прекрасный результат.', masterId: 'anna' },
  { id: '2', createdAt, authorName: 'Екатерина', rating: 5, text: 'Приятная атмосфера, отличный сервис и аккуратная работа.', masterId: 'olena' },
  { id: '3', createdAt, authorName: 'Мария', rating: 5, text: 'Образ получился именно таким, как я хотела.', masterId: 'maria' },
]

export let mockProfile: Profile = {
  id: 'demo-user',
  name: 'Сергей',
  email: 'demo@beauty.local',
  phone: '+380 67 123 45 67',
  birthday: '1995-05-18',
  role: 'user',
}

export const updateMockProfile = (patch: Partial<Profile>) => {
  mockProfile = { ...mockProfile, ...patch }
  return mockProfile
}

export const mockAppointments: Appointment[] = [
  { id: 'appointment-1', createdAt, serviceId: 'haircut', masterId: 'anna', startsAt: '2026-07-05T12:00:00.000Z', status: 'confirmed' },
]
