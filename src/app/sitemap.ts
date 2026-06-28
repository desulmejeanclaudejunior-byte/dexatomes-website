import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://dexatomes.com', lastModified: new Date(), priority: 1.0 },
    { url: 'https://dexatomes.com/store', lastModified: new Date(), priority: 0.9 },
    { url: 'https://dexatomes.com/store/success', lastModified: new Date(), priority: 0.3 },
  ]
}
