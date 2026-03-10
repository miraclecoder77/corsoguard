import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://corsoguard.com' // Using production domain for sitemap URLs

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
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic blog routes
  const postsDirectory = path.join(process.cwd(), 'src/content/posts')
  let blogEntries: MetadataRoute.Sitemap = []

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
          changeFrequency: 'monthly',
          priority: 0.6,
        }
      })
  } catch (error) {
    console.error('Error reading blog posts for sitemap:', error)
  }

  return [...staticEntries, ...blogEntries]
}
