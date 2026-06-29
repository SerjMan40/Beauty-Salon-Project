import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z.number().min(1, 'Минимальная оценка — 1').max(5, 'Максимальная оценка — 5'),
  text: z
    .string()
    .min(10, 'Отзыв должен быть не короче 10 символов')
    .max(1000, 'Отзыв слишком длинный'),
  masterId: z.string().optional(),
})

export type ReviewFormValues = z.infer<typeof reviewSchema>
