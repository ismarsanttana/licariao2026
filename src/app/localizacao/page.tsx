import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = createPageMetadata({
  title: 'Localização - Hebert Licarião',
  description: 'Visite nosso escritório em Soledade - PB. Endereço e mapa de localização.',
  path: '/localizacao',
});

export default function Localizacao() {
  return (
    <main>
      <Header />
      
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoColumn}>
            <h1 className={styles.title}>Onde Estamos</h1>
            <div className={styles.addressBlock}>
              <p>Av. Ministro José Américo de Almeida, 116</p>
              <p>Centro, Soledade - PB</p>
              <p>CEP: 58.155-000</p>
            </div>
          </div>

          <div className={styles.mapColumn}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.247963383049!2d-36.3688!3d-7.0592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDMnMzMuMSJTIDM2wrAyMicyMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
              className={styles.mapFrame}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
