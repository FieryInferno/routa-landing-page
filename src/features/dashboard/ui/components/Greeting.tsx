import styles from './Greeting.module.scss'

export interface GreetingProps {
  user: string
  personalizedFor: string
}

export default function Greeting({ user, personalizedFor }: GreetingProps) {
  return (
    <div className={styles.headingRow}>
      <h2 className={styles.title}>Welcome Back, {user}! 👋🏻</h2>
      <div className={styles.personalizedPill}>Personalized for : {personalizedFor}</div>
    </div>
  )
}
