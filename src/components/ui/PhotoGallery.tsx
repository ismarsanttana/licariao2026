'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './PhotoGallery.module.css';

interface PhotoGalleryProps {
  images: string[];
  /** Per-image object-position overrides for the thumbnails (keyed by image path) */
  imagePositions?: Record<string, string>;
}

export default function PhotoGallery({ images, imagePositions }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  // Step through the photos, wrapping around at both ends
  const showSibling = (direction: 1 | -1) =>
    setOpenIndex((i) => (i === null ? i : (i + direction + images.length) % images.length));

  // Keyboard (Esc closes, arrows navigate) and page scroll lock while a photo is open
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, images.length]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={styles.thumb}
            onClick={() => setOpenIndex(i)}
            aria-label={`Ampliar foto ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Evento ${i + 1}`}
              fill
              sizes="(max-width: 480px) 50vw, (max-width: 900px) 33vw, 280px"
              className={styles.thumbImage}
              style={{ objectPosition: imagePositions?.[src] || 'center 20%' }}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${openIndex + 1} de ${images.length}`}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setOpenIndex(null)}
            aria-label="Fechar"
            autoFocus
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* Sized to the photo itself, so any click outside it closes */}
          <Image
            key={images[openIndex]}
            src={images[openIndex]}
            alt={`Evento ${openIndex + 1}`}
            width={1600}
            height={1200}
            sizes="100vw"
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                className={`${styles.navBtn} ${styles.navPrev}`}
                onClick={(e) => { e.stopPropagation(); showSibling(-1); }}
                aria-label="Foto anterior"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className={`${styles.navBtn} ${styles.navNext}`}
                onClick={(e) => { e.stopPropagation(); showSibling(1); }}
                aria-label="Próxima foto"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
