import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  reviewSchema,
  type ReviewFormValues,
} from '../../schemas/review.schema'

interface ReviewFormProps {
  onSubmit: (values: ReviewFormValues) => void
}

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { rating: 5, text: '' },
  })

  return (
    <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Оценка
        <input type="number" min={1} max={5} {...register('rating', { valueAsNumber: true })} />
      </label>
      {errors.rating && <span>{errors.rating.message}</span>}

      <label>
        Отзыв
        <textarea rows={4} {...register('text')} />
      </label>
      {errors.text && <span>{errors.text.message}</span>}

      <button type="submit">Отправить отзыв</button>
    </form>
  )
}
