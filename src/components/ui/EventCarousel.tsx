'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EventCarousel.module.css';

interface EventCarouselProps {
  images: string[];
  /** Per-image object-position overrides (keyed by image path) */
  imagePositions?: Record<string, string>;
  title?: string;
  subtitle?: string;
  /** Auto-scroll speed in px per second */
  speed?: number;
  /** Optional button below the carousel linking to the full gallery */
  moreLink?: { href: string; label: string };
}

const ARROW_DURATION = 450;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function EventCarousel({ images, imagePositions, title, subtitle, speed = 50, moreLink }: EventCarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const isHoveredRef = useRef(false);
  const dragRef = useRef<{ pointerId: number; startX: number; startPos: number } | null>(null);
  const arrowAnimRef = useRef<{ from: number; to: number; start: number } | null>(null);

  // Width of one full set of images and of a single slide (incl. gap), measured
  // from the DOM so it follows the responsive slide sizes.
  const measure = () => {
    const slides = trackRef.current?.children;
    if (!slides || slides.length < images.length + 1) return null;
    const first = slides[0] as HTMLElement;
    const setWidth = (slides[images.length] as HTMLElement).offsetLeft - first.offsetLeft;
    const step = (slides[1] as HTMLElement).offsetLeft - first.offsetLeft;
    return { setWidth, step };
  };

  // Keep the position inside (-setWidth, 0] so the doubled track loops seamlessly,
  // shifting any in-progress drag/arrow animation by the same amount.
  const wrapPosition = (setWidth: number) => {
    let shift = 0;
    if (positionRef.current > 0) shift = -setWidth;
    else if (positionRef.current <= -setWidth) shift = setWidth;
    if (!shift) return;
    positionRef.current += shift;
    if (dragRef.current) dragRef.current.startPos += shift;
    if (arrowAnimRef.current) {
      arrowAnimRef.current.from += shift;
      arrowAnimRef.current.to += shift;
    }
  };

  useEffect(() => {
    let animationId: number;
    let lastTime: number | null = null;

    const loop = (time: number) => {
      const dt = lastTime === null ? 0 : Math.min(time - lastTime, 100);
      lastTime = time;
      const sizes = measure();
      const track = trackRef.current;

      if (sizes && track) {
        const anim = arrowAnimRef.current;
        if (anim) {
          const t = Math.min((time - anim.start) / ARROW_DURATION, 1);
          positionRef.current = anim.from + (anim.to - anim.from) * easeOutCubic(t);
          if (t >= 1) arrowAnimRef.current = null;
        } else if (!dragRef.current && !isHoveredRef.current) {
          positionRef.current -= (speed * dt) / 1000;
        }
        wrapPosition(sizes.setWidth);
        track.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, images.length]);

  const goTo = (direction: 1 | -1) => {
    const sizes = measure();
    if (!sizes) return;
    const base = arrowAnimRef.current?.to ?? positionRef.current;
    // Moving forward slides the track left (more negative); snap to slide edges.
    const target = direction === 1
      ? (Math.ceil(base / sizes.step) - 1) * sizes.step
      : (Math.floor(base / sizes.step) + 1) * sizes.step;
    arrowAnimRef.current = { from: positionRef.current, to: target, start: performance.now() };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    arrowAnimRef.current = null;
    dragRef.current = { pointerId: e.pointerId, startX: e.clientX, startPos: positionRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
    wrapperRef.current?.classList.add(styles.dragging);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== e.pointerId) return;
    positionRef.current = drag.startPos + (e.clientX - drag.startX);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== e.pointerId) return;
    dragRef.current = null;
    wrapperRef.current?.classList.remove(styles.dragging);
  };

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
        className={styles.carousel}
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') isHoveredRef.current = true; }}
        onPointerLeave={(e) => { if (e.pointerType === 'mouse') isHoveredRef.current = false; }}
      >
        <div
          className={styles.carouselWrapper}
          ref={wrapperRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
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
                    draggable={false}
                    className={styles.image}
                    style={{ objectPosition: pos }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={() => goTo(-1)}
          aria-label="Foto anterior"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => goTo(1)}
          aria-label="Próxima foto"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {moreLink && (
        <div className={styles.moreWrapper}>
          <Link href={moreLink.href} className={styles.moreBtn}>
            {moreLink.label}
          </Link>
        </div>
      )}
    </section>
  );
}
