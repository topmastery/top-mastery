'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

const Partners = () => {
  const partners = [
    { name: 'شركة 1', logo: '/images/partners/logo1.webp' },
    { name: 'شركة 2', logo: '/images/partners/logo2.webp' },
    { name: 'شركة 3', logo: '/images/partners/logo3.webp' },
    { name: 'شركة 4', logo: '/images/partners/logo4.webp' },
    { name: 'شركة 5', logo: '/images/partners/logo5.webp' },
    { name: 'شركة 6', logo: '/images/partners/logo6.webp' },
    { name: 'شركة 7', logo: '/images/partners/logo7.webp' },
    { name: 'شركة 8', logo: '/images/partners/logo8.webp' },
    { name: 'شركة 9', logo: '/images/partners/logo9.webp' },
    { name: 'شركة 10', logo: '/images/partners/logo10.webp' },
    { name: 'شركة 11', logo: '/images/partners/logo11.webp' },
    { name: 'شركة 12', logo: '/images/partners/logo12.webp' },
    { name: 'شركة 13', logo: '/images/partners/logo13.webp' },
    { name: 'شركة 14', logo: '/images/partners/logo14.webp' },
    { name: 'شركة 15', logo: '/images/partners/logo15.webp' },
    { name: 'شركة 16', logo: '/images/partners/logo16.webp' },
    { name: 'شركة 17', logo: '/images/partners/logo17.webp' },
    // يمكن إضافة المزيد من الشركاء هنا
  ];

  return (
    <section id="partners" className="py-section bg-dark relative overflow-hidden">
      {/* تأثير الخلفية */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">شركاء النجاح</h2>
          <p className="section-subtitle">
            نفخر بثقة شركائنا في خدماتنا ونسعى دائماً لتحقيق أهدافهم وتطلعاتهم
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="partners-slider"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-dark-light/50 backdrop-blur-sm p-6 rounded-lg hover:bg-gradient-to-br from-primary/10 to-transparent transition-all duration-300"
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
