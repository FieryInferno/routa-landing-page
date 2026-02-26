import { useState } from 'react'
import Input from '../../../../../shared/ui/Input/Input.component'
import Button from '../../../../../shared/ui/Button/Button.component'
import styles from './RegisterForm.module.css'
import type { RegisterCredentials } from '../../../domain/register.entity'

interface RegisterFormValues extends RegisterCredentials {
  confirmPassword: string
}

interface RegisterFormProps {
  register: (values: RegisterFormValues) => void
  isLoading: boolean
  error: string | null
}

export default function RegisterForm({ register, isLoading, error }: RegisterFormProps) {
  const [formValues, setFormValues] = useState<RegisterFormValues>({
    name: '',
    email: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
  })
  const [clientError, setClientError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.birthDate.trim() ||
      !formValues.password.trim() ||
      !formValues.confirmPassword.trim()
    ) {
      return
    }

    if (formValues.password !== formValues.confirmPassword) {
      setClientError('Password tidak sama.')
      return
    }

    setClientError(null)
    register(formValues)
  }

  const updateValue = (key: keyof RegisterFormValues, value: string) => {
    setFormValues((previous) => ({ ...previous, [key]: value }))
  }

  const handlePasswordChange = (value: string) => {
    updateValue('password', value)
    if (clientError) {
      setClientError(null)
    }
  }

  const handleConfirmPasswordChange = (value: string) => {
    updateValue('confirmPassword', value)
    if (clientError) {
      setClientError(null)
    }
  }

  const visibleError = clientError ?? error

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Nama"
          placeholder="Nama"
          type="text"
          onChange={(value) => updateValue('name', value)}
          disabled={isLoading}
          required
        />
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          onChange={(value) => updateValue('email', value)}
          disabled={isLoading}
          required
        />

        <div className={styles.dateField}>
          <label className={styles.dateLabel} htmlFor="register-birth-date">
            Tanggal Lahir
          </label>
          <input
            id="register-birth-date"
            type="date"
            className={styles.dateInput}
            value={formValues.birthDate}
            onChange={(event) => updateValue('birthDate', event.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <Input
          label="Password"
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
          disabled={isLoading}
          required
        />
        <Input
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
          type="password"
          onChange={handleConfirmPasswordChange}
          disabled={isLoading}
          required
        />

        {visibleError && (
          <p className={styles.error} role="alert">
            {visibleError}
          </p>
        )}

        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? 'Memuat...' : 'Daftar Akun'}
        </Button>

        <div className={styles.separator}>
          <span>or</span>
        </div>

        <Button type="button" variant="google" disabled={isLoading}>
          Daftar Dengan Google
          <img src="/google-icon.webp" alt="Google Icon" className={styles.googleIcon} />
        </Button>
      </form>

      <p className={styles.signin}>
        Sudah Punya Akun? <a href="/login">Yuk Masuk</a>
      </p>
    </>
  )
}
