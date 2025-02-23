const cdnConfig = require('./config/cdn.config');
const cacheConfig = require('./config/cache.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate',
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
    turbotrace: {
      enabled: true
    }
  }
};

module.exports = nextConfig;
