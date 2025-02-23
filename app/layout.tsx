import { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import '@/src/styles/globals.css'; // تحديث مسار الاستيراد

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
