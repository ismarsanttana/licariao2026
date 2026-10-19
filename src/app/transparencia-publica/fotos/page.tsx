import fs from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PhotoGallery from '@/components/ui/PhotoGallery';
import { createPageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = createPageMetadata({
  title: 'Eventos, parceiros e premiações - Hebert Licarião',
  description:
    'Todas as fotos de participações em eventos, premiações e entregas de selos de transparência.',
  path: '/transparencia-publica/fotos',
});

// Every image saved in public/images/transparencia, read when the site is built
function getEventImages() {
  const dir = path.join(process.cwd(), 'public', 'images', 'transparencia');
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }))
    .map((file) => `/images/transparencia/${file}`);
}

export default function FotosTransparenciaPage() {
  const images = getEventImages();

  return (
    <main className={styles.mainContainer}>
      <Header />

      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <Link href="/transparencia-publica" className={styles.backLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Voltar para Transparência Pública
          </Link>

          <div className={styles.header}>
            <h1 className={styles.title}>Eventos, parceiros e premiações</h1>
            <p className={styles.subtitle}>
              Registros de participações em eventos, premiações e entregas de selos de transparência por todo o Brasil.
            </p>
          </div>

          <PhotoGallery images={images} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
