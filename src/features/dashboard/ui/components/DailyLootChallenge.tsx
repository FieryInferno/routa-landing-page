import styles from './DailyLootChallenge.module.scss'

export interface StreakDay {
  /** Single-letter label, e.g. "M", "T", "W" */
  label: string
  completed: boolean
}

export interface LeaderboardPlayer {
  rank: number
  username: string
  xp: number
  avatarSrc?: string
}

export interface DailyLootChallengeProps {
  /** Total days in the current streak */
  streakCount: number
  /** Ordered array of 7 week-day indicators */
  streakDays: StreakDay[]
  /** Currently selected region label shown in the leaderboard header */
  selectedRegion: string
  /** Full ordered list of players; top 3 are shown on the podium */
  topPlayers: LeaderboardPlayer[]
  onSeeMore?: () => void
}

const MEDAL_ORDER = [2, 1, 3] as const

export default function DailyLootChallenge({
  streakCount,
  streakDays,
  selectedRegion,
  topPlayers,
  onSeeMore,
}: DailyLootChallengeProps) {
  const podiumPlayers = MEDAL_ORDER.map((rank) => topPlayers.find((p) => p.rank === rank)).filter(
    Boolean
  ) as LeaderboardPlayer[]

  const listPlayers = topPlayers.filter((p) => p.rank > 3)

  return (
    <section className={styles.root} aria-label="Daily Loot Challenge">
      <h2 className={styles.heading}>Daily Loot Challenge</h2>

      {/* ── Streak Card ─────────────────────────────────────── */}
      <div className={styles.streakCard}>
        <div className={styles.streakLeft}>
          <div className={styles.chest} aria-hidden="true">
            <img src="../../../../../treasure-chest.webp" alt="Treasure Chest" />
          </div>
          <div className={styles.streakInfo}>
            <span className={styles.streakLabel}>Current Streak</span>
            <span className={styles.streakSub}>{streakCount}-Day Streak</span>
          </div>
        </div>

        <div className={styles.streakDays} aria-label="Weekly progress">
          {streakDays.map((day, i) => (
            <div key={i} className={styles.daySlot}>
              <span
                className={`${styles.dayDot} ${day.completed ? styles.dayDotCompleted : styles.dayDotPending}`}
                data-completed={day.completed}
                aria-label={day.completed ? `${day.label} completed` : `${day.label} pending`}
              />
              <span className={styles.dayLabel}>{day.label}</span>
            </div>
          ))}
        </div>

        <button className={styles.streakToggle} aria-label="Toggle streak details">
          ▾
        </button>
      </div>

      {/* ── Leaderboard ──────────────────────────────────────── */}
      <div className={styles.leaderboard}>
        <div className={styles.leaderboardHeader}>
          <h3 className={styles.leaderboardTitle}>Top 10 Best Routa</h3>
          <div className={styles.regionFilters}>
            <span className={styles.regionActive}>
              <span className={styles.flagIcon} aria-hidden="true">
                🇮🇩
              </span>
              {selectedRegion}
            </span>
            <button className={styles.regionWorld} aria-label="Switch to World view">
              <span className={styles.globeIcon} aria-hidden="true">
                🌐
              </span>
              World ▾
            </button>
          </div>
        </div>

        {/* Podium */}
        <div className={styles.podiumWrap}>
          <ol className={styles.podium} aria-label="Top 3 podium">
            {podiumPlayers.map((player) => (
              <li
                key={player.rank}
                className={`${styles.podiumSlot} ${styles[`podiumSlot${player.rank}` as keyof typeof styles]}`}
                aria-label={`Rank ${player.rank}: ${player.username}`}
              >
                <div
                  className={`${styles.medalFrame} ${styles[`medalFrame${player.rank}` as keyof typeof styles]}`}
                >
                  {player.avatarSrc ? (
                    <img
                      src={player.avatarSrc}
                      alt={player.username}
                      className={styles.avatarImg}
                    />
                  ) : (
                    <div className={styles.avatarPlaceholder} aria-hidden="true" />
                  )}
                  <span className={styles.rankBadge}>{player.rank}</span>
                </div>
                <span className={styles.podiumUsername}>{player.username}</span>
                <span className={styles.podiumXp}>{player.xp}xp</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Rank list (4+) */}
        <ol className={styles.rankList} start={4} aria-label="Players ranked 4 and below">
          {listPlayers.map((player) => (
            <li key={player.rank} className={styles.rankRow}>
              <span className={styles.rankNumber}>{player.rank}</span>
              <div className={styles.rankAvatar} aria-hidden="true">
                {player.avatarSrc ? (
                  <img src={player.avatarSrc} alt="" className={styles.rankAvatarImg} />
                ) : (
                  <div className={styles.rankAvatarPlaceholder} />
                )}
              </div>
              <span className={styles.rankUsername}>{player.username}</span>
              <span className={styles.rankXp}>{player.xp}xp</span>
            </li>
          ))}
        </ol>

        <button className={styles.seeMoreBtn} onClick={onSeeMore}>
          See More
        </button>
      </div>
    </section>
  )
}
