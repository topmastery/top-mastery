'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import BackToTopButton from './components/BackToTopButton';

export default function Home() {
  return (
    <>
      <About />
      <Services />
    </>
  );
}
