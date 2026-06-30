import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../components/ui/Button/Button'
import { Input } from '../../../../components/ui/Input/Input'
import { loginSchema, type LoginFormValues } from '../../schemas/auth.schema'

interface LoginFormProps {
  isSubmitting?: boolean
  onSubmit: (values: LoginFormValues) => void | Promise<void>
}

export function LoginForm({ isSubmitting = false, onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>
        <span>Email</span>
        <Input type="email" autoComplete="email" {...register('email')} />
        {errors.email && <small role="alert">{errors.email.message}</small>}
      </label>
      <label>
        <span>Пароль</span>
        <Input type="password" autoComplete="current-password" {...register('password')} />
        {errors.password && <small role="alert">{errors.password.message}</small>}
      </label>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Входим…' : 'Войти'}
      </Button>
    </form>
  )
}
