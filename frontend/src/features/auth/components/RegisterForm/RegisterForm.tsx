import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../components/ui/Button/Button'
import { Input } from '../../../../components/ui/Input/Input'
import {
  registerSchema,
  type RegisterFormValues,
} from '../../schemas/auth.schema'

interface RegisterFormProps {
  isSubmitting?: boolean
  onSubmit: (values: RegisterFormValues) => void | Promise<void>
}

export function RegisterForm({
  isSubmitting = false,
  onSubmit,
}: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>
        <span>Имя</span>
        <Input autoComplete="name" {...register('name')} />
        {errors.name && <small role="alert">{errors.name.message}</small>}
      </label>
      <label>
        <span>Email</span>
        <Input type="email" autoComplete="email" {...register('email')} />
        {errors.email && <small role="alert">{errors.email.message}</small>}
      </label>
      <label>
        <span>Пароль</span>
        <Input
          type="password"
          autoComplete="new-password"
          {...register('password')}
        />
        {errors.password && (
          <small role="alert">{errors.password.message}</small>
        )}
      </label>
      <label>
        <span>Повторите пароль</span>
        <Input
          type="password"
          autoComplete="new-password"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <small role="alert">{errors.confirmPassword.message}</small>
        )}
      </label>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Создаём аккаунт…' : 'Зарегистрироваться'}
      </Button>
    </form>
  )
}
