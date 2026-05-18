import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData, coreFocusCategories, toolsData } from '../data/skills';
import { StatCard } from '../components/ui/StatCard';
import { fadeUp } from '../utils/animations';

export const Skills = () => {
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
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest block mb-2">03</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">Skills</h1>
          </div>
          <div className="flex flex-wrap gap-8 md:gap-16 mb-2">
            <StatCard label="Methodology" value="Clean Architecture" />
            <StatCard label="Stack" value="Cross-Platform" />
          </div>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Focus Categories */}
          <div className="md:col-span-5">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-8">
              01 / CORE FOCUS
            </span>
            <div className="space-y-6">
              {coreFocusCategories.map((category, idx) => (
                <div key={idx} className="border border-outline-variant p-6 hover:border-on-surface transition-colors duration-300">
                  <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest block mb-2">
                    Focus Area 0{idx + 1}
                  </span>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface">
                    {category}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skill Bars */}
          <div className="md:col-span-7">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-8">
              02 / PROFICIENCY
            </span>
            <div className="space-y-8">
              {skillsData.map((skill, idx) => (
                <SkillBar key={idx} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environment Tools */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-12">
          03 / DEVELOPMENT TOOLS
        </span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {toolsData.map((tool, idx) => (
            <div key={idx} className="border border-outline-variant p-8 flex flex-col items-center text-center justify-center hover:border-on-surface transition-colors duration-300 group">
              <span className="material-symbols-outlined text-[40px] text-[#2563EB] group-hover:scale-110 transition-transform duration-300 mb-4 block">
                {tool.icon}
              </span>
              <h4 className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface">
                {tool.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Inner helper component to isolate observer states cleanly
const SkillBar = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="flex flex-col select-none">
      <div className="flex justify-between items-center mb-2">
        <span className="font-headline-md text-lg font-bold text-on-surface">
          {skill.name}
        </span>
        <span className="font-label-mono text-label-mono text-primary font-bold">
          {skill.level}%
        </span>
      </div>
      <div className="w-full h-2 bg-secondary-container border border-outline-variant relative">
        <motion.div 
          className="h-full bg-on-surface"
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
};
export default Skills;
