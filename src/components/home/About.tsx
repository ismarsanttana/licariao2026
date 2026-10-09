import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Sobre</span>
          <h2 className={styles.title}>Hebert Licarião</h2>
          <p className={styles.text}>
            Contador, com anos de experiência dedicados à gestão pública, Hebert Licarião consolidou-se como referência na assessoria em transparência pública para órgãos públicos municipais. Sua atuação é orientada pela conformidade legal, pela responsabilidade na gestão dos recursos públicos e pela busca contínua e rígida eficiência administrativa.
          </p>
          <div className={styles.highlight}>
            <p>
              &ldquo;Compromisso com a transparência e responsabilidade na gestão dos recursos públicos.&rdquo;
            </p>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image src="/images/hebert-ceo-v2.jpg" alt="Hebert Licarião - CEO" fill sizes="(max-width: 768px) 100vw, 45vw" priority />
        </div>
      </div>
    </section>
  );
}
