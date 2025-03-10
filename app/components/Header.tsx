'use client';

import type { ReactElement, MouseEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2 } from '@tabler/icons-react';

interface MenuItem {
  href: string;
  label: string;
}

const Header = (): ReactElement => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // منع انتشار الحدث
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // إغلاق القائمة عند التمرير
      setIsMenuOpen(false);
    };

    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#partners', label: 'شركاؤنا' },
    { href: '#newsletter', label: 'تواصل معنا' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-dark/90 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              className="text-2xl font-bold text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              TOP MASTERY توب ماستري
            </motion.a>

            <nav className="hidden md:flex items-center gap-8 rtl:space-x-reverse">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-light hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center">
              <motion.button
                className="md:hidden p-2 rounded-full hover:bg-dark-light text-light transition-colors duration-300"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                aria-expanded={isMenuOpen}
              >
                <IconMenu2 
                  size={24} 
                  style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                  className="transition-transform duration-300"
                />
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="md:hidden absolute top-20 left-0 w-full bg-dark-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-light hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
