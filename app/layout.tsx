import type { Metadata, Viewport } from 'next/types'
import { cairo } from './fonts'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

export const metadata: Metadata = {
  title: 'Top Mastery | توب ماستري',
  description: 'تعاون مع خبراء الإبداع لتحويل رؤيتك إلى واقع',
  keywords: 'تصميم, تطوير, تسويق رقمي, خدمات رقمية, برمجة مواقع',
  robots: 'index, follow',
  metadataBase: new URL('https://top-mastery.com'),
  openGraph: {
    title: 'Top Mastery | توب ماستري',
    description: 'تعاون مع خبراء الإبداع لتحويل رؤيتك إلى واقع',
    type: 'website',
    locale: 'ar_SA'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a'
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
      </body>
    </html>
  )
}
