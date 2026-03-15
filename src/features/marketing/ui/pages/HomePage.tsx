import style from './HomePage.module.css'
import NavBar from '../components/Navbar.component'
import Button from '../components/Button.component'
import FAQ from '../components/FAQ.component'

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* Hero */}
      <div className={style.hero}>
        <div className={style['hero-inner']}>
          <div>
            <h1>
              Stop Searching. <span>Start Learning.</span>
            </h1>
            <div>
              Buat peta jalan belajar (learning roadmap) pribadi yang disesuaikan dengan tujuan
              karier dan tingkat pengalamanmu. Didukung oleh AI & video pilihan.
            </div>
            <div className={style['hero-input']}>
              <input type="text" placeholder="Apa yang ingin kamu pelajari?" />
              <Button variant="primary">Generate Roadmap✨</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <section>
        <div className={style['section-inner']}>
          <div className={style['section-title']}>
            <p>Bagaimana Cara Kerja</p>
            <h2>Jalur belajarmu dalam 3 langkah</h2>
          </div>
          <div className={style.steps}>
            <div className={style.card}>
              <img
                className={style.icon}
                src="../../../../../icon-1.webp"
                alt="Beritahu kami profilmu untuk menyesuaikan jalur belajar."
              />
              <h4>01 Atur Profilmu</h4>
              <p>Beritahu kami profilmu untuk menyesuaikan jalur belajar.</p>
            </div>
            <div className={style.card}>
              <img
                className={style.icon}
                src="../../../../../icon-2.webp"
                alt="Dapatkan roadmap dari konten terbaik YouTube & TikTok."
              />
              <h4>02 Kurasi Ajaib</h4>
              <p>Dapatkan roadmap dari konten terbaik YouTube & TikTok.</p>
            </div>
            <div className={style.card}>
              <img
                className={style.icon}
                src="../../../../../icon-3.webp"
                alt="Tonton dan pelajari setiap tahap secara terstruktur."
              />
              <h4>03 Mulai Belajar</h4>
              <p>Tonton dan pelajari setiap tahap secara terstruktur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={style.featuresSection}>
        <h2 className={style['section-title']}>Fitur Utama</h2>
        <div className={`${style['section-inner']} ${style.features}`}>
          <div className={style.feature}>
            <div className={style['feature-text']}>
              <p>
                <strong>01</strong>
                <br />
                <strong>Bukan sekadar daftar biasa</strong>
                <br />
                AI membantu roadmap belajar relevan dan terarah.
              </p>
            </div>
            {/* <div className={style['feature-images']}>
              <img
                src="../../../../../fitur-utama-1.webp"
                className={style['placeholder-img']}
                alt="AI membantu roadmap belajar relevan dan terarah."
              />
            </div> */}
          </div>
          <div className={`${style.feature} ${style.reverse}`}>
            <div>
              <p>
                <strong>02 Konten terbaik, teragregasi</strong>
                <br />
                Video relevan dari YouTube dan TikTok dikumpulkan di satu tempat.
              </p>
            </div>
            <div>
              <p>
                <strong>03 Pantau progres sesuai caramu</strong>
                <br />
                Pantau kemajuanmu selangkah demi selangkah dan ekspor jalur belajarmu ke format PDF.
              </p>
            </div>
            {/* <div className={style['feature-images']}>
              <img
                src="../../../../../fitur-utama-2.webp"
                className={style['placeholder-img']}
                alt="Pantau kemajuanmu selangkah demi selangkah dan ekspor jalur belajarmu ke format PDF."
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className={`${style['section-inner']} ${style['faq-section']}`}>
          <div className={style['faq-label']}>Frequently Asked Question</div>
          <FAQ />
        </div>
      </section>

      {/* Pricing */}
      <section>
        <div className={style['section-inner']}>
          <div className={style['section-title']}>
            <h2>Harga</h2>
          </div>
          <div className={style.pricing}>
            <div className={style['price-card']}>
              <h3>Free</h3>
              <ul>
                <li>✓ 1 roadmap / bulan</li>
                <li>✓ Akses ke topik</li>
                <li>✓ Pantau progres</li>
              </ul>
              <Button variant="outline">Mulai Gratis</Button>
            </div>

            <div className={`${style['price-card']} ${style.pro}`}>
              <div className={style.badge}>POPULAR</div>
              <h3>Pro</h3>
              <ul>
                <li>✓ 2 roadmap / bulan</li>
                <li>✓ Semua topik</li>
                <li>✓ Pantau progres</li>
                <li>✓ Dukungan dasar</li>
              </ul>
              <Button variant="primary">Upgrade ke Pro</Button>
            </div>

            <div className={style['price-card']}>
              <h3>Team</h3>
              <ul>
                <li>✓ 5 roadmap / bulan</li>
                <li>✓ Analitik anggota</li>
                <li>✓ Dukungan prioritas</li>
              </ul>
              <Button variant="outline">Kontak Kami</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className={style['footer-inner']}>
          <div>
            <strong>Routa</strong>
            <p>Menghubungkan kekuatan pembelajaran menjadi nilai nyata.</p>
          </div>
          <div>
            <strong>Produk</strong>
            <br />
            Fitur
            <br />
            Harga
          </div>
          <div>
            <strong>Perusahaan</strong>
            <br />
            Tentang Kami
            <br />
            Kontak
          </div>
          <div>
            <strong>Hukum</strong>
            <br />
            Privasi
            <br />
            Syarat & Ketentuan
          </div>
        </div>
        <div className={style.copyright}>© 2026 Routa AI. All rights reserved.</div>
      </footer>
    </>
  )
}
