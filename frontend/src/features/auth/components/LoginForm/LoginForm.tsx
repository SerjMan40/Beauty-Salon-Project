import { useState } from 'react'

import type { LoginFormProps, LoginFormValues } from './types'

import './LoginForm.scss'

const INITIAL_VALUES: LoginFormValues = {
  email: '',
  password: '',
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [values, setValues] = useState<LoginFormValues>(INITIAL_VALUES)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    onSubmit?.(values)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-form__field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Введите email"
          required
        />
      </label>

      <label className="login-form__field">
        <span>Пароль</span>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Введите пароль"
          required
        />
      </label>

      <button className="login-form__button" type="submit">
        Войти
      </button>
    </form>
  )
}