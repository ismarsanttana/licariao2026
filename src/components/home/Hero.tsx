import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <span className={styles.label}>Referência em Gestão Pública</span>
          <h1 className={styles.title}>
            Excelência em <br /> Transparência Pública
          </h1>
          <p className={styles.subtitle}>
            Soluções especializadas para elevação da transparência de órgãos públicos, aliadas à tecnologia avançada da IA Horus. 
            Transformamos dados públicos em informação clara, acessível e eficiente, fortalecendo a gestão institucional.
          </p>
          
          <div className={styles.actions}>
            <Link href="#servicos" className={styles.primaryBtn}>
              Conheça Nossos Serviços
            </Link>
            <Link href="#contato" className={styles.secondaryBtn}>
              Fale Conosco
            </Link>
          </div>
        </div>

        <div className={styles.contentRight}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero-avatar-3d.jpg"
              alt="Consultor Hebert Licarião 3D"
              width={682}
              height={1024}
              sizes="(max-width: 768px) 300px, 40vw"
              priority
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.scrollDown}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ color: '#314E86' }} 
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
