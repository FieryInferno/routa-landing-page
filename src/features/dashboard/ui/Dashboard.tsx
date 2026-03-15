import { useState } from 'react'
import Sidebar from './components/Sidebar'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className={styles.page}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className={styles.main}>
        <header className={styles.header}>
          <button
            className={styles.menuButton}
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className={styles.headerActions}>
            <button className={styles.planButton}>Upgrade ke Routa Pro</button>
            <div className={styles.avatar} aria-hidden="true" />
          </div>
        </header>

        <section className={styles.contentSection}>
          <div className={styles.headingRow}>
            <h2 className={styles.title}>Welcome Back, Rizky! 👋🏻</h2>
            <div className={styles.personalizedPill}>Personalized for : Backend Developer 3-5 YOE</div>
          </div>

          <div className={styles.boardWrap}>
            <div className={styles.board}>
              <div className={styles.mapHint}>Roadmap Area</div>
            </div>

            <aside className={styles.rail}>
              <div className={styles.railCard}>
                <div className={styles.thumbnail} />
                <p className={styles.railLabel}>Routa Rivals</p>
              </div>
              <div className={styles.railCard}>
                <p className={styles.question}>?</p>
                <p className={styles.railLabel}>Coming Soon</p>
              </div>
              <div className={styles.railCard}>
                <p className={styles.question}>?</p>
                <p className={styles.railLabel}>Coming Soon</p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
