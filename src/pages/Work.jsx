import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { StatCard } from '../components/ui/StatCard';
import { fadeUp } from '../utils/animations';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema } from '../components/seo/StructuredData';

const TechStackBanner = ({ type }) => {
  const isFlutter = type.toUpperCase() === 'FLUTTER';

  return (
    <div className="w-full h-full bg-[#0A0A0A] flex flex-col items-center justify-center relative p-8 select-none overflow-hidden group">
      {/* Background radial highlight — GPU composited via opacity only */}
      <div
        className={`absolute w-48 h-48 rounded-full blur-[80px] opacity-15 pointer-events-none ${isFlutter ? 'bg-[#0284C7]' : 'bg-[#0891B2]'}`}
        style={{ willChange: 'opacity' }}
      />

      {isFlutter ? (
        <svg
          viewBox="0 0 2000 2000"
          className="w-20 h-20 filter drop-shadow-[0_0_15px_rgba(2,132,199,0.3)]"
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
        >
          <path fill="#47C5FB" d="M1411.3 759.2L915.2 263.1H0l683 683.1L0 1629.3h915.2l496.1-496.1 496.1-496.1-496.1 122.1z" />
          <path fill="#02569B" d="M1411.3 759.2l-496.1 496.1 496.1 496.1H1907l-495.7-496.1 495.7-496.1h-495.7z" />
          <path fill="#0175C2" d="M915.2 1255.3L419.1 1751.4H0l683-683.1 232.2 187z" />
        </svg>
      ) : (
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className="w-20 h-20 text-[#0891B2] filter drop-shadow-[0_0_15px_rgba(8,145,178,0.3)]"
          fill="none"
          stroke="currentColor"
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
        >
          <circle cx="0" cy="0" r="2.05" fill="#0891B2" stroke="none" />
          <g stroke="#0891B2" strokeWidth="0.8">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )}

      <span className="font-label-mono text-[10px] text-white/50 uppercase tracking-[0.2em] mt-6 block">
        {type.toUpperCase()} Developer
      </span>
    </div>
  );
};

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'FLUTTER', 'REACT NATIVE'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.type.toUpperCase() === activeFilter);

  return (
    <div className="w-full bg-white select-none">
      <SEOHead
        title="Portfolio & Case Studies — Gagan Shukla | Flutter & React Native Projects"
        description="Explore Gagan Shukla's portfolio of production mobile apps built with Flutter and React Native. Case studies include e-commerce, logistics, HRMS, and lifestyle platforms."
        canonical="https://gaganshukla.in/work"
        keywords="Gagan Shukla Portfolio, Flutter Projects, React Native Projects, Mobile App Case Studies, App Development Portfolio, Flutter Portfolio, Developer Portfolio, Cross Platform Apps"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'Work', url: 'https://gaganshukla.in/work' }
      ]} />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 pb-stack-lg border-b border-outline-variant">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-stack-md mt-12 md:mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-2">02</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Work</h1>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-16 mb-2">
            <StatCard label="Completed" value={`${projectsData.length} Products`} />
            <StatCard label="Availability" value="Immediate" />
          </div>
        </motion.div>
      </section>

      {/* Filter and Portfolio Grid */}
      <section className="max-w-[1200px] mx-auto px-gutter py-16 md:py-[120px]">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 border-b border-outline-variant pb-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-label-mono text-[12px] uppercase tracking-widest px-6 py-2 transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-on-surface text-surface'
                  : 'border border-outline-variant hover:border-on-surface'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                /* isolate = new stacking context; transform-gpu = own compositor layer */
                className="isolate border border-outline-variant p-6 flex flex-col justify-between group"
                style={{ willChange: 'opacity, transform', backfaceVisibility: 'hidden' }}
              >
                {/* Inner wrapper handles the border-color transition so the card itself is untouched */}
                <div
                  className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-on-surface pointer-events-none"
                  style={{ backfaceVisibility: 'hidden' }}
                />

                <div>
                  {/* Image container */}
                  <div className="overflow-hidden border border-outline-variant mb-6 relative">
                    <div className="h-[250px] md:h-[300px] w-full bg-surface-container overflow-hidden flex items-center justify-center">
                      {['truckmitr', 'TMConnact', 'hrms-crm'].includes(project.id) ? (
                        <TechStackBanner type={project.type} />
                      ) : (
                        <div className="p-4 w-full h-full flex items-center justify-center">
                          <img
                            loading="lazy"
                            src={project.image}
                            alt={project.title}
                            /* Only animate transform + opacity — both GPU composited */
                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[transform,filter] duration-500 ease-out"
                            style={{ willChange: 'transform, filter', backfaceVisibility: 'hidden' }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title row */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-md text-2xl font-bold text-on-surface">
                      {project.title}
                    </h3>
                    <span className="font-label-mono text-[10px] text-primary border border-outline-variant px-3 py-1">
                      {project.type.toUpperCase()}
                    </span>
                  </div>

                  <p className="font-body-main text-[14px] text-on-surface-variant leading-relaxed mb-6">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-secondary-container text-on-secondary-container px-2 py-0.5 font-label-mono text-[10px] border border-outline-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                    <Link
                      to={
                        ['truckmitr', 'hrms-crm', 'aura', 'TMConnact', 'hashkart', 'glowcart'].includes(project.id)
                          ? `/work/${project.id}`
                          : project.link
                      }
                      className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface hover:text-[#2563EB] transition-colors inline-flex items-center gap-2 group/btn"
                    >
                      View Project
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ display: 'inline-block', willChange: 'transform', backfaceVisibility: 'hidden', transition: 'transform 300ms ease' }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0px)'; }}
                      >
                        arrow_forward
                      </span>
                    </Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source on GitHub"
                        className="text-on-surface-variant hover:text-primary transition-colors duration-200 flex items-center justify-center w-8 h-8"
                        style={{ willChange: 'color', backfaceVisibility: 'hidden' }}
                      >
                        <span className="material-symbols-outlined text-[20px]" style={{ lineHeight: 1 }}>code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
export default Work;
