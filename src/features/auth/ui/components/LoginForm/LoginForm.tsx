import { useState } from 'react'
import Input from '../../../../../shared/ui/Input/Input.component'
import Button from '../../../../../shared/ui/Button/Button.component'
import styles from './LoginForm.module.css'

interface LoginFormValues {
  email: string
  password: string
  remember: boolean
}

interface LoginFormProps {
  login: (values: LoginFormValues) => void
  isLoading: boolean
  error: string | null
}

export default function LoginForm({ login, isLoading, error }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      return
    }
    login({ email, password, remember })
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          onChange={setEmail}
          disabled={isLoading}
          required
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          onChange={setPassword}
          disabled={isLoading}
          required
        />

        <label className={styles.remember}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            disabled={isLoading}
          />
          <span>Biarkan saya tetap masuk</span>
        </label>

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? 'Memuat...' : 'Masuk'}
        </Button>

        <div className={styles.separator}>
          <span>or</span>
        </div>

        <Button type="button" variant="secondary" disabled={isLoading}>
          Masuk Dengan Google
          <img src="/google-icon.webp" alt="Google Icon" className={styles.googleIcon} />
        </Button>
      </form>

      <p className={styles.signup}>
        Belum Punya Akun? <a href="/register">Yuk Buat Sekarang</a>
      </p>
    </>
  )
}
