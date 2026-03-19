import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = 'https://corsoguard.com';
  
  // Static routes
  const staticRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' },
    { url: '/growth', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/checklist', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/age-converter', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/harness', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/lifetime-cost', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' },
    { url: '/about', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/disclosure', priority: 0.3, changeFrequency: 'monthly' },
    { url: '/privacy', priority: 0.3, changeFrequency: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  staticRoutes.forEach(route => {
    xml += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  // Dynamic blog routes
  const postsDirectory = path.join(process.cwd(), 'src/content/posts');
  if (fs.existsSync(postsDirectory)) {
    try {
      const fileNames = fs.readdirSync(postsDirectory);
      fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .forEach((fileName) => {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const stats = fs.statSync(fullPath);
          
          xml += `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${stats.mtime.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
        });
    } catch (error) {
      console.error('Error reading blog posts for sitemap:', error);
    }
  }

  xml += `
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
