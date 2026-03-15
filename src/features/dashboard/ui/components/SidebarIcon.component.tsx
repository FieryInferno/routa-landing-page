import { Suspense, lazy, type ComponentType, type LazyExoticComponent, type SVGProps } from 'react'
import styles from './SidebarIcon.module.css'

interface SidebarIconProps {
  iconName: string
  isActive?: boolean
}

type SvgComponent = ComponentType<SVGProps<SVGSVGElement>>

const iconModules = import.meta.glob<SvgComponent>('@/assets/icons/*.svg', {
  query: '?react',
  import: 'default',
})

const lazyIconMap = Object.fromEntries(
  Object.entries(iconModules).map(([path, importer]) => {
    const iconName = path.split('/').pop()?.replace('.svg', '') ?? ''
    return [
      iconName,
      lazy(async () => {
        const Icon = await importer()
        return { default: Icon }
      }),
    ]
  })
) as Record<string, LazyExoticComponent<SvgComponent>>

function IconFallback() {
  return <span className={styles.fallback} aria-hidden="true" />
}

export default function SidebarIcon({ iconName, isActive = false }: SidebarIconProps) {
  const IconComponent = lazyIconMap[iconName]

  return (
    <span className={`${styles.iconWrap} ${isActive ? styles.active : ''}`} aria-hidden="true">
      {!IconComponent ? (
        <IconFallback />
      ) : (
        <Suspense fallback={<IconFallback />}>
          <IconComponent className={styles.icon} focusable="false" />
        </Suspense>
      )}
    </span>
  )
}
