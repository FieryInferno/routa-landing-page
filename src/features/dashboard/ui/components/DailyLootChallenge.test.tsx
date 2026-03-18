import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import DailyLootChallenge, { type DailyLootChallengeProps } from './DailyLootChallenge.tsx'

const streakDays: DailyLootChallengeProps['streakDays'] = [
  { label: 'M', completed: true },
  { label: 'T', completed: true },
  { label: 'W', completed: true },
  { label: 'T', completed: true },
  { label: 'F', completed: true },
  { label: 'S', completed: true },
  { label: 'S', completed: false },
]

const topPlayers: DailyLootChallengeProps['topPlayers'] = [
  { rank: 1, username: '@AnakJalanan', xp: 12340 },
  { rank: 2, username: '@pintarbanget', xp: 12340 },
  { rank: 3, username: '@Satruna', xp: 12340 },
  { rank: 4, username: '@Belajar Giat', xp: 12340 },
  { rank: 5, username: '@Pecinta Kucing', xp: 12310 },
  { rank: 6, username: 'Sukadana', xp: 11940 },
]

const defaultProps: DailyLootChallengeProps = {
  streakCount: 7,
  streakDays,
  selectedRegion: 'Indonesia',
  topPlayers,
  onSeeMore: undefined,
}

describe('DailyLootChallenge', () => {
  it('renders the section heading', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    expect(screen.getByRole('heading', { name: /daily loot challenge/i })).toBeInTheDocument()
  })

  it('renders current streak label and count', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    expect(screen.getByText(/current streak/i)).toBeInTheDocument()
    expect(screen.getByText(/7-day streak/i)).toBeInTheDocument()
  })

  it('renders all day labels in streak row', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    const dayLabels = screen.getAllByText(/^[MTWFS]$/)
    expect(dayLabels.length).toBe(7)
  })

  it('renders top leaderboard heading', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    expect(screen.getByRole('heading', { name: /top 10 best routa/i })).toBeInTheDocument()
  })

  it('renders the selected region', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    expect(screen.getByText('Indonesia')).toBeInTheDocument()
  })

  it('renders top 3 podium usernames', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    expect(screen.getByText('@AnakJalanan')).toBeInTheDocument()
    expect(screen.getByText('@pintarbanget')).toBeInTheDocument()
    expect(screen.getByText('@Satruna')).toBeInTheDocument()
  })

  it('renders list rows for ranks 4 and beyond', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    expect(screen.getByText('@Belajar Giat')).toBeInTheDocument()
    expect(screen.getByText('@Pecinta Kucing')).toBeInTheDocument()
    expect(screen.getByText('Sukadana')).toBeInTheDocument()
  })

  it('renders XP values for all players', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    // 12340xp appears multiple times (ranks 1-4)
    const xpItems = screen.getAllByText(/12340xp/i)
    expect(xpItems.length).toBeGreaterThanOrEqual(4)
  })

  it('renders See More button', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    expect(screen.getByRole('button', { name: /see more/i })).toBeInTheDocument()
  })

  it('does not render podium for ranks 4+', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    // rank 4 player should not be in podium section
    const podium = screen.getByRole('list', { name: /top 3 podium/i })
    expect(podium).not.toHaveTextContent('@Belajar Giat')
  })

  it('does not render completed dot for incomplete day', () => {
    render(<DailyLootChallenge {...defaultProps} />)
    const dots = document.querySelectorAll('[data-completed="false"]')
    expect(dots.length).toBeGreaterThanOrEqual(1)
  })
})
