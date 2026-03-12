import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://corsoguard.com'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/age-converter',
    '/blog',
    '/checklist',
    '/disclosure',
    '/growth',
    '/harness',
    '/lifetime-cost',
    '/privacy',
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic blog routes
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts')
  let blogEntries: MetadataRoute.Sitemap = []

  if (fs.existsSync(postsDirectory)) {
    try {
      const fileNames = fs.readdirSync(postsDirectory)
      blogEntries = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
          const slug = fileName.replace(/\.md$/, '')
          const fullPath = path.join(postsDirectory, fileName)
          const stats = fs.statSync(fullPath)
          
          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: stats.mtime,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          }
        })
    } catch (error) {
      console.error('Error reading blog posts for sitemap:', error)
    }
  }

  return [...staticEntries, ...blogEntries]
}
