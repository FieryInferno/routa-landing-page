import styles from './index.module.scss'
import SidebarIcon from '../../../features/dashboard/ui/components/SidebarIcon.component'
import { NavLink } from 'react-router-dom'
import { sidebarNavItems } from '../../config/navigation'

interface SidebarProps {
  isOpen: boolean
  isCollapsed: boolean
  onToggleCollapse: () => void
  onClose: () => void
}

export default function Sidebar({ isOpen, isCollapsed, onToggleCollapse, onClose }: SidebarProps) {
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
            onClick={onToggleCollapse}
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
          {sidebarNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={onClose}
              className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              {({ isActive }) => (
                <>
                  <SidebarIcon iconName={item.icon ?? ''} isActive={isActive} />
                  <span className={styles.navLabel}>{item.label}</span>
                </>
              )}
            </NavLink>
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
