import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://corsoguard.com'

  // Static routes with priorities
  const staticRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    { url: '/growth', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/checklist', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/age-converter', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/harness', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/lifetime-cost', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/about', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/disclosure', priority: 0.3, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'monthly' as const },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
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
            changeFrequency: 'weekly' as const,
            priority: 0.7,
          }
        })
    } catch (error) {
      console.error('Error reading blog posts for sitemap:', error)
    }
  }

  return [...staticEntries, ...blogEntries]
}
