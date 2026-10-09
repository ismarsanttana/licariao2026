import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { createPageMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = createPageMetadata({
  title: 'HÓRUS - Inteligência Artificial para Transparência Pública',
  description:
    'Um canal de comunicação direto entre o órgão público e o cidadão, dando mais transparência à gestão através de Inteligência Artificial.',
  path: '/horus',
});

export default function HorusPage() {
  return (
    <main className={styles.mainContainer}>
      <Header />

      {/* 1. Immersive Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Plataforma de Inteligência</span>
          <h1 className={styles.heroTitle}>
            Inteligência <span>Artificial</span><br />
            para Transparência Pública
          </h1>
          <p className={styles.heroSubtitle}>
            Um canal de comunicação direto entre o órgão público e o cidadão,
            dando mais transparência à gestão.
          </p>
          <div className={styles.heroButtons}>
            <Link href="#contato" className={styles.btnPrimary}>
              Quero Conhecer o HÓRUS
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Canal Direto com o Cidadão */}
      <section className={styles.channelSection}>
        <div className={styles.container}>
          <div className={styles.channelLayout}>
            <div className={styles.channelInfo}>
              <h2 className={styles.sectionTitle}>
                Tenha um canal direto de <span className={styles.highlight}>comunicação</span> com o cidadão
              </h2>
              <p className={styles.sectionText}>
                Aumente a transparência do seu órgão com uma inteligência artificial generativa
                conversacional, que através de um chat de acesso livre, dá direito para que
                o cidadão possa checar as informações sobre a gestão pública.
              </p>
            </div>
            <div className={styles.channelVisual}>
              <div className={styles.deviceMockup}>
                <div className={styles.chatBubble}>
                  <span className={styles.chatLabel}>Cidadão</span>
                  <p>&quot;Quanto foi investido em educação este mês?&quot;</p>
                </div>
                <div className={`${styles.chatBubble} ${styles.chatResponse}`}>
                  <span className={styles.chatLabel}>HÓRUS</span>
                  <p>O investimento em educação no mês atual foi de R$ 1.250.000,00, representando 28% do orçamento total.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Publicidade de Informações */}
      <section className={styles.publicitySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Dê mais publicidade às informações de interesse público
            </h2>
            <p className={styles.sectionText}>
              O Hórus foi desenvolvido para atender às demandas de Câmaras Municipais,
              Prefeituras, Secretarias, Institutos de Previdência, Consórcios Públicos e
              demais entidades da administração pública. Por meio de uma Inteligência Artificial
              Generativa Conversacional, o sistema transforma dados públicos em respostas claras,
              acessíveis e disponíveis 24 horas por dia.
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className={styles.benefitTitle}>Transparência Institucional</h3>
              <p className={styles.benefitDesc}>
                Fortalece a transparência e amplia o acesso à informação.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className={styles.benefitTitle}>Disponível 24h</h3>
              <p className={styles.benefitDesc}>
                Respostas claras e acessíveis a qualquer hora do dia.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className={styles.benefitTitle}>Inovação e Modernização</h3>
              <p className={styles.benefitDesc}>
                Posiciona a gestão como referência em modernização administrativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Para quem é (Servidor + Cidadão + Ouvidoria) */}
      <section className={styles.audienceSection}>
        <div className={styles.container}>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <div className={styles.audienceIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className={styles.audienceTitle}>Para o Cidadão</h3>
              <p className={styles.audienceDesc}>
                Acesse informações sobre gastos, investimentos e ações públicas de forma
                simples e direta, através de um chat conversacional.
              </p>
            </div>

            <div className={styles.audienceCard}>
              <div className={styles.audienceIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className={styles.audienceTitle}>Apoio ao Servidor Público</h3>
              <p className={styles.audienceDesc}>
                Disponibilize mais informações para que o servidor público fique por dentro
                de seus direitos e deveres dentro da gestão.
              </p>
            </div>

            <div className={styles.audienceCard}>
              <div className={styles.audienceIconWrap}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 className={styles.audienceTitle}>Ouvidoria e e-SIC</h3>
              <p className={styles.audienceDesc}>
                Disponibilize informações de ações públicas no município e auxilie o cidadão no
                envio de solicitações, sugestões ou críticas à Ouvidoria e e-SIC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Painel de Controle e Monitoramento */}
      <section className={styles.panelSection}>
        <div className={styles.container}>
          <div className={styles.panelLayout}>
            <div className={styles.panelInfo}>
              <h2 className={styles.panelTitle}>Painel Completo de Controle e Monitoramento</h2>
              <p className={styles.panelText}>
                Cada usuário possui login e senha individuais, garantindo acesso seguro e
                autonomia para acompanhar e publicar documentos conforme sua competência.
              </p>
              <ul className={styles.panelList}>
                <li>Total de acessos realizados na plataforma</li>
                <li>Quantidade de mensagens registradas</li>
                <li>Principais assuntos demandados (despesas, folha de pagamento, vereadores, licitações etc.)</li>
                <li>Relatórios de usabilidade e desempenho</li>
                <li>Publicação e atualização de documentos oficiais</li>
                <li>Funcionalidades completas de gestão e acompanhamento</li>
              </ul>
            </div>
            <div className={styles.panelVisual}>
              <Image
                src="/images/horus-dashboard-v3.png"
                alt="Interface do Dashboard Horus"
                width={1200}
                height={750}
                className={styles.dashboardImage}
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Chat Interno de Suporte */}
      <section className={styles.supportSection}>
        <div className={styles.container}>
          <div className={styles.supportLayout}>
            <div className={styles.supportVisual}>
              <div className={styles.chatMockup}>
                <div className={styles.chatHeader}>
                  <div className={styles.chatDot}></div>
                  <span>Suporte HÓRUS</span>
                </div>
                <div className={styles.chatMessages}>
                  <div className={styles.msgUser}>Preciso atualizar os documentos de licitações.</div>
                  <div className={styles.msgSupport}>Claro! Vou te orientar passo a passo. Em qual seção do painel você está?</div>
                </div>
              </div>
            </div>
            <div className={styles.supportInfo}>
              <h2 className={styles.sectionTitle}>Chat Interno Exclusivo</h2>
              <p className={styles.sectionText}>
                O HÓRUS possui um chat interno exclusivo que permite ao usuário comunicar-se
                diretamente com nossa equipe de suporte e com a diretoria administrativa,
                possibilitando o envio de solicitações, esclarecimento de dúvidas,
                encaminhamento de questionamentos e solicitação de ajustes ou melhorias.
              </p>
              <p className={styles.supportHighlight}>
                Garantindo atendimento ágil, acompanhamento transparente das demandas e
                suporte contínuo durante toda a utilização da plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Perfil Personalizável e Relatórios */}
      <section className={styles.profileSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Perfil Personalizável e Controle de Relatórios
            </h2>
          </div>

          <div className={styles.profileGrid}>
            <div className={styles.profileCard}>
              <div className={styles.profileIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <h3 className={styles.profileCardTitle}>Personalização Visual</h3>
              <p className={styles.profileCardDesc}>
                Gestores e colaboradores podem editar seus perfis, adicionando imagem,
                informações e personalizando as cores da tela principal com gradientes
                e diferentes tons.
              </p>
            </div>

            <div className={styles.profileCard}>
              <div className={styles.profileIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <h3 className={styles.profileCardTitle}>Controle de Relatórios</h3>
              <p className={styles.profileCardDesc}>
                O gestor possui controle exclusivo sobre a geração de relatórios de
                usabilidade do site, podendo personalizá-los e escolher entre diversos
                layouts: clássico, moderno, minimalista, corporativo, gradiente e dark mode.
              </p>
            </div>

            <div className={styles.profileCard}>
              <div className={styles.profileIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>
              </div>
              <h3 className={styles.profileCardTitle}>QR Code de Autenticidade</h3>
              <p className={styles.profileCardDesc}>
                Relatórios contam com QR Code para garantir a autenticidade do documento,
                trazendo mais segurança e confiabilidade para a gestão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Transforme a comunicação<br />do seu órgão público.
          </h2>
          <p className={styles.ctaText}>
            Entre em contato e descubra como o HÓRUS pode modernizar a transparência da sua gestão.
          </p>
          <Link href="#contato" className={styles.btnPrimary} style={{ background: 'white', color: '#0f172a' }}>
            Quero Conhecer o HÓRUS
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
