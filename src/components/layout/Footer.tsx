import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              Hebert <span>Licarião</span>
            </Link>
            <p className={styles.legalName}>Licarião Assessoria e Consultoria Pública</p>
            <p className={styles.tagline}>Referência em Transparência Pública, Gestão Institucional e Inovação Tecnológica.</p>
            <p className={styles.cnpj}>CNPJ: 46.816.125/0001-95</p>
          </div>

          {/* Contact Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contatos</h3>
            <div className={styles.contactItem}>
              <span className={styles.label}>E-mails</span>
              <a href="mailto:licariaotransparencia@gmail.com" className={styles.link}>
                licariaotransparencia@gmail.com
              </a>
              <a href="mailto:suportelicariao@gmail.com" className={styles.link}>
                suportelicariao@gmail.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.label}>Telefone / WhatsApp</span>
              <p>(83) 99992-7301</p>
              <p>(83) 98160-3324</p>
            </div>
            
            <div className={styles.qrWrapper}>
              <span className={styles.label}>Atendimento via WhatsApp</span>
              <div className={styles.qrContainer}>
                <Image
                  src="/images/whatsapp-qr.jpg"
                  alt="QR Code para atendimento via WhatsApp"
                  width={370}
                  height={370}
                  sizes="120px"
                  className={styles.qrImage}
                />
              </div>
            </div>
          </div>

          {/* Address Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Endereço</h3>
            <address className={styles.address}>
              <p>Av. Ministro José Américo de Almeida, nº 116, 1°andar</p>
              <p>Centro – Soledade/PB</p>
              <p>CEP: 58.155-000</p>
            </address>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Licarião Assessoria e Consultoria Pública. Todos os direitos reservados.</p>
          <p className={styles.developedBy}>Desenvolvido por <a href="https://urbanbyte.com.br/" target="_blank" rel="noopener" className={styles.urbanByteLink}>URBAN BYTE</a></p>
        </div>
      </div>
    </footer>
  );
}
