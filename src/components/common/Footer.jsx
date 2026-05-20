import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter py-stack-lg flex flex-col md:flex-row justify-between items-start gap-stack-md">
        <div>
          <div className="font-headline-md text-headline-md font-bold text-on-surface mb-2">GS</div>
          <p className="font-label-mono text-label-mono text-on-surface-variant max-w-[300px]">© 2026 GAGAN SHUKLA. BUILT WITH PRECISION.</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest">Navigation</span>
          <div className="flex flex-col gap-2">
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4 uppercase tracking-widest" to="/about">About</Link>
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4 uppercase tracking-widest" to="/work">Work</Link>
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4 uppercase tracking-widest" to="/skills">Skills</Link>
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4 uppercase tracking-widest" to="/experience">Experience</Link>
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4 uppercase tracking-widest" to="/blog">Blog</Link>
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors underline decoration-1 underline-offset-4 uppercase tracking-widest" to="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest">Socials</span>
          <div className="flex gap-4">
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all duration-200" href="https://www.linkedin.com/in/gagan-shukla-2624b826b/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </a>
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all duration-200" href="https://github.com/gagan-090" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-on-surface hover:text-white transition-all duration-200" href="mailto:gaganshuklarmg@gmail.com">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
