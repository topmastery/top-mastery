'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  // Add your projects here
  {
    id: 1,
    title: "مثال مشروع",
    description: "وصف المشروع",
    image: "/images/project1.jpg"
  }
];

export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
};

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<typeof projects[0] | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const projectId = parseInt(params.id as string);
    const foundProject = getProjectById(projectId);
    
    if (foundProject) {
      setProject(foundProject);
    } else {
      setNotFound(true);
    }
  }, [params.id]);

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">المشروع غير موجود</h1>
        <Link href="/portfolio" className="btn-primary">
          العودة للمشاريع
        </Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        جاري التحميل...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video overflow-hidden rounded-xl mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl mb-6">{project.description}</p>
        <Link href="/portfolio" className="btn-primary inline-block">
          العودة للمشاريع
        </Link>
      </div>
    </div>
  );
}
