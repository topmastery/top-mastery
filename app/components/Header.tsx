'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#partners', label: 'شركاؤنا' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            TOP MASTERY توب ماستري
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-light/80 hover:text-primary transition-all duration-300
                         relative after:content-[''] after:absolute after:bottom-0 
                         after:left-0 after:w-0 after:h-0.5 after:bg-primary 
                         after:transition-all after:duration-300 hover:after:w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-dark-light text-light 
                     transition-all duration-300 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-md md:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-20 right-0 w-full max-w-sm h-[calc(100vh-5rem)] 
                        bg-dark-light border-l border-light/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-lg text-light/80 hover:text-primary
                               rounded-lg hover:bg-dark transition-all duration-300 
                               relative overflow-hidden group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent
                                 -z-10 transform -translate-x-full group-hover:translate-x-0
                                 transition-transform duration-300"
                      />
                    </a>
                  </motion.div>
                ))}
              </div>
              
              {/* Bottom Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-light/10">
                <a
                  href="#newsletter"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-3 px-6 bg-primary text-dark font-bold
                           rounded-lg text-center hover:bg-primary-light 
                           transition-colors duration-300"
                >
                  تواصل معنا
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
