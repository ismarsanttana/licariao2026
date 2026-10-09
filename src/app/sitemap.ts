import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const routes = [
  '/',
  '/quem-somos',
  '/estrutura',
  '/transparencia-publica',
  '/horus',
  '/trabalhe-conosco',
  '/localizacao',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, 'https://licariao.com.br').toString(),
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));
}
