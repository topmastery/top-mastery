interface CDNAsset {
  [key: string]: string;
}

interface CDNConfig {
  domains: string[];
  assets: {
    libraries: CDNAsset;
  };
  getExternals: () => CDNAsset;
}

const cdnConfig: CDNConfig = {
  domains: ['cdn.jsdelivr.net', 'unpkg.com', 'cdnjs.cloudflare.com'],
  assets: {
    libraries: {
      'chart.js': 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js',
      'three.js': 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    }
  },
  getExternals() {
    return Object.keys(this.assets.libraries).reduce((acc, lib) => {
      acc[lib] = lib.replace('.js', '');
      return acc;
    }, {} as CDNAsset);
  }
};

export default cdnConfig;
