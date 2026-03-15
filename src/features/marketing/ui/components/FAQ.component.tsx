import { useState } from 'react'
import styles from './FAQ.module.css'

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Apa itu Routa?',
    answer:
      'Routa adalah platform belajar berbasis AI yang membantu kamu membangun roadmap personal dari tujuan karier, level pengalaman, dan materi video yang relevan.',
  },
  {
    question: 'Bagaimana cara belajar di Routa?',
    answer:
      'Buka potensi puncakmu hanya dengan 30 ribu. Dapatkan akses penuh ke ekosistem generasi baru Routa. Pilih Class-mu—Code Wizard, Design Rogue, atau Data Paladin—dan mulai evolusimu dengan sistem bimbingan canggih kami. Tanpa batasan, hanya pertumbuhan murni.',
  },
  {
    question: 'Kenapa harus di Routa',
    answer:
      'Karena setiap jalur belajar disusun agar tetap fokus, terukur, dan relevan dengan targetmu, jadi kamu tidak perlu membuang waktu memilah materi sendiri.',
  },
  {
    question: 'Apakah Ada Garansinya?',
    answer:
      'Kami menjamin pengalaman belajar yang terstruktur dan transparan. Jika roadmap atau materi tidak sesuai akses paketmu, tim kami akan membantu penyesuaian yang diperlukan.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1)

  const toggleItem = (index: number) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.stack}>
          {faqItems.map((item, index) => {
            const isExpanded = activeIndex === index
            const contentId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <article
                key={item.question}
                className={`${styles.item} ${isExpanded ? styles.itemExpanded : ''}`}
              >
                <h2 className={styles.heading}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isExpanded}
                    aria-controls={contentId}
                    onClick={() => toggleItem(index)}
                  >
                    <span className={styles.question}>{item.question}</span>
                    <span
                      className={`${styles.icon} ${isExpanded ? styles.iconExpanded : ''}`}
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                      >
                        <path
                          d="M0.850586 12.7609L6.80569 6.80584L0.850586 0.850729"
                          stroke="currentColor"
                          strokeWidth="1.70146"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>

                {isExpanded ? (
                  <div
                    id={contentId}
                    className={styles.content}
                    role="region"
                    aria-labelledby={buttonId}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
