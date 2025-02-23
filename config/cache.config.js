const cacheConfig = {
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  staticCache: {
    // Cache time for static files in seconds (7 days)
    duration: 7 * 24 * 60 * 60,
    headers: {
      'Cache-Control': 'public, max-age=604800, stale-while-revalidate'
    }
  }
};

module.exports = cacheConfig;
