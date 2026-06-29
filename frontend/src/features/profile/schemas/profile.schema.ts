import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string().min(2, 'Введите имя'),
  email: z.email('Введите корректный email'),
  phone: z.string().max(20, 'Телефон слишком длинный').optional(),
  birthday: z.iso.date('Введите корректную дату').optional(),
  avatarUrl: z.url('Введите корректную ссылку').optional(),
})

export type ProfileFormValues = z.infer<typeof profileSchema>
