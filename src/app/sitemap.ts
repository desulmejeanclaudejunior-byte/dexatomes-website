import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://dexatomes.com', priority: 1.0 },
    { url: 'https://dexatomes.com/services', priority: 0.9 },
    { url: 'https://dexatomes.com/store', priority: 0.9 },
    { url: 'https://dexatomes.com/dexuslab', priority: 0.8 },
    { url: 'https://dexatomes.com/about', priority: 0.7 },
    { url: 'https://dexatomes.com/contact', priority: 0.7 },
  ].map((p) => ({
    ...p,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))
}
