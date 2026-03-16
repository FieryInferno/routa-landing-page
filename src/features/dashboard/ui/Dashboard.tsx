import { useState } from 'react'
import Sidebar from './components/Sidebar'
import styles from './Dashboard.module.scss'

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className={styles.page}>
      <Sidebar
        isOpen={isSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className={`${styles.main} ${isSidebarCollapsed ? styles.mainCollapsed : ''}`}>
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
            <div className={styles.personalizedPill}>
              Personalized for : Backend Developer 3-5 YOE
            </div>
          </div>

          <div className={styles.boardWrap}>
            <div className={styles.board}>
              <img className={styles.boardImage} src="../../../../roadmap.webp" alt="Roadmap" />
            </div>
            <div className={styles.routaRivalAndRailWrap}>
              <div className={styles.routaRivalMedia}>
                <img
                  className={styles.routaRivalImage}
                  src="../../../../routa-rival.webp"
                  alt="Routa Rival"
                />
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
          </div>
        </section>
      </main>
    </div>
  )
}
