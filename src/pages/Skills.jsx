import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsData, coreFocusCategories, toolsData } from '../data/skills';
import { StatCard } from '../components/ui/StatCard';
import { fadeUp, staggerContainer } from '../utils/animations';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema, ServiceSchema } from '../components/seo/StructuredData';

const SkillCategoryCard = ({ categoryName, skills }) => {
  return (
    <div className="border border-outline-variant p-8 bg-white flex flex-col justify-between hover:border-on-surface transition-colors duration-300 relative overflow-hidden">
      <div>
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant">
          <h3 className="font-headline-md text-xl font-bold tracking-tight text-on-surface uppercase">
            {categoryName}
          </h3>
          <span className="font-label-mono text-[10px] text-primary border border-outline-variant px-3 py-1">
            {skills.length} Areas
          </span>
        </div>
        <div className="space-y-8">
          {skills.map((skill, idx) => (
            <SkillBar key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const categories = ['Mobile Development', 'Frontend Systems', 'Cloud & Database'];

  return (
    <div className="w-full bg-white select-none">
      <SEOHead
        title="Technical Skills — Gagan Shukla | Flutter, React Native, Full Stack Development"
        description="Explore Gagan Shukla's technical skills: Flutter, React Native, React.js, Node.js, PostgreSQL, Firebase, Supabase, and cloud services. Clean architecture, cross-platform development expertise."
        canonical="https://gaganshukla.in/skills"
        keywords="Flutter Developer Skills, React Native Skills, Full Stack Developer Skills, Mobile Development, Cross Platform Development, JavaScript, Node.js, PostgreSQL, Firebase, Supabase, Clean Architecture, App Development Services"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'Skills', url: 'https://gaganshukla.in/skills' }
      ]} />
      <ServiceSchema services={[
        { name: 'Flutter App Development', description: 'Cross-platform iOS & Android mobile app development using Flutter and Dart with clean architecture', type: 'Mobile App Development' },
        { name: 'React Native Development', description: 'High-performance native mobile apps with React Native, Redux, and native bridge optimization', type: 'Mobile App Development' },
        { name: 'Full Stack Web Development', description: 'End-to-end web applications with React.js, Next.js, Node.js, and PostgreSQL', type: 'Web Development' },
        { name: 'UI/UX Engineering', description: 'Premium user interfaces with micro-animations, responsive design systems, and high-fidelity mockups', type: 'Design & Development' },
      ]} />
      {/* Header Section */}
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
            <StatCard label="Core Approach" value="Clean Architecture" />
            <StatCard label="Primary Stack" value="Cross-Platform" />
          </div>
        </motion.div>
      </section>

      {/* Core Capability Pillars */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <div className="mb-12">
          <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block">
            01 / CAPABILITY PILLARS
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {coreFocusCategories.map((pillar, idx) => (
            <div key={idx} className="border border-outline-variant p-6 hover:border-on-surface transition-all duration-300 bg-surface-container-lowest flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-[36px] text-primary mb-6 block group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </span>
                <h3 className="font-headline-md text-lg font-bold text-on-surface mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body-main text-xs text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <span className="font-label-mono text-[9px] text-white/0 group-hover:text-primary transition-colors duration-300 block mt-6 uppercase tracking-widest">
                Pillar 0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Structured Skills Grid */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant bg-[#FDFDFD]">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-2">
              02 / TECHNICAL PROFICIENCY
            </span>
            <p className="font-subhead-italic text-sm italic text-on-surface-variant">Surgically balanced engineering capability metrics across key stacks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <SkillCategoryCard 
              key={category}
              categoryName={category}
              skills={skillsData.filter(s => s.category === category)}
            />
          ))}
        </div>
      </section>

      {/* Environment Tools */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-12">
          03 / DEVELOPMENT TOOLS & PLATFORMS
        </span>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
          {toolsData.map((tool, idx) => (
            <div key={idx} className="border border-outline-variant p-6 flex flex-col items-center text-center justify-between hover:border-on-surface transition-colors duration-300 group bg-white">
              <span className="material-symbols-outlined text-[32px] text-[#2563EB] group-hover:scale-110 transition-transform duration-300 mb-4 block">
                {tool.icon}
              </span>
              <div>
                <h4 className="font-label-mono text-[10px] uppercase tracking-wider text-on-surface font-bold mb-1">
                  {tool.name}
                </h4>
                <span className="font-body-main text-[8px] text-on-surface-variant block uppercase tracking-widest">
                  {tool.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Skill Bar Component with animation and details subtext
const SkillBar = ({ skill }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="flex flex-col select-none">
      <div className="flex justify-between items-end mb-2">
        <div>
          <span className="font-body-main font-bold text-[14px] text-on-surface block">
            {skill.name}
          </span>
        </div>
        <span className="font-label-mono text-[10px] text-primary font-bold">
          {skill.level}%
        </span>
      </div>
      
      {/* Visual dynamic progress bar */}
      <div className="w-full h-1.5 bg-neutral-100 border border-outline-variant relative overflow-hidden mb-2">
        <motion.div 
          className="h-full bg-on-surface"
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      
      {/* Clear description detailing scope of competency */}
      <p className="text-[10px] text-on-surface-variant leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
};

export default Skills;
