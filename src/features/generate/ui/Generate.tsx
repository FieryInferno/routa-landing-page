import { useState } from 'react'
import Button from '../../../shared/ui/Button/Button.component'
import styles from './Generate.module.scss'

export default function Generate() {
  const [topic, setTopic] = useState('')

  return (
    <div className={styles.container}>
      <header className={styles.statusRow}>
        <p className={styles.statusText}>
          <span>1 of 3 Roadmaps</span>
          <span className={styles.separator}>|</span>
          <span className={styles.plan}>Free plan</span>
        </p>
        <span className={styles.greeting} role="img" aria-label="streak">
          Rizky! Let’s Make Roadmap🔥
        </span>
      </header>

      <section className={styles.heroSection}>
        <h1 className={styles.title}>
          Enter a topic below to generate a personalized course for it
        </h1>

        <button type="button" className={styles.profilePill} aria-label="Current profile">
          <img
            src="/routa-rival.webp"
            alt="Profile"
            className={styles.avatar}
            loading="lazy"
            decoding="async"
          />
          <span className={styles.profileLabel}>Personalized for :</span>
          <span className={styles.profileValue}>Backend Developer 3-5 YOE</span>
          <span className={styles.chevron} aria-hidden="true">
            v
          </span>
        </button>
      </section>

      <section className={styles.promptSection}>
        <h2 className={styles.promptLabel}>What Can i help you learn?</h2>

        <div className={styles.inputCard}>
          <label htmlFor="generate-topic" className={styles.srOnly}>
            Enter topic
          </label>
          <textarea
            id="generate-topic"
            name="generate-topic"
            className={styles.topicInput}
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            placeholder="Enter Topic and you can describe it looks like you ask with friend"
          />

          <div className={styles.cardActions}>
            <button type="button" className={styles.micButton} aria-label="Use voice input">
              <svg
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M12 3a3 3 0 0 0-3 3v6a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3zm-5 8a1 1 0 1 1 2 0v1a3 3 0 1 0 6 0v-1a1 1 0 1 1 2 0v1a5 5 0 0 1-4 4.9V20h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-3.1A5 5 0 0 1 7 12v-1z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <Button variant="primary" disabled={topic.trim().length === 0}>
              Generate
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
