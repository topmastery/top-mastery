const cdnConfig = require('./config/cdn.config');
const cacheConfig = require('./config/cache.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    ...cacheConfig.images,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${cacheConfig.staticCache.maximumCacheTTL}, stale-while-revalidate`,
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      },
      ...cacheConfig.buildCache
    };

    config.externals = {
      ...config.externals,
      ...cdnConfig.getExternals()
    };

    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000
        }
      };
    }

    return config;
  },
  
  experimental: {
    optimizeDeps: true,
    turbotrace: { enabled: true }
  }
};

module.exports = nextConfig;
