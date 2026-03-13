import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/', '/tmp/', '/draft/'],
    },
    sitemap: 'https://corsoguard.com/sitemap.xml',
    host: 'https://corsoguard.com',
  }
}
