import type { Metadata, Viewport } from 'next/types'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cairo } from './fonts'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const metadata: Metadata = {
  title: 'Top Mastery | توب ماستري',
  description: 'تعاون مع خبراء الإبداع لتحويل رؤيتك إلى واقع',
  keywords: 'تصميم, تطوير, تسويق رقمي, خدمات رقمية, برمجة مواقع, تصميم مواقع, تطوير تطبيقات, تسويق الكتروني',
  robots: 'index, follow',
  metadataBase: new URL('https://top-mastery.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Top Mastery | توب ماستري',
    description: 'تعاون مع خبراء الإبداع لتحويل رؤيتك إلى واقع',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'Top Mastery',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Top Mastery | توب ماستري'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Mastery | توب ماستري',
    description: 'تعاون مع خبراء الإبداع لتحويل رؤيتك إلى واقع',
    images: ['/images/og-image.jpg']
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a',
  colorScheme: 'dark',
  minimumScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
