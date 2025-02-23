'use client';

import { useEffect } from 'react';
import { Cairo } from 'next/font/google';
import { Metadata } from 'next';
import { scrollToTop, preventScrollRestoration } from './utils/scroll';
import '@/src/styles/globals.css';

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'توب ماستري - خدمات التصميم والتطوير الرقمي',
  description: 'شركة رائدة في مجال التصميم والتطوير الرقمي، نقدم حلولاً إبداعية متكاملة منذ 2005',
  keywords: ['تصميم', 'تطوير', 'تسويق رقمي', 'هوية بصرية', 'مواقع إلكترونية'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // منع استعادة موضع التمرير التلقائي
    preventScrollRestoration();
    
    // التمرير إلى أعلى الصفحة عند إعادة التحميل
    scrollToTop();

    // إضافة مراقب لحدث beforeunload
    const handleBeforeUnload = () => {
      scrollToTop();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="min-h-screen bg-dark text-light antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
