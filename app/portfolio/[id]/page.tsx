'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  description: string;
}

export default function ProjectPage() {
  const params = useParams();
  const { id } = params;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      // هنا يمكنك استدعاء API لجلب بيانات المشروع
      setProject({
        title: `مشروع ${id}`,
        description: 'وصف المشروع...'
      });
    }
  }, [id]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">جاري التحميل...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg">{project.description}</p>
    </div>
  );
}
