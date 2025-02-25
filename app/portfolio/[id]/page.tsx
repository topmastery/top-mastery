'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  useEffect(() => {
    // تغيير التوجيه للصيغة الجديدة
    router.push(`/?project=${params.id}`);
  }, [params.id, router]);

  return null;
}
