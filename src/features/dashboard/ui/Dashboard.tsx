import { useState } from 'react'
import Sidebar from './components/Sidebar'
import styles from './Dashboard.module.scss'
import YourStats from './components/YourStats'
import Greeting from './components/Greeting'
import Banner from './components/Banner'

const defaultBannerRailItems = [
  { id: 'rivals', label: 'Routa Rivals', type: 'thumbnail' as const },
  { id: 'coming-soon-1', label: 'Coming Soon', type: 'coming-soon' as const },
  { id: 'coming-soon-2', label: 'Coming Soon', type: 'coming-soon' as const },
]

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
          <Greeting user="Rizky" personalizedFor="Backend Developer 3-5 YOE" />
          <Banner
            roadmapImageSrc="/roadmap.webp"
            roadmapImageAlt="Roadmap"
            rivalImageSrc="/routa-rival.webp"
            rivalImageAlt="Routa Rival"
            railItems={defaultBannerRailItems}
          />
        </section>
        <section className={styles.statsWrap}>
          <YourStats />
          <div>test</div>
        </section>
      </main>
    </div>
  )
}
