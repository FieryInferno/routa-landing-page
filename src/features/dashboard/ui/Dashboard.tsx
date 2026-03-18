import styles from './Dashboard.module.scss'
import YourStats from './components/YourStats'
import Greeting from './components/Greeting'
import Banner from './components/Banner'
import DailyLootChallenge from './components/DailyLootChallenge'

const defaultBannerRailItems = [
  { id: 'rivals', label: 'Routa Rivals', type: 'thumbnail' as const },
  { id: 'coming-soon-1', label: 'Coming Soon', type: 'coming-soon' as const },
  { id: 'coming-soon-2', label: 'Coming Soon', type: 'coming-soon' as const },
]

export default function Dashboard() {
  return (
    <>
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
        <DailyLootChallenge
          streakCount={6}
          streakDays={[
            { label: 'M', completed: true },
            { label: 'T', completed: true },
            { label: 'W', completed: true },
            { label: 'T', completed: true },
            { label: 'F', completed: true },
            { label: 'S', completed: true },
            { label: 'S', completed: false },
          ]}
          selectedRegion={''}
          topPlayers={[
            { rank: 1, username: '@AnakJalanan', xp: 12340 },
            { rank: 2, username: '@pintarbanget', xp: 12340 },
            { rank: 3, username: '@Satruna', xp: 12340 },
            { rank: 4, username: '@Belajar Giat', xp: 12340 },
            { rank: 5, username: '@Pecinta Kucing', xp: 12310 },
            { rank: 6, username: 'Sukadana', xp: 11940 },
          ]}
        />
      </section>
    </>
  )
}
