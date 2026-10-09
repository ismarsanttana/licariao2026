import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Nossa Estrutura | Hebert Licarião",
  description:
    "Conheça nossa infraestrutura física e digital de alta performance.",
  path: "/estrutura",
});

export default function EstruturaPage() {
  return (
    <main className={styles.mainContainer}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Nossa Estrutura</h1>
        <p className={styles.heroSubtitle}>
          Tecnologia de ponta e ambientes projetados para a excelência.
        </p>
      </section>

      {/* Resources Grid Section */}
      <section className={styles.resourcesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Recursos e Infraestrutura</h2>
        </div>

        <div className={styles.featureGrid}>
          {/* Card 1: Sede Própria */}
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="9" y1="22" x2="9" y2="22.01"></line>
                <line x1="15" y1="22" x2="15" y2="22.01"></line>
                <line x1="12" y1="18" x2="12" y2="18.01"></line>
                <line x1="12" y1="2" x2="12" y2="22"></line>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Sede Própria</h3>
            <p className={styles.cardText}>
              Escritório moderno e bem equipado para atender nossos clientes com
              excelência e conforto.
            </p>
          </div>

          {/* Card 2: Equipe Especializada */}
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Equipe Especializada</h3>
            <p className={styles.cardText}>
              Profissionais qualificados em gestão pública, tecnologia e
              consultoria jurídica.
            </p>
          </div>

          {/* Card 3: Estações de Trabalho */}
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Estações de Trabalho</h3>
            <p className={styles.cardText}>
              Equipamentos de última geração para desenvolvimento ágil e suporte
              técnico eficiente.
            </p>
          </div>

          {/* Card 4: Conectividade */}
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Conectividade</h3>
            <p className={styles.cardText}>
              Internet de alta velocidade e redundância para atendimento remoto
              sem interrupções.
            </p>
          </div>

          {/* Card 5: Segurança de Dados */}
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Segurança de Dados</h3>
            <p className={styles.cardText}>
              Infraestrutura segura com backups automáticos para proteção total
              das informações.
            </p>
          </div>

          {/* Card 6: Suporte Contínuo */}
          <div className={styles.featureCard}>
            <div className={styles.iconWrapper}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Suporte Contínuo</h3>
            <p className={styles.cardText}>
              Atendimento em horário comercial com equipe de suporte técnico
              dedicada e proativa.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <h2 className={styles.galleryTitle}>Conheça Nossas Instalações</h2>

          <div className={styles.mosaicContainer}>
            {/* Item 1 - Fachada */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/Fachada Nova 2026.jpeg"
                  alt="Fachada da Empresa - Licarião Assessoria e Consultoria"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Capacho Entrada */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/capacho-entrada.jpeg"
                  alt="Capacho de Entrada - Licarião"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Corredor com Salas */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/corredor-salas.jpeg"
                  alt="Corredor com Sala 02 e Sala 03"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Capacho Assessoria */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/capacho-assessoria.jpeg"
                  alt="Capacho Licarião Assessoria e Transparência"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Item 3 - Small */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/foto3.jpg"
                  alt="Sala de Reuniões"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>



            {/* Item 5 - Small */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/foto5.jpg"
                  alt="Atendimento"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Item 6 - Small */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/foto6.jpg"
                  alt="Estrutura Interna 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>



            {/* Item 8 - Small */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/foto8.jpg"
                  alt="Estrutura Interna 3"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Item 9 - Small */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/foto9.jpg"
                  alt="Estrutura Interna 4"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            {/* Item 10 - Sala de Reunião */}
            <div className={styles.mosaicItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/estrutura/Foto Interna.jpeg"
                  alt="Sala de Reunião"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
