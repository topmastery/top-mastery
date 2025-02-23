import { Cairo } from 'next/font/google';

export const cairo = Cairo({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
  adjustFontFallback: true,
});
