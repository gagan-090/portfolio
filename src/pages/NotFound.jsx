import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-20 px-gutter select-none">
      <SEOHead
        title="404: Page Not Found | Gagan Shukla"
        description="The page you are looking for does not exist or has been moved."
        canonical="https://gaganshukla.in/404"
      />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center"
      >
        <h1 className="font-headline-lg text-[120px] md:text-[200px] font-bold text-on-surface leading-none tracking-tighter mb-4">
          404
        </h1>
        <p className="font-body-main text-on-surface-variant text-xl md:text-2xl mb-10 max-w-md mx-auto">
          The page you're looking for seems to have vanished into the digital void.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-label-mono uppercase tracking-widest text-sm hover:bg-black transition-colors"
        >
          Return Home <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
