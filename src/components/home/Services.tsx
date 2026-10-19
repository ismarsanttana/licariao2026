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

          {/* Card 3: ILT */}
          <div id="ilt" className={styles.card}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>ILT - Índice Licarião de Transparência</h3>
            <p className={styles.cardDescription}>
              Ferramenta que avalia os portais de transparência de Câmaras e Prefeituras com base na LAI e na LRF. Analisa a publicidade, a atualização e a usabilidade das informações, calcula a NCT (Nota de Conformidade em Transparência), gera relatório em PDF e certificado, e acompanha a evolução de cada órgão entre uma avaliação e outra.
            </p>
            <a href="https://ilt-licariao.vercel.app/" className={styles.link} target="_blank" rel="noopener noreferrer">
              Conheça o ILT <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
