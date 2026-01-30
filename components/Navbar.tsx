
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: Page.Home },
    { label: 'Services', id: Page.Services },
    { label: 'How It Works', id: Page.HowItWorks },
    { label: 'Centers', id: Page.ForCenters },
    { label: 'About', id: Page.About },
  ];

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-black/5 py-4 border-b border-gray-100' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Bilingual Premium Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => handleNavClick(Page.Home)}
        >
          <div className="relative">
            <div className="w-14 h-14 bg-[#0F7C5C] flex items-center justify-center rounded-2xl shadow-xl transform group-hover:scale-110 transition-all duration-500 overflow-hidden ring-4 ring-[#E6F4EF]">
              <span className="text-white font-black text-3xl font-poppins relative z-10">L</span>
              <div className="absolute top-0 right-0 w-7 h-7 bg-[#C9A24D]/30 -mr-3 -mt-3 rotate-45" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#C9A24D] rounded-full border-2 border-white shadow-sm" />
          </div>

          <div className="ml-4 flex flex-col justify-center leading-none">
            <span className="text-3xl font-black tracking-tighter font-poppins text-gray-900 transition-colors">
              LetaaX
            </span>
            <span className="text-xs font-bold font-arabic mt-0.5 text-[#0F7C5C] opacity-80 uppercase tracking-widest">
              ليتاكس للخدمات
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-8 mr-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-[13px] font-black uppercase tracking-[0.1em] transition-all relative py-2 ${activePage === link.id
                  ? 'text-[#0F7C5C]'
                  : 'text-gray-900 hover:text-[#0F7C5C]'
                  }`}
              >
                {link.label}
                {activePage === link.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0F7C5C] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918089922373"
            className="bg-[#0F7C5C] text-white px-8 py-3.5 rounded-2xl text-[13px] font-black uppercase tracking-widest hover:bg-[#0B5E46] transition-all shadow-xl shadow-[#0F7C5C]/20 flex items-center space-x-3"
          >
            <span>Apply Now</span>
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 bg-gray-50 rounded-2xl shadow-inner active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="text-gray-900 w-6 h-6" /> : <Menu className="text-gray-900 w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl"
          >
            <div className="px-6 py-10 flex flex-col space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-xl font-black uppercase tracking-widest ${activePage === link.id ? 'text-[#0F7C5C]' : 'text-gray-900'
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px w-full bg-gray-100" />
              <a
                href="https://wa.me/918089922373"
                className="bg-[#0F7C5C] text-white px-8 py-5 rounded-3xl font-black uppercase tracking-widest text-center block shadow-2xl shadow-[#0F7C5C]/20 text-lg"
              >
                Apply / Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
