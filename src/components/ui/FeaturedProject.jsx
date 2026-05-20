import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const FeaturedProject = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-outline-variant p-6 md:p-10 group hover:border-on-surface transition-colors duration-300 select-none">
      <div className="md:col-span-6 flex flex-col justify-center">
        <span className="font-label-mono text-[11px] text-[#2563EB] uppercase tracking-widest mb-4">
          Featured Project — {project.type}
        </span>
        <h3 className="font-headline-md text-3xl font-bold text-on-surface mb-4">
          {project.title}
        </h3>
        <p className="font-body-main text-on-surface-variant mb-6 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-mono text-[11px] border border-outline-variant">
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            to={['truckmitr', 'hrms-crm', 'aura', 'TMConnact', 'hashkart'].includes(project.id) ? `/work/${project.id}` : project.link}
            className="inline-flex items-center gap-2 font-label-mono text-label-mono uppercase tracking-widest text-on-surface hover:text-[#2563EB] transition-colors group/btn"
          >
            Explore Work
            <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform duration-300">arrow_forward</span>
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-mono text-label-mono uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              GitHub
            </a>
          )}
        </div>
      </div>

      <div className="md:col-span-6 overflow-hidden border border-outline-variant group-hover:border-on-surface transition-colors duration-300">
        <div className="h-[300px] md:h-[400px] w-full bg-surface-container overflow-hidden flex items-center justify-center p-4">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-[transform,filter] duration-500 ease-out"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedProject;
