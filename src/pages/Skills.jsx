import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { skillsData, coreFocusCategories, toolsData } from '../data/skills';
import AnimatedText from '../components/ui/AnimatedText';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import ParallaxSection from '../components/ui/ParallaxSection';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema, ServiceSchema } from '../components/seo/StructuredData';
import { fadeUp, staggerContainerSlow } from '../utils/animations';

// Categories grouping
const getCategories = () => {
  const categories = [...new Set(skillsData.map(s => s.category))];
  return categories;
};

// Skill Bar Component with dynamic drawing and spring counter
const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30, restDelta: 0.1 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(skill.level);
    }
  }, [isInView, skill.level, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="flex flex-col group select-none relative mb-10 last:mb-0">
      <div className="flex justify-between items-end mb-3 relative z-10">
        <div>
          <span className="font-headline-sm font-bold text-[16px] text-on-surface block group-hover:text-primary transition-colors duration-300">
            {skill.name}
          </span>
        </div>
        <div className="font-label-mono text-[12px] text-on-surface font-bold bg-white px-2 py-0.5 border border-outline-variant group-hover:border-primary group-hover:text-primary transition-colors duration-300">
          {displayValue}%
        </div>
      </div>
      
      {/* Visual dynamic progress bar */}
      <div className="w-full h-[2px] bg-outline-variant/30 relative mb-3 overflow-visible">
        {/* Glow follower */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-[8px] w-[8px] bg-primary rounded-full shadow-[0_0_10px_2px_rgba(37,99,235,0.4)]"
          initial={{ left: "0%", opacity: 0 }}
          animate={isInView ? { left: `calc(${skill.level}% - 4px)`, opacity: 1 } : { left: "0%", opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        />
        {/* Fill line */}
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
        />
      </div>
      
      <p className="font-body-main text-[11px] text-on-surface-variant leading-relaxed max-w-[85%] uppercase tracking-wide">
        {skill.desc}
      </p>
    </div>
  );
};

export const Skills = () => {
  const categories = getCategories();
  const heroRef = useRef(null);

  // Parallax for the hero background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full bg-white select-none overflow-hidden">
      <SEOHead
        title="Engineering Arsenal — Gagan Shukla | Flutter, React Native, Full Stack Development"
        description="Explore Gagan Shukla's technical skills: Flutter, React Native, React.js, Node.js, PostgreSQL, Firebase, Supabase, and cloud services."
        canonical="https://gaganshukla.in/skills"
        keywords="Flutter Developer Skills, React Native Skills, Full Stack Developer Skills, Mobile Development, Cross Platform Development, JavaScript, Node.js, PostgreSQL, Supabase, App Development Services"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'Skills', url: 'https://gaganshukla.in/skills' }
      ]} />
      <ServiceSchema services={[
        { name: 'Flutter App Development', description: 'Cross-platform iOS & Android mobile app development', type: 'Mobile App Development' },
        { name: 'React Native Development', description: 'High-performance native mobile apps with React Native', type: 'Mobile App Development' },
        { name: 'Full Stack Web Development', description: 'End-to-end web applications with Next.js and Supabase', type: 'Web Development' },
      ]} />

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 1 — CINEMATIC HERO                             */}
      {/* ════════════════════════════════════════════════════════ */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center pt-20 border-b border-outline-variant bg-grid-pattern"
      >
        <motion.div 
          className="max-w-[1200px] w-full mx-auto px-gutter relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="mb-6 overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 bg-surface-container-lowest border border-outline-variant px-4 py-2"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-label-mono text-[11px] text-on-surface uppercase tracking-widest">
                Technical Capabilities
              </span>
            </motion.div>
          </div>

          <AnimatedText 
            text="Engineering Arsenal"
            className="font-display-lg-mobile md:font-display-lg text-[48px] sm:text-[64px] md:text-[96px] leading-[0.9] tracking-tighter text-on-surface mb-8"
            splitBy="character"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-subhead-italic text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed italic"
          >
            A surgically balanced stack designed for scale, speed, and premium user experiences across mobile and web platforms.
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute right-0 bottom-0 p-gutter hidden md:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="font-display-lg text-[200px] leading-none tracking-tighter text-on-surface select-none pointer-events-none"
          >
            03
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 2 — CAPABILITY PILLARS (INTERACTIVE)           */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant relative">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-4">
              01 / Core Focus
            </span>
            <AnimatedText 
              text="Architectural Pillars"
              className="font-headline-md text-3xl md:text-4xl text-on-surface"
              splitBy="word"
            />
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {coreFocusCategories.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeUp}
              className="border border-outline-variant p-8 bg-white hover:bg-surface-container-lowest transition-colors duration-500 flex flex-col justify-between group relative overflow-hidden h-[320px]"
            >
              {/* Hover highlight line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 border border-outline-variant flex items-center justify-center rounded-none mb-8 group-hover:bg-primary group-hover:border-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-[28px] text-on-surface group-hover:text-white transition-colors duration-500">
                    {pillar.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body-main text-[13px] text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              
              <div className="relative z-10 flex justify-between items-center mt-auto pt-6 border-t border-outline-variant/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest">
                  Pillar 0{idx + 1}
                </span>
                <span className="material-symbols-outlined text-[16px] text-primary -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                  arrow_forward
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 3 — TECHNICAL PROFICIENCY (ANIMATED BARS)      */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="bg-[#FDFDFD] border-b border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-gutter py-section-padding">
          <div className="mb-20">
            <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-4">
              02 / Proficiency Matrix
            </span>
            <AnimatedText 
              text="Surgically Balanced Stack"
              className="font-headline-md text-3xl md:text-4xl text-on-surface mb-6"
              splitBy="word"
            />
            <p className="font-subhead-italic text-lg text-on-surface-variant max-w-2xl italic">
              Measured capability metrics across critical technologies, focusing on depth of understanding rather than superficial syntax knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {categories.map((category, catIdx) => {
              const categorySkills = skillsData.filter(s => s.category === category);
              return (
                <ParallaxSection key={category} offset={10 * (catIdx % 3)}>
                  <div className="flex flex-col h-full">
                    <div className="mb-10 flex items-center gap-4">
                      <div className="h-[1px] flex-grow bg-outline-variant"></div>
                      <h3 className="font-label-mono text-[11px] text-on-surface uppercase tracking-widest font-bold px-2">
                        {category}
                      </h3>
                      <div className="h-[1px] flex-grow bg-outline-variant"></div>
                    </div>
                    
                    <div className="bg-white border border-outline-variant p-8 md:p-10 flex-grow shadow-[4px_4px_0_0_rgba(0,0,0,0.03)] hover:shadow-[4px_4px_0_0_#2563EB] transition-shadow duration-500">
                      {categorySkills.map((skill, idx) => (
                        <SkillBar key={skill.name} skill={skill} index={idx} />
                      ))}
                    </div>
                  </div>
                </ParallaxSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 4 — TOOLS & WORKFLOW (MARQUEE RIBBON)          */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="py-24 border-b border-outline-variant overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-gutter mb-16 text-center">
          <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-4">
            03 / Workflow
          </span>
          <AnimatedText 
            text="Development Ecosystem"
            className="font-headline-md text-3xl md:text-4xl text-on-surface justify-center"
            splitBy="word"
          />
        </div>

        {/* Infinite scrolling tools ticker */}
        <div className="relative flex overflow-x-hidden group bg-surface-container-lowest py-6 md:py-8 border-y border-outline-variant">
          <div className="animate-marquee w-max flex items-center group-hover:[animation-play-state:paused]">
            {[...toolsData, ...toolsData, ...toolsData, ...toolsData].map((tool, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 md:gap-4 mx-3 md:mx-6 px-4 md:px-6 py-2 md:py-3 border border-outline-variant bg-white hover:border-primary transition-colors duration-300 min-w-[200px] md:min-w-fit"
              >
                <span className="material-symbols-outlined text-[20px] md:text-[24px] text-primary">
                  {tool.icon}
                </span>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] md:text-[11px] font-bold text-on-surface uppercase tracking-wider">
                    {tool.name}
                  </span>
                  <span className="font-body-main text-[8px] md:text-[9px] text-on-surface-variant uppercase tracking-widest truncate">
                    {tool.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 flex flex-col items-center justify-center bg-white text-center px-gutter">
        <p className="font-label-mono text-[11px] text-on-surface-variant uppercase tracking-widest mb-6">
          Ready to build?
        </p>
        <AnimatedText 
          text="Let's craft your next product."
          className="font-display-lg text-[32px] md:text-[56px] tracking-tight text-on-surface mb-12 justify-center"
          splitBy="word"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/contact" className="inline-block border border-on-surface bg-white text-on-surface px-12 py-4 font-label-mono text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-on-surface hover:text-white transition-all duration-300">
            Start a Conversation
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
