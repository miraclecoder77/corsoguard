import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/tmp/', '/draft/'],
      },
      // AI crawlers are explicitly ALLOWED — do not add disallow rules for these.
      // GPTBot (OpenAI), PerplexityBot, ClaudeBot (Anthropic),
      // Google-Extended, CCBot are all permitted to crawl and index this site.
    ],
    sitemap: 'https://www.corsoguard.com/sitemap.xml',
  };
}