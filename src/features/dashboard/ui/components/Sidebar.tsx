import { useState } from 'react'
import styles from './Sidebar.module.css'
import SidebarIcon from './SidebarIcon.component'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', isActive: true, icon: 'dashboard' },
  { label: 'Generate Roadmap', isActive: false, icon: 'generate-roadmap' },
  { label: 'My Roadmaps', isActive: false, icon: 'my-roadmaps' },
  { label: 'Progress', isActive: false, icon: 'progress' },
  { label: 'Lainnya', isActive: false, icon: 'more' },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
      {isOpen && <button className={styles.backdrop} onClick={onClose} aria-label="Close menu" />}

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ''} ${isCollapsed ? styles.collapsed : ''}`}
      >
        <div className={styles.brandRow}>
          <img src="../../../../logo-routa-full.webp" alt="Routa Logo" className={styles.logo} />
          <button
            className={styles.toggleButton}
            onClick={() => setIsCollapsed((prev) => !prev)}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-pressed={isCollapsed}
          >
            <span className={styles.toggleIcon} aria-hidden="true">
              {isCollapsed ? '>' : '<'}
            </span>
          </button>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close sidebar">
            <span className={styles.closeIcon} aria-hidden="true">
              x
            </span>
          </button>
        </div>

        <nav className={styles.nav} aria-label="Dashboard menu">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to="#"
              className={`${styles.navItem} ${item.isActive ? styles.active : ''}`}
            >
              <SidebarIcon iconName={item.icon} isActive={item.isActive} />
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.noteCard}>
          <p className={styles.noteTitle}>Prototype note</p>
          <p className={styles.noteBody}>
            Ini prototype statis (HTML/CSS/JS). Kamu bisa ganti teks, warna, dan data dummy sesuai
            kebutuhan.
          </p>
        </div>
      </aside>
    </>
  )
}
