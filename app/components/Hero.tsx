'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = [
    {
      image: '/images/slider1.webp',
      title: 'توب ماستري Top Mastery',
      subtitle: 'تعاون مع خبراء الإبداع لتحويل رؤيتك إلى واقع',
      buttonText: 'اكتشف المزيد',
      buttonLink: '#about',
      secondaryButtonText: 'تواصل معنا',
      secondaryButtonLink: '#newsletter',
    },
    {
      image: '/images/slider2.webp',
      title: 'خدمات إبداعية متكاملة',
      subtitle: 'نقدم حلولاً مبتكرة تناسب احتياجاتك وتعكس هويتك البصرية',
      buttonText: 'خدماتنا',
      buttonLink: '#services',
      secondaryButtonText: 'معرض الأعمال',
      secondaryButtonLink: '#portfolio',
    },
    {
      image: '/images/slider3.webp',
      title: 'تصاميم عصرية مميزة',
      subtitle: 'نجمع بين الإبداع والاحترافية في كل مشاريعنا',
      buttonText: 'شاهد أعمالنا',
      buttonLink: '#portfolio',
      secondaryButtonText: 'تواصل معنا',
      secondaryButtonLink: '#newsletter',
    },
  ];

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' !w-2 !h-2 sm:!w-3 sm:!h-3 !bg-primary/50 hover:!bg-primary transition-all duration-300"></span>';
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
          hideOnClick: false
        }}
        grabCursor={true}
        preventClicks={true}
        preventClicksPropagation={true}
        slidesPerView={1}
        spaceBetween={0}
        observer={true}
        observeParents={true}
        watchOverflow={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative select-none">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[2000ms]"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/80" />
            <div className="relative h-full flex items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-3xl sm:text-4xl md:text-6xl font-bold text-light mb-4 sm:mb-6 drop-shadow-lg"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-lg sm:text-xl md:text-2xl text-light/90 mb-6 sm:mb-8 drop-shadow-md max-w-3xl mx-auto"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-xl mx-auto"
                >
                  <motion.a
                    href={slide.buttonLink}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center text-sm sm:text-base px-8 py-3 sm:py-4 bg-primary text-dark font-bold rounded-xl hover:bg-primary-light shadow-lg hover:shadow-primary/50 transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{slide.buttonText}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </motion.a>
                  <motion.a
                    href={slide.secondaryButtonLink}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 sm:py-4 rounded-xl border-2 border-light/30 text-light font-bold backdrop-blur-sm hover:border-light hover:bg-light/10 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-light/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{slide.secondaryButtonText}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-light/20 to-light/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !bottom-6 sm:!bottom-8 !z-20 !px-4"></div>
        <div className="hidden sm:flex absolute-center-y left-3 sm:left-6 lg:left-12 z-20">
          <div className="swiper-button-prev after:!content-[''] !static !w-10 !h-10 sm:!w-12 sm:!h-12 lg:!w-14 lg:!h-14 !bg-dark/20 hover:!bg-dark/40 !backdrop-blur-md !rounded-full !text-light hover:!text-primary !shadow-lg hover:!shadow-primary/20 !transition-all !duration-300 !border !border-light/10 hover:!border-primary/30 !m-0 group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
        </div>
        <div className="hidden sm:flex absolute-center-y right-3 sm:right-6 lg:right-12 z-20">
          <div className="swiper-button-next after:!content-[''] !static !w-10 !h-10 sm:!w-12 sm:!h-12 lg:!w-14 lg:!h-14 !bg-dark/20 hover:!bg-dark/40 !backdrop-blur-md !rounded-full !text-light hover:!text-primary !shadow-lg hover:!shadow-primary/20 !transition-all !duration-300 !border !border-light/10 hover:!border-primary/30 !m-0 group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
