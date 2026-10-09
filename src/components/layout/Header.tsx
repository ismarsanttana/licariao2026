'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setOpenSub(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSub(null);
  };

  const toggleSub = (name: string) => {
    setOpenSub(openSub === name ? null : name);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          LICARIÃO
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Início
          </Link>

          <div className={styles.dropdownContainer}>
            <span className={styles.link}>Sobre</span>
            <div className={styles.dropdownMenu}>
              <Link href="/quem-somos" className={styles.dropdownItem}>
                Quem Somos
              </Link>
              <Link href="/estrutura" className={styles.dropdownItem}>
                Estrutura
              </Link>
            </div>
          </div>

          <div className={styles.dropdownContainer}>
            <span className={styles.link}>Soluções</span>
            <div className={styles.dropdownMenu}>
              <Link href="/transparencia-publica" className={styles.dropdownItem}>
                Transparência Pública
              </Link>
              <Link href="/horus" className={styles.dropdownItem}>
                Hórus
              </Link>
            </div>
          </div>

          <Link href="/trabalhe-conosco" className={styles.link}>
            Trabalhe Conosco
          </Link>

          <Link href="/localizacao" className={styles.link}>
            Localização
          </Link>

          <Link href="#contato" className={`${styles.link} ${styles.cta}`}>
            Contato
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>
          Início
        </Link>

        {/* Sobre accordion */}
        <div className={styles.mobileDropdown}>
          <button className={styles.mobileDropdownBtn} onClick={() => toggleSub('sobre')}>
            Sobre
            <span className={`${styles.chevron} ${openSub === 'sobre' ? styles.chevronOpen : ''}`}>›</span>
          </button>
          <div className={`${styles.mobileSubMenu} ${openSub === 'sobre' ? styles.mobileSubMenuOpen : ''}`}>
            <Link href="/quem-somos" className={styles.mobileSubLink} onClick={closeMenu}>
              Quem Somos
            </Link>
            <Link href="/estrutura" className={styles.mobileSubLink} onClick={closeMenu}>
              Estrutura
            </Link>
          </div>
        </div>

        {/* Soluções accordion */}
        <div className={styles.mobileDropdown}>
          <button className={styles.mobileDropdownBtn} onClick={() => toggleSub('solucoes')}>
            Soluções
            <span className={`${styles.chevron} ${openSub === 'solucoes' ? styles.chevronOpen : ''}`}>›</span>
          </button>
          <div className={`${styles.mobileSubMenu} ${openSub === 'solucoes' ? styles.mobileSubMenuOpen : ''}`}>
            <Link href="/transparencia-publica" className={styles.mobileSubLink} onClick={closeMenu}>
              Transparência Pública
            </Link>
            <Link href="/horus" className={styles.mobileSubLink} onClick={closeMenu}>
              Hórus
            </Link>
          </div>
        </div>

        <Link href="/trabalhe-conosco" className={styles.mobileLink} onClick={closeMenu}>
          Trabalhe Conosco
        </Link>

        <Link href="/localizacao" className={styles.mobileLink} onClick={closeMenu}>
          Localização
        </Link>

        <Link href="#contato" className={styles.mobileCta} onClick={closeMenu}>
          Contato
        </Link>
      </nav>
    </header>
  );
}
