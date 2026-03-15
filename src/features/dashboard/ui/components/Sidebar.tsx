import styles from './Sidebar.module.css'

const navItems = [
  { label: 'Dashboard', isActive: true },
  { label: 'Generate Roadmap', isActive: false },
  { label: 'My Roadmaps', isActive: false },
  { label: 'Progress', isActive: false },
  { label: 'Lainnya', isActive: false },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && <button className={styles.backdrop} onClick={onClose} aria-label="Close menu" />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.brandRow}>
          <div className={styles.brandMark}>R</div>
          <h1 className={styles.brandName}>Routa</h1>
        </div>

        <nav className={styles.nav} aria-label="Dashboard menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`${styles.navItem} ${item.isActive ? styles.active : ''}`}
            >
              {item.label}
            </a>
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
