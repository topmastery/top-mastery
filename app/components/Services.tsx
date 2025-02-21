import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  IconPalette, 
  IconDeviceLaptop,
  IconBrandGoogle,
  IconArrowNarrowLeft,
  IconBrandFigma,
  IconBrandWordpress,
  IconSeo,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok
} from '@tabler/icons-react';

const ServiceCard = memo(({ 
  service, 
  index, 
  onServiceRequest 
}: {
  service: {
    icon: React.ReactElement;
    title: string;
    description: string;
    features: string[];
    subFeatures?: {
      icon: React.ReactElement;
      text: string;
    }[];
    action: string;
    gradient: string;
  };
  index: number;
  onServiceRequest: (serviceName: string) => void;
}) => {
  ServiceCard.displayName = 'ServiceCard';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-dark-light p-8 rounded-xl hover:bg-gradient-to-br ${service.gradient} transition-all duration-500 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="text-primary mb-6 inline-block transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-light group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-light/70 mb-6 group-hover:text-light/90 transition-colors duration-300">
          {service.description}
        </p>
        <ul className="space-y-3 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-light/60 group-hover:text-light/80 transition-colors duration-300">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        {service.subFeatures && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {service.subFeatures.map((subFeature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-light/50 group-hover:text-light/70 transition-colors duration-300">
                {subFeature.icon}
                <span className="text-sm">{subFeature.text}</span>
              </div>
            ))}
          </div>
        )}
        <button 
          onClick={() => onServiceRequest(service.title)}
          className="flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-semibold group/btn"
        >
          <span>{service.action}</span>
          <IconArrowNarrowLeft 
            size={20} 
            className="transform group-hover/btn:translate-x-1 transition-transform duration-300" 
          />
        </button>
      </div>
    </motion.div>
  );
});

const Services = () => {
  const handleServiceRequest = (serviceName: string) => {
    try {
      const newsletterForm = document.querySelector('#newsletter textarea') as HTMLTextAreaElement;
      if (newsletterForm) {
        newsletterForm.value = `أود الاستفسار عن خدمة ${serviceName}`;
        newsletterForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          newsletterForm.focus();
        }, 800);
      }
    } catch (error) {
      console.error('Error accessing newsletter form:', error);
    }
  };

  const mainServices = [
    {
      icon: <IconPalette size={40} />,
      title: 'التصميم الإبداعي',
      description: 'نقدم حلولاً إبداعية عالية الجودة تناسب احتياجاتك وتعكس هويتك البصرية.',
      features: [
        'تصميم الهوية البصرية الكاملة',
        'تصميم المطبوعات والإعلانات',
        'تصميم واجهات المستخدم UI/UX'
      ],
      subFeatures: [
        { icon: <IconBrandFigma size={20} />, text: 'تصميم احترافي' },
        { icon: <IconPalette size={20} />, text: 'ألوان متناسقة' },
      ],
      action: 'اطلب الخدمة',
      gradient: 'from-purple-500/10 to-primary/5'
    },
    {
      icon: <IconDeviceLaptop size={40} />,
      title: 'تطوير المواقع',
      description: 'نطور مواقع احترافية متجاوبة مع جميع الأجهزة وسريعة التحميل.',
      features: [
        'تصميم وتطوير مواقع متجاوبة',
        'برمجة خاصة حسب الطلب',
        'تحسين أداء وسرعة المواقع'
      ],
      subFeatures: [
        { icon: <IconBrandWordpress size={20} />, text: 'ووردبريس' },
        { icon: <IconDeviceLaptop size={20} />, text: 'تطوير خاص' },
      ],
      action: 'اطلب الخدمة',
      gradient: 'from-blue-500/10 to-primary/5'
    },
    {
      icon: <IconBrandGoogle size={40} />,
      title: 'التسويق الرقمي',
      description: 'نقدم استراتيجيات تسويقية فعالة لتعزيز تواجدك على الإنترنت.',
      features: [
        'إدارة حسابات السوشيال ميديا',
        'إدارة الحملات الإعلانية',
        'تحسين محركات البحث SEO'
      ],
      subFeatures: [
        { icon: <IconBrandInstagram size={20} />, text: 'انستجرام' },
        { icon: <IconBrandFacebook size={20} />, text: 'فيسبوك' },
        { icon: <IconBrandTiktok size={20} />, text: 'تيك توك' },
        { icon: <IconSeo size={20} />, text: 'SEO' },
      ],
      action: 'اطلب الخدمة',
      gradient: 'from-green-500/10 to-primary/5'
    }
  ];

  return (
    <section id="services" className="py-section bg-dark relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">خدماتنا</h2>
          <p className="section-subtitle">
            نقدم باقة متكاملة من الخدمات الرقمية التي تساعد عملائنا على النمو والتميز
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onServiceRequest={handleServiceRequest}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
