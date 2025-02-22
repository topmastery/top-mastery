'use client';

import { motion } from 'framer-motion';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBrandTiktok, IconBrandLinkedin, IconBrandPinterest, IconBrandYoutube, IconMail, IconPhone, IconMapPin, IconBrandThreads } from '@tabler/icons-react';

const Footer = () => {
  const quickLinks = [
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#partners', label: 'شركاؤنا' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com/topmasteryadv', icon: <IconBrandFacebook size={24} />, label: 'فيسبوك' },
    { href: 'https://instagram.com/topmasteryadv', icon: <IconBrandInstagram size={24} />, label: 'انستجرام' },
    { href: 'https://x.com/topmasteryadv', icon: <IconBrandX size={24} />, label: 'إكس' },
    { href: 'https://tiktok.com/@topmasteryadv', icon: <IconBrandTiktok size={24} />, label: 'تيك توك' },
    { href: 'https://www.linkedin.com/in/topmasteryadv/', icon: <IconBrandLinkedin size={24} />, label: 'لينكد إن' },
    { href: 'https://pinterest.com/topmasteryadv', icon: <IconBrandPinterest size={24} />, label: 'بينتريست' },
    { href: 'https://youtube.com/@topmasteryadv', icon: <IconBrandYoutube size={24} />, label: 'يوتيوب' },
    { href: 'https://www.threads.net/@topmasteryadv', icon: <IconBrandThreads size={24} />, label: 'ثردس' },
  ];

  const contactInfo = [
    { icon: <IconPhone size={24} />, text: '42 2000 32 010 20+', href: 'tel:+201032200042' },
    { icon: <IconMail size={24} />, text: 'topmastery@yandex.com', href: 'mailto:topmastery@yandex.com' },
    { icon: <IconMapPin size={24} />, text: 'الشيخ زايد - الحى 9 - مول العامر - الدور 2', href: 'https://maps.google.com/?q=الشيخ زايد - الحى 9 - مول العامر - الدور 2' },
  ];

  return (
    <footer className="bg-dark-light relative pt-12 pb-6 sm:pt-16 sm:pb-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-transparent opacity-50" />
      
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* About Section - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-bold text-primary mb-4">من نحن</h3>
            <p className="text-light/80 leading-relaxed text-sm mb-6">
              توب ماستري شركة رائدة في مجال التسويق الرقمي وتطوير المواقع، نقدم حلولاً متكاملة تساعد عملائنا على النمو والتميز.
            </p>
            {/* Social Links - Grid 4x2 */}
            <div className="grid grid-cols-4 gap-4 max-w-[240px]">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/60 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links & Contact - 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold text-light mb-6">روابط سريعة</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-light/60 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-light mb-6">معلومات الاتصال</h3>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="group">
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 text-light/60 hover:text-primary transition-colors duration-300"
                      >
                        <span className="text-primary mt-1 transform group-hover:scale-110 transition-transform">
                          {info.icon}
                        </span>
                        <span className="text-sm leading-relaxed" style={{ direction: info.icon === <IconPhone size={24} /> ? 'ltr' : 'rtl' }}>{info.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 4 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div id="newsletter" className="bg-dark/30 p-4 sm:p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-light mb-4">تواصل معنا</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم"
                  className="w-full bg-dark/50 border border-light/10 rounded-lg px-4 py-2 text-light placeholder-light/50 focus:border-primary focus:outline-none transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-dark/50 border border-light/10 rounded-lg px-4 py-2 text-light placeholder-light/50 focus:border-primary focus:outline-none transition-colors duration-300"
                />
                <textarea
                  id="message"
                  placeholder="رسالتك"
                  rows={4}
                  className="w-full bg-dark/50 border border-light/10 rounded-lg px-4 py-2 text-light placeholder-light/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-dark font-bold py-3 rounded-lg hover:bg-primary-light transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  إرسال الرسالة
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-light/10 pt-8">
          <p className="text-center text-light/60 text-sm">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} توب ماستري
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
