import { useState } from 'react'

import type { RegisterFormProps, RegisterFormValues } from './types'

import './RegisterForm.scss'

const INITIAL_VALUES: RegisterFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [values, setValues] = useState<RegisterFormValues>(INITIAL_VALUES)

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
    <form className="register-form" onSubmit={handleSubmit}>
      <label className="register-form__field">
        <span>Имя</span>
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Введите имя"
          required
        />
      </label>

      <label className="register-form__field">
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

      <label className="register-form__field">
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

      <label className="register-form__field">
        <span>Повторите пароль</span>
        <input
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          placeholder="Повторите пароль"
          required
        />
      </label>

      <button className="register-form__button" type="submit">
        Зарегистрироваться
      </button>
    </form>
  )
}