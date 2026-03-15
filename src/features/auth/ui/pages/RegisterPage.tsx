import styles from './RegisterPage.module.css'
import ImageSlider from '../../../../shared/ui/ImageSlider/ImageSlider.component'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import { useRegisterUseCase } from '../hooks/registerUseCase.context'
import { useRegister } from '../hooks/useRegister.hook'

export default function RegisterPage() {
  const registerUseCase = useRegisterUseCase()
  const { register, isLoading, error } = useRegister(registerUseCase)

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.brand}>
          <img src="../../../../../logo-routa.webp" alt="Routa Logo" className={styles.logo} />
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Daftar</h1>
          <p className={styles.subtitle}>Buat akun routa kamu sekarang!</p>
        </div>
        <RegisterForm register={register} isLoading={isLoading} error={error} />
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
