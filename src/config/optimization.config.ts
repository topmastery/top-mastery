export const optimizationConfig = {
  images: {
    quality: 75,
    sizes: [640, 828, 1200, 1920],
    placeholder: 'blur',
  },
  
  animation: {
    duration: 0.6,
    easing: [0.32, 0.72, 0, 1],
  },
  
  cache: {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    staleWhileRevalidate: 60 * 60, // 1 hour
  }
};

export default optimizationConfig;
