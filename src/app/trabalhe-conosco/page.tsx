import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = createPageMetadata({
  title: 'Trabalhe Conosco - Hebert Licarião',
  description: 'Faça parte da nossa equipe. Envie seu currículo e venha transformar a gestão pública.',
  path: '/trabalhe-conosco',
});

export default function TrabalheConosco() {
  return (
    <main>
      <Header />
      
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Trabalhe Conosco</h1>
          <p className={styles.description}>
            Estamos sempre em busca de talentos que compartilhem do nosso compromisso com a excelência e a transparência pública. Se você deseja fazer a diferença, queremos conhecer você.
          </p>
          
          <div className={styles.emailCard}>
            <span className={styles.emailLabel}>Envie seu currículo para:</span>
            <a href="mailto:licariaotransparencia@gmail.com" className={styles.emailLink}>
              licariaotransparencia@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
