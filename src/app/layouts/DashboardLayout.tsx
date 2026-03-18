import { type ReactNode, useState } from 'react'
import Sidebar from '../../shared/ui/Sidebar/index'
import styles from './DashboardLayout.module.scss'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
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
        {children}
      </main>
    </div>
  )
}
