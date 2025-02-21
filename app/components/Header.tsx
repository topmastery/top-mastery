'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', text: 'من نحن' },
    { href: '#services', text: 'خدماتنا' },
    { href: '#portfolio', text: 'معرض الأعمال' },
    { href: '#partners', text: 'شركاؤنا' },
    { href: '#newsletter', text: 'تواصل معنا' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-lg shadow-lg' : ''}`}>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          Top Mastery
        </a>

        {/* قائمة التنقل للشاشات الكبيرة */}
        <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.text}
            </a>
          ))}
        </div>

        {/* زر القائمة للهواتف */}
        <button
          className="md:hidden text-light hover:text-primary transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="القائمة"
        >
          {isMobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </nav>

      {/* القائمة المتحركة للهواتف */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-light/80 hover:text-primary transition-colors duration-300 border-b border-light/10 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
