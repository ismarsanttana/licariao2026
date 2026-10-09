'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './EventCarousel.module.css';

interface EventCarouselProps {
  images: string[];
  /** Per-image object-position overrides (keyed by image path) */
  imagePositions?: Record<string, string>;
  title?: string;
  subtitle?: string;
  speed?: number;
}

export default function EventCarousel({ images, imagePositions, title, subtitle, speed = 50 }: EventCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);

  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    // Each slide is 320px + 1.25rem (20px) gap = 340px
    const slideWidth = 340;
    const totalWidth = slideWidth * images.length;

    if (!isPaused) {
      positionRef.current -= speed / 60;
      // Reset when we've scrolled past the first full set of images
      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current += totalWidth;
      }
    }
    track.style.transform = `translateX(${positionRef.current}px)`;
  }, [isPaused, speed, images.length]);

  useEffect(() => {
    let animationId: number;

    const loop = () => {
      animate();
      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [animate]);

  // Double the images for seamless infinite loop
  const doubleImages = [...images, ...images];

  return (
    <section className={styles.section}>
      {title && (
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      )}

      <div
        className={styles.carouselWrapper}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.track} ref={trackRef}>
          {doubleImages.map((src, i) => {
            const pos = imagePositions?.[src] || 'center 20%';
            return (
              <div key={i} className={styles.slide}>
                <Image
                  src={src}
                  alt={`Evento ${(i % images.length) + 1}`}
                  fill
                  sizes="320px"
                  className={styles.image}
                  style={{ objectPosition: pos }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
