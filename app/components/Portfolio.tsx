'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import type { MouseEvent, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandTelegram, IconLink, IconShare, IconCheck, IconBrandX, IconX } from '@tabler/icons-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface Filter {
  id: string;
  label: string;
}

interface ShareButton {
  platform: string;
  icon: JSX.Element;
  label: string;
}

const Portfolio = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const filters: Filter[] = [
    { id: 'all', label: 'الكل' },
    { id: 'web', label: 'تصميم مواقع' },
    { id: 'brand', label: 'هوية بصرية' },
    { id: 'social', label: 'سوشيال ميديا' },
    { id: 'prints', label: 'مطبوعات' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'تصميم موقع شركة عقارات',
      category: 'web',
      image: '/images/portfolio/web/1.webp',
      description: 'تصميم وتطوير موقع متجاوب لشركة عقارات رائدة',
    },
    {
      id: 2,
      title: 'تصميم موقع شخصي',
      category: 'web',
      image: '/images/portfolio/web/2.webp',
      description: 'تصميم موقع شخصي احترافي وعصري',
    },
    {
      id: 3,
      title: 'تطوير منصة تعليمية',
      category: 'web',
      image: '/images/portfolio/web/3.webp',
      description: 'تطوير منصة تعليمية متكاملة وسهلة الاستخدام',
    },
    {
      id: 5,
      title: 'هوية بصرية لشركة تقنية',
      category: 'brand',
      image: '/images/portfolio/branding/2.webp',
      description: 'تصميم هوية بصرية لشركة تقنية ناشئة',
    },
    {
      id: 6,
      title: 'تصميم علامة تجارية',
      category: 'brand',
      image: '/images/portfolio/branding/3.webp',
      description: 'تصميم علامة تجارية مميزة وقابلة للتذكر',
    },
    {
      id: 7,
      title: 'هوية بصرية لمتجر',
      category: 'brand',
      image: '/images/portfolio/branding/4.webp',
      description: 'تصميم هوية بصرية كاملة لمتجر إلكتروني',
    },
    {
      id: 8,
      title: 'تصميم منشورات انستجرام',
      category: 'social',
      image: '/images/portfolio/social media/1.webp',
      description: 'تصميم منشورات جذابة لمنصة انستجرام',
    },
    {
      id: 9,
      title: 'تصميم إعلانات فيسبوك',
      category: 'social',
      image: '/images/portfolio/social media/2.webp',
      description: 'تصميم إعلانات احترافية لمنصة فيسبوك',
    },
    {
      id: 10,
      title: 'محتوى سوشيال ميديا',
      category: 'social',
      image: '/images/portfolio/social media/3.webp',
      description: 'تصميم محتوى متكامل لمنصات التواصل الاجتماعي',
    },
    {
      id: 11,
      title: 'تصميم كتيب تعريفي',
      category: 'prints',
      image: '/images/portfolio/prints/1.webp',
      description: 'تصميم كتيب تعريفي احترافي للشركات',
    },
    {
      id: 12,
      title: 'تصميم مطبوعات دعائية',
      category: 'prints',
      image: '/images/portfolio/prints/2.webp',
      description: 'تصميم مجموعة مطبوعات دعائية متنوعة',
    },
    {
      id: 13,
      title: 'تصميم تغليف منتجات',
      category: 'prints',
      image: '/images/portfolio/prints/3.webp',
      description: 'تصميم عبوات وتغليف منتجات مميزة',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = useCallback((project: Project, e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    setSelectedProject(project);
    
    // Create new URLSearchParams
    const params = new URLSearchParams(searchParams.toString());
    params.set('project', project.id.toString());
    
    // Update URL without page reload
    if (isMobile) {
      // Use full navigation for mobile devices
      router.push(`${pathname}?${params.toString()}`);
    } else {
      // Use smooth navigation for desktop
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }
  }, [router, pathname, searchParams]);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setShowShareTooltip(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('project');
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newUrl, { scroll: false });
  }, [router, pathname, searchParams]);

  const handleShare = async (platform: string, project: Project): Promise<void> => {
    // تغيير تكوين الرابط هنا
    const projectUrl = `${window.location.origin}/?project=${project.id}`;
    const text = `شاهد مشروع "${project.title}" من توب ماستري`;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(projectUrl)}`;
        break;
      case 'x':
        shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(projectUrl)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + projectUrl)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(projectUrl)}&text=${encodeURIComponent(text)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(projectUrl);
          setCopiedIndex(4); // Index of the copy button
          setTimeout(() => setCopiedIndex(null), 2000);
        } catch (err) {
          console.error('فشل نسخ الرابط:', err);
        }
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const shareButtons: ShareButton[] = [
    { platform: 'facebook', icon: <IconBrandFacebook size={20} />, label: 'فيسبوك' },
    { platform: 'x', icon: <IconBrandX size={20} />, label: 'إكس' },
    { platform: 'whatsapp', icon: <IconBrandWhatsapp size={20} />, label: 'واتساب' },
    { platform: 'telegram', icon: <IconBrandTelegram size={20} />, label: 'تليجرام' },
    { platform: 'copy', icon: <IconLink size={20} />, label: 'نسخ الرابط' },
  ];

  // Close modal when clicking outside
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('modal-backdrop')) {
      closeModal();
    }
  }, [closeModal]);

  // Close modal when clicking the close button
  const handleCloseButtonClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleURLChange = () => {
      const projectId = searchParams.get('project');
      if (projectId) {
        const project = projects.find(p => p.id === parseInt(projectId));
        if (project) {
          const portfolioSection = document.getElementById('portfolio');
          portfolioSection?.scrollIntoView({ behavior: 'smooth' });
          setSelectedProject(project);
        }
      } else if (selectedProject) {
        setSelectedProject(null);
        setShowShareTooltip(false);
      }
    };

    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement;
      // Handle both modal and share menu clicks
      if (modalRef.current && !modalRef.current.contains(target as Node)) {
        if (!target.closest('.share-menu') && !target.closest('.share-button')) {
          closeModal();
        }
      }
      if (!target.closest('.share-menu') && !target.closest('.share-button')) {
        setShowShareTooltip(false);
      }
    };

    // Initial URL check
    handleURLChange();

    // Event listeners
    window.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchParams, closeModal]); // Only depend on searchParams and closeModal

  return (
    <section id="portfolio" className="py-section bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">أعمالنا</h2>
          <p className="section-subtitle">
            نماذج من أعمالنا المميزة في مختلف المجالات
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-dark font-bold'
                  : 'bg-dark-light text-light hover:bg-primary hover:text-dark'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <Link 
                  href={`${pathname}?project=${project.id}`}
                  className="block group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                  onClick={(e) => handleProjectClick(project, e)}
                  prefetch={false}
                >
                  <div className="aspect-video overflow-hidden bg-dark-light">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={360}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      priority={project.id <= 6}
                      loading={project.id <= 6 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-light mb-2 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-light/90 text-sm leading-relaxed drop-shadow-lg">
                        {project.description}
                      </p>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <span className="inline-block bg-primary text-dark text-sm font-bold px-3 py-1 rounded-full">
                          {filters.find(f => f.id === project.category)?.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 p-4 backdrop-blur-sm modal-backdrop"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="modal-content relative max-w-4xl w-full bg-dark-light rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <button
                onClick={handleCloseButtonClick}
                className="close-modal absolute top-4 right-4 text-light/80 hover:text-light z-10 bg-dark/50 rounded-full p-2 transition-all duration-300 hover:bg-dark/70 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-light">{selectedProject.title}</h3>
                  <div className="relative">
                    <motion.button
                      className="p-2 rounded-full bg-dark/50 text-light/80 hover:text-light transition-all duration-300 hover:bg-dark/70 share-button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowShareTooltip(!showShareTooltip);
                      }}
                    >
                      <IconShare size={20} />
                    </motion.button>
                    <AnimatePresence>
                      {showShareTooltip && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute top-full left-0 mt-2 bg-dark rounded-lg shadow-lg p-2 z-10 share-menu"
                          onClick={(e) => e.stopPropagation()}

                        >
                          <div className="flex gap-2">
                            {shareButtons.map((btn, index) => (
                              <motion.button
                                key={btn.platform}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleShare(btn.platform, selectedProject);
                                }}
                                className="p-2 rounded-full bg-dark-light text-light/80 hover:text-primary transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                title={btn.label}
                                style={{
                                  color: copiedIndex === index ? '#22c55e' : undefined,
                                  transform: copiedIndex === index ? 'rotateY(360deg)' : 'rotateY(0deg)',
                                  transition: 'all 0.5s ease-in-out'
                                }}
                              >
                                {copiedIndex === index ? <IconCheck size={20} /> : btn.icon}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <p className="text-light/80 mb-4 leading-relaxed">{selectedProject.description}</p>
                <span className="inline-block bg-primary text-dark text-sm font-bold px-4 py-2 rounded-full">
                  {filters.find(f => f.id === selectedProject.category)?.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
