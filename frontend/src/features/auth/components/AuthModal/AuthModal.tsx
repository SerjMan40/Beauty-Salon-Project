import { useState } from 'react'
import { Modal } from '../../../../components/ui/Modal/Modal'
import type {
  LoginFormValues,
  RegisterFormValues,
} from '../../schemas/auth.schema'
import { LoginForm } from '../LoginForm/LoginForm'
import { RegisterForm } from '../RegisterForm/RegisterForm'

type AuthMode = 'login' | 'register'

interface AuthModalProps {
  isOpen: boolean
  isSubmitting?: boolean
  onClose: () => void
  onLogin: (values: LoginFormValues) => void | Promise<void>
  onRegister: (values: RegisterFormValues) => void | Promise<void>
}

export function AuthModal({
  isOpen,
  isSubmitting,
  onClose,
  onLogin,
  onRegister,
}: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login')

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>{mode === 'login' ? 'Вход' : 'Регистрация'}</h2>
      {mode === 'login' ? (
        <LoginForm isSubmitting={isSubmitting} onSubmit={onLogin} />
      ) : (
        <RegisterForm isSubmitting={isSubmitting} onSubmit={onRegister} />
      )}
      <button
        type="button"
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
      >
        {mode === 'login'
          ? 'Нет аккаунта? Зарегистрироваться'
          : 'Уже есть аккаунт? Войти'}
      </button>
    </Modal>
  )
}
