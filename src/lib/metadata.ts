import type { Metadata } from 'next';

export const siteUrl = new URL('https://licariao.com.br');

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: path,
      siteName: 'Hebert Licarião',
      title,
      description,
      images: [
        {
          url: '/images/hero-bg-v2.jpg',
          width: 1024,
          height: 512,
          alt: 'Hebert Licarião - Transparência Pública e Tecnologia',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero-bg-v2.jpg'],
    },
  };
}
