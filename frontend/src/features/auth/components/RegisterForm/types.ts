export interface RegisterFormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface RegisterFormProps {
  onSubmit?: (values: RegisterFormValues) => void
}