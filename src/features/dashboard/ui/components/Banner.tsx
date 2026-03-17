import styles from './Banner.module.scss'

export type BannerRailItemType = 'thumbnail' | 'coming-soon'

export interface BannerRailItem {
  id: string
  label: string
  type: BannerRailItemType
}

export interface BannerProps {
  roadmapImageSrc: string
  roadmapImageAlt: string
  rivalImageSrc: string
  rivalImageAlt: string
  railItems: BannerRailItem[]
}

export default function Banner({
  roadmapImageSrc,
  roadmapImageAlt,
  rivalImageSrc,
  rivalImageAlt,
  railItems,
}: BannerProps) {
  return (
    <div className={styles.boardWrap}>
      <div className={styles.board}>
        <img className={styles.boardImage} src={roadmapImageSrc} alt={roadmapImageAlt} />
      </div>

      <div className={styles.routaRivalAndRailWrap}>
        <div className={styles.routaRivalMedia}>
          <img className={styles.routaRivalImage} src={rivalImageSrc} alt={rivalImageAlt} />
        </div>

        <aside className={styles.rail}>
          {railItems.map((item) => (
            <div key={item.id} className={styles.railCard}>
              {item.type === 'thumbnail' ? (
                <div className={styles.thumbnail} aria-hidden="true" />
              ) : (
                <p className={styles.question}>?</p>
              )}
              <p className={styles.railLabel}>{item.label}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
