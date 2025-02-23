const cdnConfig = require('./config/cdn.config.ts');
const cacheConfig = require('./config/cache.config.ts');
const dependenciesConfig = require('./dependencies.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  
  webpack: (config, { dev, isServer }) => {
    // تكوين موحد للـ cache
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      },
      ...cacheConfig.buildCache
    };

    // تحسين الـ externals
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
  
  // تبسيط الإعدادات التجريبية
  experimental: {
    optimizeDeps: true,
    turbotrace: { enabled: true }
  }
};

module.exports = nextConfig;