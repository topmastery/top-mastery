'use client';

import { useEffect } from 'react';
import { Cairo } from 'next/font/google';
import { scrollToTop, preventScrollRestoration } from './utils/scroll';
import '@/styles/globals.css'; // تغيير المسار للمسار الصحيح

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-cairo',
});

export const dynamic = 'force-dynamic';

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
