import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter h-20 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
        >
          GS
        </NavLink>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              `font-body-main text-body-main transition-colors duration-200 pb-1 ${
                isActive 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) =>  
              `font-body-main text-body-main transition-colors duration-200 pb-1 ${
                isActive 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/work" 
            className={({ isActive }) => 
              `font-body-main text-body-main transition-colors duration-200 pb-1 ${
                isActive 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Work
          </NavLink>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => 
              `font-body-main text-body-main transition-colors duration-200 pb-1 ${
                isActive 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink 
            to="/experience" 
            className={({ isActive }) => 
              `font-body-main text-body-main transition-colors duration-200 pb-1 ${
                isActive 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Experience
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-body-main text-body-main transition-colors duration-200 pb-1 ${
                isActive 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-[#0A0A0A] text-white px-6 py-2.5 font-label-mono text-label-mono uppercase tracking-widest font-bold hover:bg-[#2563EB] transition-colors duration-200"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
};
export default Navbar;
