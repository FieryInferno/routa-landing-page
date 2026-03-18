import type { CSSProperties, ReactNode } from 'react'
import styles from './YourStats.module.scss'
import Button from '../../../../shared/ui/Button/Button.component'
import beginnerLeague from '../../../../assets/images/beginner-league.webp'

type StatCardTone = 'clock' | 'check' | 'league'
type StatCardVisual = StatCardTone | string

interface StatCard {
  id: string
  title: string
  value: string
  tone: StatCardVisual
}

interface RoadmapProgress {
  title: string
  completion: number
  lastActivity: string
  totalMinutes: number
  levelLabel: string
  nextTopic: string
  ctaLabel: string
}

export interface YourStatsProps {
  onActionClick?: () => void
  statCards?: StatCard[]
  roadmap?: RoadmapProgress
}

const defaultStatCards: StatCard[] = [
  {
    id: 'learning-time',
    value: '5H 20m',
    title: 'Total Learning',
    tone: 'clock',
  },
  {
    id: 'league',
    value: 'Beginner League',
    title: 'You ranked',
    tone: beginnerLeague,
  },
  {
    id: 'subtopics',
    value: '12',
    title: 'Subtopics Done',
    tone: 'check',
  },
  {
    id: 'review-time',
    value: '5H 20m',
    title: 'Total Learning',
    tone: 'clock',
  },
]

const defaultRoadmap: RoadmapProgress = {
  title: 'Current Roadmap : Backend Golang Developer',
  completion: 75,
  lastActivity: '2 Hours Ago',
  totalMinutes: 421,
  levelLabel: 'Begginer',
  nextTopic: 'Golang Methods & Interface',
  ctaLabel: 'Continue Path',
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.statIconSvg}>
      <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 7.75v4.9l3.1 2.15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.statIconSvg}>
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m8.5 12.2 2.25 2.3 4.95-5.15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function LeagueIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.statIconSvg}>
      <path
        d="M12 4.75 14.3 8.8l4.55.85-3.15 3.3.55 4.55L12 15.4l-4.25 2.1.55-4.55-3.15-3.3 4.55-.85L12 4.75Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="12" cy="12" r="2.1" fill="var(--white)" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.nextIconSvg}>
      <path d="m8 6 8 6-8 6V6Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" />
    </svg>
  )
}

function isStatCardTone(tone: StatCardVisual): tone is StatCardTone {
  return tone === 'clock' || tone === 'check' || tone === 'league'
}

function StatIcon({ tone }: { tone: StatCardVisual }): ReactNode {
  if (!isStatCardTone(tone)) {
    return <img src={tone} alt="" className={styles.statIconImage} />
  }

  switch (tone) {
    case 'check':
      return <CheckIcon />
    case 'league':
      return <LeagueIcon />
    case 'clock':
    default:
      return <ClockIcon />
  }
}

export default function YourStats({ onActionClick, roadmap = defaultRoadmap }: YourStatsProps) {
  const ringStyle = {
    '--progress': `${roadmap.completion}%`,
  } as CSSProperties

  const levelStyle = {
    '--level-progress': `${roadmap.completion}%`,
  } as CSSProperties

  return (
    <div className={styles.statsSection} aria-labelledby="your-stats-heading">
      <header className={styles.statsSectionHeader}>
        <h2 id="your-stats-heading" className={styles.statsSectionTitle}>
          Your Stats
        </h2>

        <button type="button" className={styles.statsAction} onClick={onActionClick}>
          View All Stats
        </button>
      </header>

      <div className={styles.statsGrid}>
        {defaultStatCards.map((card) => (
          <article key={card.id} className={styles.statCard}>
            <div className={styles.statCardIcon} aria-hidden="true">
              <StatIcon tone={card.tone} />
            </div>

            <div className={styles.statCardBody}>
              <strong className={styles.statCardValue}>{card.value}</strong>
              <p className={styles.statCardLabel}>{card.title}</p>
            </div>
          </article>
        ))}
      </div>

      <article className={styles.roadmapCard}>
        <h3 className={styles.roadmapTitle}>{roadmap.title}</h3>

        <div className={styles.roadmapBody}>
          <div className={styles.progressRing} style={ringStyle} aria-hidden="true">
            <div className={styles.progressRingInner}>
              <span className={styles.progressValue}>{roadmap.completion}%</span>
              <span className={styles.progressLabel}>Complete</span>
            </div>
          </div>

          <div className={styles.roadmapMetrics}>
            <div className={styles.metricBlock}>
              <p className={styles.metricTitle}>Last Activity : {roadmap.lastActivity}</p>
              <div className={styles.metricBar} aria-hidden="true">
                <span className={styles.metricBarFill} />
              </div>
            </div>

            <div className={styles.metricBlock}>
              <p className={styles.metricTitle}>Time Calc : {roadmap.totalMinutes} Minutes</p>
              <div className={styles.levelBar} style={levelStyle} aria-hidden="true">
                <span className={styles.levelBarFill}>{roadmap.levelLabel}</span>
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.roadmapFooter}>
          <p className={styles.nextTopic}>
            <span className={styles.nextTopicIcon} aria-hidden="true">
              <ArrowRightIcon />
            </span>
            <span>Next Up:</span>
            <strong className={styles.nextTopicValue}>{roadmap.nextTopic}</strong>
          </p>

          <Button type="button" variant="primary">
            Continue Path
          </Button>
        </footer>
      </article>
    </div>
  )
}
