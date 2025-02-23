'use client';

import { Suspense, lazy } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Partners = lazy(() => import('./components/Partners'));
const Footer = lazy(() => import('./components/Footer'));
const AIAssistant = lazy(() => import('./components/AIAssistant'));
const BackToTopButton = lazy(() => import('./components/BackToTopButton'));

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
