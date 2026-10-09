import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = createPageMetadata({
  title: 'Quem Somos | Hebert Licarião',
  description: 'Conheça a história e a missão da Hebert Licarião Assessoria e Consultoria Pública.',
  path: '/quem-somos',
});

export default function QuemSomosPage() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Quem Somos</h1>
        <p className={styles.heroSubtitle}>
          Excelência e compromisso com a Transparência Pública.
        </p>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        {/* Text Column */}
        <div className={styles.textContent}>
          <div>
            <h2 className={styles.sectionTitle}>Nossa História</h2>
            <p className={styles.text}>
              A Hebert Licarião Assessoria e Consultoria Pública nasceu com o propósito de transformar a gestão pública através da transparência e da tecnologia. Com anos de experiência no setor, nossa equipe se dedica a oferecer soluções que garantem não apenas a conformidade legal, mas também a eficiência administrativa.
            </p>
          </div>
          
          <div>
            <h2 className={styles.sectionTitle}>Nossa Missão</h2>
            <p className={styles.text}>
              Empoderar gestores públicos com ferramentas e conhecimentos que facilitem a tomada de decisão e promovam uma administração clara e responsável. Acreditamos que a tecnologia é a chave para um serviço público mais ágil e transparente.
            </p>
          </div>

          <div>
            <h2 className={styles.sectionTitle}>Valores</h2>
            <p className={styles.text}>
              Ética, Inovação, Transparência e Compromisso com o Resultado. Esses são os pilares que sustentam cada projeto que abraçamos.
            </p>
          </div>
        </div>

        {/* Mosaic Column */}
        <div className={styles.mosaicContainer}>
          {/* Item 1 - CEO (Tall/Vertical - Stories format) */}
          <div className={`${styles.mosaicItem} ${styles.ceoItem}`}>
            <div className={styles.imagePlaceholder}>
              <Image src="/images/quem-somos/foto1.jpg" alt="Hebert Licarião - CEO" fill sizes="(max-width: 768px) 100vw, 40vw" priority />
            </div>
          </div>
          
          {/* Item 2 - Fachada */}
          <div className={styles.mosaicItem}>
            <div className={styles.imagePlaceholder}>
              <Image src="/images/quem-somos/foto2.jpg" alt="Sede Hebert Licarião Assessoria e Consultoria" fill sizes="(max-width: 768px) 100vw, 30vw" />
            </div>
          </div>
          
          {/* Item 3 - Logo */}
          <div className={`${styles.mosaicItem} ${styles.logoItem}`}>
            <div className={styles.imagePlaceholder}>
              <Image src="/images/quem-somos/foto3.jpg" alt="Logo Hebert Licarião Assessoria e Transparência" fill sizes="(max-width: 768px) 100vw, 30vw" style={{ objectFit: 'contain', padding: '1rem' }} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
