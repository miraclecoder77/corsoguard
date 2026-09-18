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

const BASE_URL = 'https://www.corsoguard.com';

const postsDir = path.join(process.cwd(), 'src/content/posts');

/**
 * Slugs that are 301'd elsewhere in next.config.ts. A sitemap must only list
 * URLs that return 200 — a redirecting entry wastes crawl budget and is
 * reported as an error in Search Console.
 */
const REDIRECTED_SLUGS = new Set(['how-much-to-feed-cane-corso-puppy']);

function toIsoDate(d: Date): string {
  return d.toISOString().split('T')[0]; // YYYY-MM-DD is preferred by Google
}

/**
 * Derived from the most recently modified post rather than hardcoded, so the
 * static routes stop advertising a stale lastmod whenever content ships.
 */
function siteLastUpdated(): string {
  let newest = 0;
  try {
    for (const fileName of fs.readdirSync(postsDir)) {
      if (!fileName.endsWith('.md')) continue;
      const { mtimeMs } = fs.statSync(path.join(postsDir, fileName));
      if (mtimeMs > newest) newest = mtimeMs;
    }
  } catch {
    // fall through to build time
  }
  return toIsoDate(newest ? new Date(newest) : new Date());
}

const staticRoutes: Omit<RouteEntry, 'lastmod'>[] = [
  { url: '', priority: 1.0, changeFrequency: 'daily' },
  { url: '/growth', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/growth/methodology', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/checklist', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/age-converter', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/harness', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/lifetime-cost', priority: 0.8, changeFrequency: 'monthly' },
  { url: '/blog', priority: 0.9, changeFrequency: 'daily' },
  { url: '/about', priority: 0.5, changeFrequency: 'monthly' },
  { url: '/disclosure', priority: 0.3, changeFrequency: 'monthly' },
  { url: '/privacy', priority: 0.3, changeFrequency: 'monthly' },
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
    const lastUpdated = siteLastUpdated();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static routes
    for (const route of staticRoutes) {
      xml += buildUrlEntry(
        `${BASE_URL}${route.url}`,
        lastUpdated,
        route.changeFrequency,
        route.priority
      );
    }

    // Dynamic blog routes
    if (fs.existsSync(postsDir)) {
      const fileNames = fs.readdirSync(postsDir);
      for (const fileName of fileNames.filter((f) => f.endsWith('.md'))) {
        const slug = fileName.replace(/\.md$/, '');
        if (REDIRECTED_SLUGS.has(slug)) continue;

        const { mtime } = fs.statSync(path.join(postsDir, fileName));

        xml += buildUrlEntry(
          `${BASE_URL}/blog/${slug}`,
          toIsoDate(mtime),
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