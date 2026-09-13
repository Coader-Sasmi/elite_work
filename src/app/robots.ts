import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Block API routes if you add them later
    },
    sitemap: 'https://www.elitework.in/sitemap.xml', // Update with your actual domain
  }
}
