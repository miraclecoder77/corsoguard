import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type ChangeFrequency =
  | 'always' | 'hourly' | 'daily'
  | 'weekly' | 'monthly' | 'yearly' | 'never';

interface RouteEntry {
  url: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  lastmod?: string; // explicit date instead of "now"
}

const BASE_URL = 'https://corsoguard.com';

// Use a fixed deploy date for static routes — update when content changes
const SITE_LAST_UPDATED = '2025-04-01';

const staticRoutes: RouteEntry[] = [
  { url: '', priority: 1.0, changeFrequency: 'daily', lastmod: SITE_LAST_UPDATED },
  { url: '/growth', priority: 0.9, changeFrequency: 'weekly', lastmod: SITE_LAST_UPDATED },
  { url: '/checklist', priority: 0.9, changeFrequency: 'weekly', lastmod: SITE_LAST_UPDATED },
  { url: '/age-converter', priority: 0.8, changeFrequency: 'monthly', lastmod: SITE_LAST_UPDATED },
  { url: '/harness', priority: 0.8, changeFrequency: 'monthly', lastmod: SITE_LAST_UPDATED },
  { url: '/lifetime-cost', priority: 0.8, changeFrequency: 'monthly', lastmod: SITE_LAST_UPDATED },
  { url: '/blog', priority: 0.9, changeFrequency: 'daily', lastmod: SITE_LAST_UPDATED },
  { url: '/about', priority: 0.5, changeFrequency: 'monthly', lastmod: SITE_LAST_UPDATED },
  { url: '/disclosure', priority: 0.3, changeFrequency: 'monthly', lastmod: SITE_LAST_UPDATED },
  { url: '/privacy', priority: 0.3, changeFrequency: 'monthly', lastmod: SITE_LAST_UPDATED },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlEntry(
  loc: string,
  lastmod: string,
  changefreq: ChangeFrequency,
  priority: number
): string {
  return `
  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  try {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static routes
    for (const route of staticRoutes) {
      xml += buildUrlEntry(
        `${BASE_URL}${route.url}`,
        route.lastmod ?? SITE_LAST_UPDATED,
        route.changeFrequency,
        route.priority
      );
    }

    // Dynamic blog routes
    const postsDirectory = path.join(process.cwd(), 'src/content/posts');
    if (fs.existsSync(postsDirectory)) {
      const fileNames = fs.readdirSync(postsDirectory);
      for (const fileName of fileNames.filter((f) => f.endsWith('.md'))) {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const { mtime } = fs.statSync(fullPath);

        xml += buildUrlEntry(
          `${BASE_URL}/blog/${slug}`,
          mtime.toISOString().split('T')[0], // YYYY-MM-DD is preferred by Google
          'weekly',
          0.7
        );
      }
    }

    xml += `\n</urlset>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('Sitemap generation failed:', error);
    return new NextResponse('Failed to generate sitemap', { status: 500 });
  }
}