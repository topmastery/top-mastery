'use client';

import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading with priority
const Header = dynamic(() => import('./components/Header'), { ssr: true });
const Hero = dynamic(() => import('./components/Hero'), { ssr: true });

// Regular lazy loading
const About = dynamic(() => import('./components/About'));
const Services = dynamic(() => import('./components/Services'));
const Portfolio = dynamic(() => import('./components/Portfolio'));
const Partners = dynamic(() => import('./components/Partners'));
const Footer = dynamic(() => import('./components/Footer'));
const AIAssistant = dynamic(() => import('./components/AIAssistant'));
const BackToTopButton = dynamic(() => import('./components/BackToTopButton'));

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Partners />
      <AIAssistant />
      <Footer />
      <BackToTopButton />
    </Suspense>
  );
}
