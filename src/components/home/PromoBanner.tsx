'use client';

import { useRef, useState } from 'react';
import styles from './PromoBanner.module.css';

// Banner rotativo do topo do hero.
// Troca sozinho quando a barra de progresso termina (tempo em --banner-tempo, no CSS),
// pausa com o mouse em cima, setas e pontinhos trocam na hora e no celular dá para arrastar.
const slides = [
  {
    variant: styles.slideHorus,
    logo: '/images/logo-horus.jpg',
    logoAlt: 'Logo do Sistema Hórus',
    tag: 'Disponível 24h',
    highlight: 'HÓRUS',
    title: 'IA para Transparência Pública',
    description:
      'Chat com inteligência artificial que responde ao cidadão sobre gastos, investimentos e ações da gestão, com informações claras a qualquer hora do dia.',
    href: 'https://licariao.com.br/horus',
    ariaLabel: 'Conhecer o Sistema Hórus',
  },
  {
    variant: styles.slideIlt,
    logo: '/images/logo-ilt.png',
    logoAlt: 'Logo ILT',
    tag: 'Novo',
    highlight: 'ILT',
    title: 'Índice Licarião de Transparência',
    description:
      'Consulte os índices de transparência de Câmaras e Prefeituras da Paraíba e descubra a NCT — Nota de Conformidade em Transparência de cada órgão.',
    href: 'https://ilt-licariao.vercel.app/',
    ariaLabel: 'Conhecer o ILT',
  },
];

export default function PromoBanner() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [cycle, setCycle] = useState(0); // muda a cada troca para recomeçar a barra
  const touchX = useRef<number | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (n: number) => {
    const next = (n + slides.length) % slides.length;
    if (next !== current) {
      setLeaving(current);
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
      leaveTimer.current = setTimeout(() => setLeaving(null), 600);
      setCurrent(next);
    }
    setCycle((c) => c + 1);
  };

  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.promo} ${current === 0 ? styles.promoLight : ''}`}
        aria-roledescription="carrossel"
        aria-label="Destaques"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
          touchX.current = null;
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.highlight}
            className={`${styles.slide} ${slide.variant} ${i === current ? styles.isActive : ''} ${
              i === leaving ? styles.isLeaving : ''
            }`}
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${slides.length}`}
            aria-hidden={i !== current}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logo} src={slide.logo} alt={slide.logoAlt} />
            <div className={styles.text}>
              <span className={styles.tag}>{slide.tag}</span>
              <p className={styles.title}>
                <span className={styles.hl}>{slide.highlight}</span> · {slide.title}
              </p>
              <p className={styles.desc}>{slide.description}</p>
            </div>
            <div className={styles.dots}>
              {slides.map((_, j) => (
                <button
                  key={j}
                  className={`${styles.dot} ${j === i ? styles.dotOn : ''}`}
                  onClick={() => goTo(j)}
                  aria-label={`Ir para o slide ${j + 1}`}
                />
              ))}
            </div>
            <a
              href={slide.href}
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={slide.ariaLabel}
            >
              <span>Conhecer</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        ))}

        {/* Setas e barra de progresso (comuns aos dois slides) */}
        <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={() => goTo(current - 1)} aria-label="Slide anterior">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={() => goTo(current + 1)} aria-label="Próximo slide">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
        <div key={cycle} className={styles.progress} onAnimationEnd={() => goTo(current + 1)} />
      </div>
    </div>
  );
}
