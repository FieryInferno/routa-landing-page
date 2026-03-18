import styles from './LoginPage.module.css'
import { useNavigate } from 'react-router-dom'
import ImageSlider from '../../../../shared/ui/ImageSlider/ImageSlider.component'
import LoginForm from '../components/LoginForm/LoginForm'
import { useAuthUseCase } from '../hooks/authUseCase.context'
import { useLogin } from '../hooks/useLogin.hook'
import type { LoginCredentials } from '../../domain/login.entity'

export default function LoginPage() {
  const navigate = useNavigate()
  const loginUseCase = useAuthUseCase()
  const { login, isLoading, error } = useLogin(loginUseCase)

  const handleLogin = async (values: LoginCredentials) => {
    await login(values)
    navigate('/dashboard')
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <img src="../../../../../logo-routa.webp" alt="Routa Logo" className={styles.logo} />
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Masuk</h1>
          <p className={styles.subtitle}>Silahkan login dengan akun routa kamu!</p>
        </div>

        <LoginForm login={handleLogin} isLoading={isLoading} error={error} />
      </div>

      <aside className={styles.visual}>
        <ImageSlider
          images={[
            '../../../../../login.webp',
            '../../../../../register.webp',
            '../../../../../gallery-2.webp',
          ]}
          interval={5000}
        />
      </aside>
    </div>
  )
}
