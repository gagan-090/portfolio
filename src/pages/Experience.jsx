import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { StatCard } from '../components/ui/StatCard';
import { fadeUp } from '../utils/animations';

export const Experience = () => {
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
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-2">04</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Experience</h1>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-16 mb-2">
            <StatCard label="Reach" value="3 Companies" />
            <StatCard label="Duration" value="2 Years+" />
            <StatCard label="Impact" value="5+ Shipped" />
          </div>
        </motion.div>
      </section>

      {/* Experience List */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding space-y-24">
        {experienceData.map((job) => (
          <div key={job.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group">
            {/* Left Sticky Column */}
            <div className="md:col-span-4 md:sticky md:top-32">
              <span className="font-label-mono text-label-mono text-on-surface-variant block mb-4">
                {job.duration}
              </span>
              <h2 className="font-headline-md text-3xl font-bold text-on-surface group-hover:text-primary transition-colors duration-300">
                {job.company}
              </h2>
              <p className="font-subhead-italic text-subhead-italic text-on-surface-variant italic mt-2">
                {job.role}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {job.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-mono text-[11px] border border-outline-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column Contributions */}
            <div className="md:col-span-8 md:border-l border-outline-variant md:pl-12 py-4 select-none">
              <ul className="space-y-6 font-body-main text-body-main text-on-surface-variant leading-relaxed">
                {job.contributions.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-4">
                    <span className="text-primary mt-1.5 flex-shrink-0">
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              
              {/* Optional Job Project Mockup Visual */}
              {job.image && (
                <div className="mt-12 overflow-hidden border border-outline-variant group-hover:border-on-surface transition-colors duration-300">
                  <img 
                    src={job.image} 
                    alt={job.company} 
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700 h-[300px] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default Experience;
