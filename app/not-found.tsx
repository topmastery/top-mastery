'use client';

import type { Viewport } from 'next/types';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconHome } from '@tabler/icons-react';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1a1a'
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl text-light mb-6">الصفحة غير موجودة</h2>
        <p className="text-light-dark mb-8 max-w-md mx-auto">
          عذراً، يبدو أنك اتبعت رابطاً معطلاً أو أدخلت عنوان URL غير موجود على هذا الموقع.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-dark px-6 py-3 rounded-lg hover:bg-primary-light transition-colors duration-300"
        >
          <IconHome size={20} />
          العودة إلى الصفحة الرئيسية
        </Link>
      </motion.div>
    </main>
  );
}