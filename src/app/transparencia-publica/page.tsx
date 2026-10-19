import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EventCarousel from '@/components/ui/EventCarousel';
import { createPageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

const eventImages = Array.from({ length: 29 }, (_, i) =>
  `/images/transparencia/evento-${String(i + 1).padStart(2, '0')}.jpeg`
);

// Per-image object-position based on visual analysis of face/content placement
const imagePositions: Record<string, string> = {
  // Vertical portrait photos (person standing, face in upper third)
  '/images/transparencia/evento-01.jpeg': 'center 15%',  // pessoa em pé, rosto no terço superior
  '/images/transparencia/evento-08.jpeg': 'center 35%',  // apresentação em plenário, rosto do apresentador no centro
  '/images/transparencia/evento-12.jpeg': 'center 15%',  // pessoa em pé solo, Tribunal de Contas
  '/images/transparencia/evento-13.jpeg': 'center 15%',  // duas pessoas em pé, certificado
  '/images/transparencia/evento-17.jpeg': 'center 25%',  // apresentação em pé com projetor
  '/images/transparencia/evento-20.jpeg': 'center 45%',  // duas pessoas frente Câmara Municipal, rostos abaixo da fachada
  '/images/transparencia/evento-21.jpeg': 'center 15%',  // reunião escritório sentados
  '/images/transparencia/evento-24.jpeg': 'center 30%',  // close-up sentado, rosto bem centralizado
  '/images/transparencia/evento-29.jpeg': 'center 25%',  // pessoa sentada com tablet
  // Horizontal group photos (people standing, faces near top 20%)
  '/images/transparencia/evento-03.jpeg': 'center 15%',  // 3 pessoas em pé, Instagram post
  '/images/transparencia/evento-07.jpeg': 'center 15%',  // 5 pessoas em pé, evento
  '/images/transparencia/evento-09.jpeg': 'center 15%',  // 3 pessoas em pé, plenário
  '/images/transparencia/evento-10.jpeg': 'center 20%',  // 3 pessoas entregando certificado
  '/images/transparencia/evento-11.jpeg': 'center 15%',  // 2 pessoas frente Tribunal de Contas
  '/images/transparencia/evento-14.jpeg': 'center 15%',  // 2 pessoas com certificado frente TCE
  '/images/transparencia/evento-15.jpeg': 'center 15%',  // 2 pessoas frente TCE
  '/images/transparencia/evento-16.jpeg': 'center 15%',  // 2 pessoas com certificado
  '/images/transparencia/evento-19.jpeg': 'center 20%',  // homem discursando em evento
  '/images/transparencia/evento-22.jpeg': 'center 20%',  // 4 pessoas em pé, evento
  '/images/transparencia/evento-23.jpeg': 'center 15%',  // 5 pessoas em pé, escritório
  '/images/transparencia/evento-25.jpeg': 'center 15%',  // 2 pessoas Tribunal de Contas
  '/images/transparencia/evento-26.jpeg': 'center 20%',  // 9 pessoas em pé sala
  // Seated/meeting photos (content centered)
  '/images/transparencia/evento-02.jpeg': 'center 25%',  // 3 pessoas sentadas com laptop
  '/images/transparencia/evento-05.jpeg': 'center 30%',  // selfie grupo reunião
  '/images/transparencia/evento-27.jpeg': 'center 20%',  // 2 pessoas escritório Licarião
  '/images/transparencia/evento-28.jpeg': 'center 20%',  // 2 pessoas escritório reunião
  // Presentation/panoramic photos (content distributed)
  '/images/transparencia/evento-04.jpeg': 'center 30%',  // palestra sala com plateia
  '/images/transparencia/evento-06.jpeg': 'center',       // apresentação slides horizontal
  '/images/transparencia/evento-18.jpeg': 'center 20%',  // grupo grande CONFEP
};

export const metadata = createPageMetadata({
  title: 'Transparência Pública - Hebert Licarião',
  description:
    'Assessoria especializada em transparência pública. Estruturamos, orientamos e acompanhamos órgãos públicos para alcançar altos índices de transparência.',
  path: '/transparencia-publica',
});

export default function TransparenciaPublicaPage() {
  return (
    <main className={styles.mainContainer}>
      <Header />

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Soluções</span>
          <h1 className={styles.heroTitle}>
            Transparência<br />
            <span>Pública</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Nosso trabalho vai além da publicação de dados: estruturamos, orientamos e acompanhamos os órgãos públicos para alcançar altos índices de transparência, selos de qualidade e segurança institucional.
          </p>
        </div>
      </section>

      {/* 2. Por que a Licarião faz a diferença? */}
      <section className={styles.differentialSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Por que a Licarião faz a diferença?
            </h2>
          </div>

          <div className={styles.differentialGrid}>
            <div className={styles.differentialCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Método próprio de transparência</h3>
              <p className={styles.cardDesc}>
                Diagnóstico, planejamento, execução assistida e monitoramento contínuo.
              </p>
            </div>

            <div className={styles.differentialCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Foco em órgãos de controle</h3>
              <p className={styles.cardDesc}>
                Adequação direta à LAI, LGPD, Tribunais de Contas e normativos correlatos.
              </p>
            </div>

            <div className={styles.differentialCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Resultados comprovados</h3>
              <p className={styles.cardDesc}>
                Elevação de índices e conquista de selos institucionais.
              </p>
            </div>

            <div className={styles.differentialCard}>
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Consultoria + Tecnologia</h3>
              <p className={styles.cardDesc}>
                Assessoria técnica integrada à inteligência artificial aplicada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Eventos */}
      <EventCarousel
        images={eventImages}
        imagePositions={imagePositions}
        title="Eventos, parceiros e premiações"
        subtitle="Registros de participações em eventos, premiações e entregas de selos de transparência por todo o Brasil."
        moreLink={{ href: '/transparencia-publica/fotos', label: 'Mostrar todas as fotos' }}
      />

      {/* Case de Sucesso / Presença */}
      <section className={styles.caseSection}>
        <div className={styles.container}>
          <div className={styles.caseContent}>
            <p className={styles.caseText}>
              A <strong>Licarião Assessoria e Transparência</strong> já atua em diferentes regiões do
              país, com presença consolidada na <strong>Paraíba, Pernambuco, Rio Grande do
              Norte, Rondônia e Ceará</strong>, posicionando-se como parceira estratégica de
              gestões públicas que querem elevar o padrão, a credibilidade e a
              confiança institucional.
            </p>
            <p className={styles.caseText}>
              Com atuação orientada pelas recomendações dos órgãos de
              fiscalização, como o Ministério Público/MP e os Tribunais de Contas: a
              empresa organiza as exigências técnicas, entregando resultados
              concretos de transparência.
            </p>
            <div className={styles.caseHighlight}>
              <p>
                Foi assim que as Câmaras Municipais de <strong>Sumé/PB</strong> e <strong>Barra de Santa
                Rosa/PB</strong> alcançaram o nível <strong>Diamante</strong> pela primeira vez. Um feito
                inédito na Paraíba desde a criação do PNTP em 2022. Até a edição de
                2025, <strong>nenhuma câmara municipal atingiu o mais alto reconhecimento
                com tanto êxito, vindo a ser um case de destaque nacional</strong> no evento
                de divulgação dos selos nacionais, realizado pela ATRICON.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Assessoria Especializada */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesLayout}>
            <div className={styles.servicesInfo}>
              <h2 className={styles.servicesTitle}>
                Assessoria Especializada em<br />
                <span>Transparência Pública</span>
              </h2>
            </div>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceBullet}></div>
                <p>Adequação à Lei de Acesso à Informação (LAI)</p>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceBullet}></div>
                <p>Organização e estruturação do Portal da Transparência</p>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceBullet}></div>
                <p>Monitoramento contínuo dos critérios dos TCEs</p>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceBullet}></div>
                <p>Padronização de publicações institucionais</p>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceBullet}></div>
                <p>Relatórios técnicos e evidências documentais</p>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceBullet}></div>
                <p>Orientação técnica para gestores e servidores</p>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceBullet}></div>
                <p>Suporte em auditorias e fiscalizações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Resultados */}
      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <div className={styles.resultsLayout}>
            <div className={styles.resultsInfo}>
              <h2 className={styles.resultsTitle}>
                Resultados que fortalecem a gestão pública
              </h2>
            </div>
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.resultIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Elevação significativa dos índices de transparência</p>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Conquista de selos e certificações</p>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Redução de apontamentos dos órgãos de controle</p>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Fortalecimento da imagem institucional</p>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.resultIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p>Maior confiança da população</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 7. Metodologia */}
      <section className={styles.methodSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.methodTitle}>
              Metodologia de Transparência Pública
            </h2>
          </div>

          <div className={styles.methodGrid}>
            <div className={styles.methodStep}>
              <span className={styles.stepNumber}>01</span>
              <div>
                <h3 className={styles.stepTitle}>Diagnóstico Técnico</h3>
                <p className={styles.stepDesc}>Análise normativa e avaliação do portal</p>
              </div>
            </div>

            <div className={styles.methodStep}>
              <span className={styles.stepNumber}>02</span>
              <div>
                <h3 className={styles.stepTitle}>Planejamento Estratégico</h3>
                <p className={styles.stepDesc}>Plano de ação conforme riscos e prioridades</p>
              </div>
            </div>

            <div className={styles.methodStep}>
              <span className={styles.stepNumber}>03</span>
              <div>
                <h3 className={styles.stepTitle}>Execução Assistida</h3>
                <p className={styles.stepDesc}>Adequações práticas e orientação contínua</p>
              </div>
            </div>

            <div className={styles.methodStep}>
              <span className={styles.stepNumber}>04</span>
              <div>
                <h3 className={styles.stepTitle}>Monitoramento e Evidências</h3>
                <p className={styles.stepDesc}>Indicadores, relatórios e comprovação técnica</p>
              </div>
            </div>

            <div className={styles.methodStep}>
              <span className={styles.stepNumber}>05</span>
              <div>
                <h3 className={styles.stepTitle}>Resultado Institucional</h3>
                <p className={styles.stepDesc}>Índices elevados, selos e segurança para o gestor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Eleve a transparência da sua gestão.
          </h2>
          <p className={styles.ctaText}>
            Entre em contato e descubra como podemos ajudar o seu município a alcançar os melhores índices.
          </p>
          <Link href="#contato" className={styles.btnPrimary}>
            Fale Conosco
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
