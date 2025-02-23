'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandTiktok, IconBrandLinkedin, IconBrandPinterest, IconBrandYoutube, IconMail, IconPhone, IconMapPin, IconBrandThreads } from '@tabler/icons-react';

interface QuickLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const Footer: React.FC = () => {
  const quickLinks: QuickLink[] = [
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#partners', label: 'شركاؤنا' },
  ];

  const socialLinks: SocialLink[] = [
    { href: 'https://facebook.com/topmasteryadv', icon: <IconBrandFacebook size={24} />, label: 'فيسبوك' },
    { href: 'https://instagram.com/topmasteryadv', icon: <IconBrandInstagram size={24} />, label: 'انستجرام' },
    { href: 'https://x.com/topmasteryadv', icon: <IconBrandX size={24} />, label: 'إكس' },
    { href: 'https://tiktok.com/@topmasteryadv', icon: <IconBrandTiktok size={24} />, label: 'تيك توك' },
    { href: 'https://www.linkedin.com/in/topmasteryadv/', icon: <IconBrandLinkedin size={24} />, label: 'لينكد إن' },
    { href: 'https://pinterest.com/topmasteryadv', icon: <IconBrandPinterest size={24} />, label: 'بينتريست' },
    { href: 'https://youtube.com/@topmasteryadv', icon: <IconBrandYoutube size={24} />, label: 'يوتيوب' },
    { href: 'https://www.threads.net/@topmasteryadv', icon: <IconBrandThreads size={24} />, label: 'ثردس' },
  ];

  const contactInfo: ContactInfo[] = [
    { icon: <IconPhone size={24} />, text: '42 2000 32 010 20+', href: 'tel:+201032200042' },
    { icon: <IconMail size={24} />, text: 'topmastery@yandex.com', href: 'mailto:topmastery@yandex.com' },
    { icon: <IconMapPin size={24} />, text: 'الشيخ زايد - الحى 9 - مول العامر - الدور 2', href: 'https://maps.google.com/?q=الشيخ زايد - الحى 9 - مول العامر - الدور 2' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleServiceRequest = (event: CustomEvent) => {
      setFormData(prev => ({
        ...prev,
        message: `أود الاستفسار عن خدمة ${event.detail}`
      }));
    };

    window.addEventListener('serviceRequest', handleServiceRequest as EventListener);

    return () => {
      window.removeEventListener('serviceRequest', handleServiceRequest as EventListener);
    };
  }, []);

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return name === 'name' ? 'الرجاء إدخال الاسم' :
             name === 'email' ? 'الرجاء إدخال البريد الإلكتروني' :
             'الرجاء إدخال رسالتك';
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'الرجاء إدخال بريد إلكتروني صحيح';
      }
    }

    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من الحقول بشكل مستقل
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    const hasError = Object.values(newErrors).some(error => error !== '');
    setErrors(newErrors);

    if (hasError) return;

    setIsSubmitting(true);
    try {
      // محاكاة إرسال البيانات
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('تم إرسال رسالتك بنجاح!');
    } catch (error) {
      alert('حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // تحديث قيمة الحقل
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // التحقق من الحقل مباشرة عند الكتابة
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return (
    <footer className="bg-dark-light relative pt-16 pb-8 sm:pt-20 lg:pt-24">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-transparent opacity-50" />
      
      <div className="container relative z-10">
        {/* تعديل تقسيم الشبكة وتحسين المسافات */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* About Section - تقليل العرض */}
          <motion.div className="md:col-span-3 lg:col-span-3 order-1">
            <h3 className="text-xl font-bold text-primary mb-4">من نحن</h3>
            <p className="text-light/80 leading-relaxed text-sm mb-6">
              توب ماستري شركة رائدة في مجال التسويق الرقمي وتطوير المواقع، نقدم حلولاً متكاملة تساعد عملائنا على النمو والتميز.
            </p>
            {/* Social Links - تحسين الشبكة */}
            <div className="grid grid-cols-4 gap-4 max-w-[200px]">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/60 hover:text-primary transition-all duration-300
                           hover:scale-125 hover:rotate-6"
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links & Contact - تعديل التنسيق للموبايل */}
          <motion.div className="md:col-span-5 lg:col-span-5 order-2">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
              {/* Quick Links */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-light mb-4">روابط سريعة</h3>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}
                         className="text-light/60 hover:text-primary transition-all duration-300 
                                  flex items-center gap-2 group text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full transform scale-0 
                                     group-hover:scale-100 transition-transform duration-300" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info - على نفس العمود في الموبايل */}
              <div className="space-y-3 mt-6 sm:mt-0">
                <h3 className="text-xl font-bold text-light mb-4">معلومات الاتصال</h3>
                <ul className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <li key={index}>
                      <a href={info.href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center gap-3 text-light/60 hover:text-primary 
                                  transition-all duration-300 group text-sm"
                      >
                        <span className="text-primary transform group-hover:scale-110 
                                     transition-transform duration-300">
                          {React.cloneElement(info.icon as React.ReactElement, { size: 20 })}
                        </span>
                        <span className="break-all">{info.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - توسيع العرض */}
          <motion.div className="md:col-span-4 lg:col-span-4 order-3">
            <div id="newsletter" 
                 className="bg-dark/30 p-5 rounded-xl backdrop-blur-sm 
                          border border-light/5 hover:border-primary/20 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-light mb-4">تواصل معنا</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="الاسم"
                    className={`w-full bg-dark/50 border ${
                      errors.name ? 'border-red-500' : formData.name ? 'border-green-500' : 'border-light/10'
                    } rounded-lg px-3 py-2 text-sm text-light placeholder-light/50 
                    outline-none transition-colors duration-300`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="البريد الإلكتروني"
                    className={`w-full bg-dark/50 border ${
                      errors.email ? 'border-red-500' : formData.email ? 'border-green-500' : 'border-light/10'
                    } rounded-lg px-3 py-2 text-sm text-light placeholder-light/50 
                    outline-none transition-colors duration-300`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="رسالتك"
                    className={`w-full bg-dark/50 border ${
                      errors.message ? 'border-red-500' : formData.message ? 'border-green-500' : 'border-light/10'
                    } rounded-lg px-3 py-2 text-sm text-light placeholder-light/50 
                    outline-none transition-colors duration-300 resize-none`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-dark font-bold py-2.5 rounded-lg 
                           hover:bg-primary-light transition-all duration-300 text-sm
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-dark/50 border-t-dark
                                   rounded-full animate-spin"></span>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    'إرسال الرسالة'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-light/10 pt-8 mt-12">
          <p className="text-center text-light/60 text-base">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} توب ماستري
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
