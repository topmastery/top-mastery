import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // منع انتشار الحدث
    setIsOpen(!isOpen);
  };

  const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) {
        if (isMobile) {
          section.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false); // إغلاق القائمة بعد النقر على الرابط
        } else {
          section.scrollIntoView({ behavior: 'smooth' });
          router.push(pathname + href, { scroll: false });
          setIsOpen(false);
        }
      }
    }
  }, [router, pathname]);

  // إضافة مراقب للنقر على الشاشة
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
          setIsOpen(false);
        }
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  const menuItems = [
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#portfolio', label: 'أعمالنا' },
    { href: '#partners', label: 'شركاؤنا' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <>
      <button 
        onClick={handleMenuToggle}
        className="menu-button lg:hidden p-2 hover:bg-dark-light rounded-lg transition-colors duration-300"
        aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu fixed inset-x-0 top-[72px] bg-dark-light/95 backdrop-blur-lg shadow-xl lg:hidden z-50"
          >
            <nav className="container py-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="block px-4 py-2 text-lg hover:bg-dark/20 rounded-lg transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
