import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home', end: true },
    { path: '/about', label: 'About' },
    { path: '/work', label: 'Work' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter h-20 flex justify-between items-center relative z-50">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
        >
          GS
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `font-body-main text-body-main transition-colors duration-200 pb-1 ${isActive
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/Gagan_Shukla_Resume_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Gagan_Shukla_Resume_.pdf"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Gagan_Shukla_Resume_.pdf';
              link.download = 'Gagan_Shukla_Resume_.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="hidden md:inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-5 py-2 font-label-mono text-[11px] uppercase tracking-widest font-bold hover:bg-[#2563EB] transition-colors duration-200"
          >
            Resume
            <span className="material-symbols-outlined text-[14px]">download</span>
          </a>

          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMenu}
            className="flex md:hidden flex-col justify-center items-center w-6 h-6 gap-1.5 focus:outline-none z-50 relative cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 transform origin-center ${isOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#0A0A0A] transition-all duration-300 transform origin-center ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute top-20 left-0 w-full bg-white border-b border-outline-variant shadow-lg md:hidden z-40 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.end}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block font-headline-sm text-headline-sm font-semibold transition-colors duration-200 py-2 border-b border-neutral-100 ${isActive
                        ? 'text-primary'
                        : 'text-on-surface-variant hover:text-primary'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                href="/Gagan_Shukla_Resume_.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Gagan_Shukla_Resume_.pdf"
                onClick={() => {
                  closeMenu();
                  const link = document.createElement('a');
                  link.href = '/Gagan_Shukla_Resume_.pdf';
                  link.download = 'Gagan_Shukla_Resume_.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full text-center bg-[#0A0A0A] text-white py-3 font-label-mono text-label-mono uppercase tracking-widest font-bold hover:bg-[#2563EB] transition-colors duration-200 mt-2 flex items-center justify-center gap-2"
              >
                Resume
                <span className="material-symbols-outlined text-[16px]">download</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

