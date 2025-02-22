const cdnConfig = require('./config/cdn.config');
const cacheConfig = require('./config/cache.config');

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    domains: cdnConfig.domains,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
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

module.exports = config;
