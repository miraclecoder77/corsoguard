import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/tmp/', '/draft/'],
      },
      // Example: opt out of AI training crawlers
      // {
      //   userAgent: ['GPTBot', 'Claude-Web', 'CCBot'],
      //   disallow: '/',
      // },
    ],
    sitemap: 'https://corsoguard.com/sitemap.xml',
  };
}