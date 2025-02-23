'use client';

import { memo, type ReactElement } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
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

interface SubFeature {
  icon: ReactElement;
  text: string;
}

interface Service {
  icon: ReactElement;
  title: string;
  description: string;
  features: string[];
  subFeatures?: SubFeature[];
  action: string;
  gradient: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  onServiceRequest: (serviceName: string) => void;
}

const ServiceCard = memo(({ service, index, onServiceRequest }: ServiceCardProps): ReactElement => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-dark-light p-8 lg:p-10 rounded-xl hover:bg-gradient-to-br 
                 relative overflow-hidden border border-light/5 hover:border-primary/20
                 shadow-lg hover:shadow-xl transition-all duration-500"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 ${service.gradient}`} />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Section */}
        <div className="mb-10 relative">
          <div className="w-20 h-20 rounded-2xl bg-dark flex items-center justify-center
                        transform group-hover:scale-110 group-hover:rotate-6
                        transition-all duration-500 border border-primary/20">
            <div className="text-primary transform transition-transform duration-500
                          group-hover:scale-125">
              {service.icon}
            </div>
          </div>
          <div className="absolute -inset-4 bg-primary/5 rounded-full blur-2xl 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-light group-hover:text-primary 
                     text-center transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-base lg:text-lg leading-relaxed text-light/70 mb-8 text-center
                    group-hover:text-light/90 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-4 mb-10 w-full">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-4 text-light/60 group-hover:text-light/80 
                       transition-colors duration-300"
            >
              <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0
                           group-hover:scale-125 transition-transform duration-300" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Sub Features Grid */}
        {service.subFeatures && (
          <div className={`grid ${
            // تغيير عدد الأعمدة بناءً على عدد العناصر
            service.subFeatures.length === 4 ? 'grid-cols-4' : 'grid-cols-2'
          } gap-4 mb-10 w-full border-t border-b border-light/10 py-6`}>
            {service.subFeatures.map((subFeature, idx) => (
              <div key={idx} 
                   className="flex flex-col items-center gap-2 text-light/50 
                            group-hover:text-light/70 transition-all duration-300 
                            hover:text-primary"
              >
                <span className="text-primary transform group-hover:scale-110 
                              transition-transform duration-300">
                  {subFeature.icon}
                </span>
                <span className="text-xs font-medium text-center">{subFeature.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Button */}
        <motion.button 
          onClick={() => onServiceRequest(service.title)}
          className="w-full bg-primary text-dark font-bold py-4 px-8 rounded-xl
                   hover:bg-primary-light transition-all duration-300 group/btn
                   flex items-center justify-center gap-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-base">{service.action}</span>
          <IconArrowNarrowLeft 
            size={20} 
            className="transform group-hover/btn:-translate-x-1 transition-transform duration-300" 
          />
        </motion.button>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services = (): ReactElement => {
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
      description: 'نقدم حلولاً إبداعية تناسب احتياجاتك وتعكس هويتك البصرية.',
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
        { icon: <IconBrandInstagram size={24} />, text: 'انستجرام' },
        { icon: <IconBrandFacebook size={24} />, text: 'فيسبوك' },
        { icon: <IconBrandTiktok size={24} />, text: 'تيك توك' },
        { icon: <IconSeo size={24} />, text: 'SEO' },
      ],
      action: 'اطلب الخدمة',
      gradient: 'from-green-500/10 to-primary/5'
    }
  ];

  return (
    <section id="services" className="py-section bg-dark relative">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">خدماتنا</h2>
          <p className="section-subtitle">
            نقدم باقة متكاملة من الخدمات الرقمية لمساعدة عملائنا على النمو والتميز
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
