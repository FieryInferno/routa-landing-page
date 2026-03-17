import Button from '../../../../shared/ui/Button/Button.component'
import Input from '../../../../shared/ui/Input/Input.component'
import styles from './StyleGuide.module.scss'

const colorTokens = [
  { label: '$primary-extra-light', value: '#f0fdff', swatchClass: styles.primaryExtraLight },
  { label: '$primary-light', value: '#dbf3f7', swatchClass: styles.primaryLight },
  { label: '$primary', value: '#42c2cf', swatchClass: styles.primary },
  { label: '$primary-dark', value: '#0f7684', swatchClass: styles.primaryDark },
  { label: '$grey-extra-light', value: '#f3f4f6', swatchClass: styles.greyExtraLight },
  { label: '$grey-medium', value: '#9ca3af', swatchClass: styles.greyMedium },
  { label: '$grey-dark', value: '#4b5563', swatchClass: styles.greyDark },
  { label: '$error', value: '#ef4444', swatchClass: styles.error },
]

const spacingTokens = [
  { label: '4px', className: styles.space1 },
  { label: '8px', className: styles.space2 },
  { label: '12px', className: styles.space3 },
  { label: '16px', className: styles.space4 },
  { label: '24px', className: styles.space6 },
  { label: '32px', className: styles.space8 },
]

export default function StyleGuidePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Routa UI Foundation</p>
        <h1 className={styles.title}>Style Guide</h1>
        <p className={styles.subtitle}>
          Single source of visual reference for components, text hierarchy, color tokens, and
          spacing rhythm.
        </p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>UI Components</h2>
        <div className={styles.componentGrid}>
          <div className={styles.showcaseItem}>
            <h3 className={styles.itemTitle}>Buttons</h3>
            <div className={styles.buttonRow}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </div>

          <div className={styles.showcaseItem}>
            <h3 className={styles.itemTitle}>Inputs</h3>
            <div className={styles.inputStack}>
              <Input label="Email" type="email" placeholder="name@routa.app" />
              <Input label="Password" type="password" placeholder="Enter your password" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Typography</h2>
        <div className={styles.typeScale}>
          <p className={styles.display}>Display 44 / Semibold</p>
          <p className={styles.h1}>Heading 1 36 / Semibold</p>
          <p className={styles.h2}>Heading 2 28 / Semibold</p>
          <p className={styles.h3}>Heading 3 22 / Medium</p>
          <p className={styles.bodyLarge}>Body Large 18 / Regular</p>
          <p className={styles.body}>Body 16 / Regular</p>
          <p className={styles.caption}>Caption 14 / Medium</p>
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Colors</h2>
        <div className={styles.colorGrid}>
          {colorTokens.map((token) => (
            <article key={token.label} className={styles.colorCard}>
              <div className={`${styles.swatch} ${token.swatchClass}`} />
              <div>
                <p className={styles.tokenName}>{token.label}</p>
                <p className={styles.tokenValue}>{token.value}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.sectionTitle}>Spacing</h2>
        <div className={styles.spacingStack}>
          {spacingTokens.map((space) => (
            <div key={space.label} className={styles.spacingRow}>
              <span className={styles.spacingLabel}>{space.label}</span>
              <div className={`${styles.spacingBar} ${space.className}`} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
