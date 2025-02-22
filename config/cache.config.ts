interface CacheConfig {
  cacheDirectory: string;
  staticCache: {
    maxAge: number;
    immutable: boolean;
    revalidate: boolean;
  };
  serverCache: {
    ttl: number;
    maxItems: number;
    revalidateAfter: number;
  };
  buildCache: {
    enabled: boolean;
    dependencies: boolean;
    outputPath: string;
  };
}

const cacheConfig: CacheConfig = {
  cacheDirectory: '.next/cache',
  staticCache: {
    maxAge: 30 * 24 * 60 * 60,
    immutable: true,
    revalidate: false
  },
  serverCache: {
    ttl: 24 * 60 * 60,
    maxItems: 1000,
    revalidateAfter: 12 * 60 * 60
  },
  buildCache: {
    enabled: true,
    dependencies: true,
    outputPath: '.next/cache/build'
  }
};

export default cacheConfig;
