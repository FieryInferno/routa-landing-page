import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Banner from './Banner.tsx'

describe('Banner', () => {
  it('renders roadmap and routa rival images and rail items', () => {
    render(
      <Banner
        roadmapImageSrc="/roadmap.webp"
        roadmapImageAlt="Roadmap"
        rivalImageSrc="/routa-rival.webp"
        rivalImageAlt="Routa Rival"
        railItems={[
          { id: 'rivals', label: 'Routa Rivals', type: 'thumbnail' },
          { id: 'coming-soon-1', label: 'Coming Soon', type: 'coming-soon' },
          { id: 'coming-soon-2', label: 'Coming Soon', type: 'coming-soon' },
        ]}
      />
    )

    expect(screen.getByRole('img', { name: 'Roadmap' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Routa Rival' })).toBeInTheDocument()
    expect(screen.getByText('Routa Rivals')).toBeInTheDocument()
    expect(screen.getAllByText('Coming Soon')).toHaveLength(2)
  })
})
