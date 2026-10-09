import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossas Soluções</h2>
          <p className={styles.subtitle}>
            Oferecemos expertise técnica e soluções avançadas para fortalecer a transparência, a conformidade legal e a gestão pública.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Assessoria */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Assessoria em Transparência Pública</h3>
            <p className={styles.cardDescription}>
              Assessoria técnica especializada, com foco no cumprimento da Lei de Acesso à Informação, da Lei de Responsabilidade Fiscal e das exigências dos órgãos de controle. Atuamos para garantir a transparência ativa, passiva e organização das informações institucionais.
            </p>
            <Link href="/transparencia-publica" className={styles.link}>
              Saiba mais <span>→</span>
            </Link>
          </div>

          {/* Card 2: Horus */}
          <div id="horus" className={styles.card}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Sistema Horus</h3>
            <p className={styles.cardDescription}>
              Inteligência Artificial Generativa, com capacidade de responder, em linguagem natural, dúvidas institucionais, fiscais, financeiras e orçamentárias com base nos dados oficiais do próprio órgão. Facilitando o acesso à informação e fortalece a comunicação com o cidadão e os órgãos de controle.
            </p>
            <Link href="/horus" className={styles.link}>
              Conheça o Horus <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
