import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { StatCard } from '../components/ui/StatCard';
import { fadeUp } from '../utils/animations';

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  
  const filters = ['ALL', 'FLUTTER', 'REACT NATIVE'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter(p => p.type.toUpperCase() === activeFilter);

  return (
    <div className="w-full bg-white select-none">
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 pb-stack-lg border-b border-outline-variant">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md mt-12 md:mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-2">02</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Work</h1>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-16 mb-2">
            <StatCard label="Completed" value="4 Products" />
            <StatCard label="Availability" value="Immediate" />
          </div>
        </motion.div>
      </section>

      {/* Filter and Portfolio Grid */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 border-b border-outline-variant pb-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-label-mono text-[12px] uppercase tracking-widest px-6 py-2 transition-all duration-300 ${
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
                layout="position"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="border border-outline-variant p-6 flex flex-col justify-between group hover:border-on-surface transition-colors duration-300"
              >
                <div>
                  <div className="overflow-hidden border border-outline-variant mb-6 relative">
                    <div className="h-[250px] md:h-[300px] w-full bg-surface-container overflow-hidden flex items-center justify-center p-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[transform,filter] duration-500 ease-out"
                      />
                    </div>
                  </div>
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-secondary-container text-on-secondary-container px-2 py-0.5 font-label-mono text-[10px] border border-outline-variant">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                    <Link 
                      to={['truckmitr', 'hrms-crm', 'aura', 'tmconnect', 'hashkart'].includes(project.id) ? `/work/${project.id}` : project.link}
                      className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface hover:text-[#2563EB] transition-colors inline-flex items-center gap-2 group/btn"
                    >
                      View Project
                      <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform duration-300">arrow_forward</span>
                    </Link>
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
