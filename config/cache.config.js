const cacheConfig = {
  images: {
    // Cache time for images in seconds (30 days)
    maximumCacheTTL: 30 * 24 * 60 * 60,
    // List of allowed image domains
    domains: [],
    // Enable blurry placeholder
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  staticCache: {
    // Cache time for static files in seconds (7 days)
    maximumCacheTTL: 7 * 24 * 60 * 60,
  }
};

module.exports = cacheConfig;
