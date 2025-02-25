interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
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
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};