import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import nanoBananaDev from '../assets/nano_banana_dev.png';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema, ProfilePageSchema } from '../components/seo/StructuredData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const About = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Amity University',
      description: 'Specialized in Computer Science with a focus on data structures and algorithms. Built a strong foundation in software engineering principles and architectural patterns that define my current development philosophy.'
    },
    {
      year: 'Jan 2025',
      title: 'Codelevate',
      description: 'Architecting large-scale mobile applications using React Native. Focused on implementing atomic design systems, optimizing bridge communication, and achieving 60fps performance in complex UI environments.'
    },
    {
      year: 'Apr 2025',
      title: 'Easyian',
      description: 'Directing the transition to modular micro-frontends for mobile. Engineering reusable component libraries and cross-platform modules that reduced deployment times by 30% across multiple client projects.'
    },
    {
      year: 'Oct 2025',
      title: 'TruckMitr',
      description: 'Spearheading the mobile digital transformation for logistics operations. Developing low-latency real-time tracking solutions and offline-first data synchronization for field operatives in low-connectivity areas.'
    }
  ];

  return (
    <div className="w-full bg-white select-none">
      <SEOHead
        title="About Gagan Shukla — Flutter & React Native Developer | Software Engineer India"
        description="Learn about Gagan Shukla — a Full Stack Mobile App Developer with 2+ years experience in Flutter, React Native, and cross-platform development. AWS certified, 5+ production apps shipped, National App Design Winner."
        canonical="https://gaganshukla.in/about"
        keywords="About Gagan Shukla, Flutter Developer India, React Native Developer, Software Engineer, Mobile App Developer, Full Stack Developer, AWS Certified Developer, App Development Expert"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'About', url: 'https://gaganshukla.in/about' }
      ]} />
      <ProfilePageSchema />
      {/* Section 1: Introduction */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 md:pt-20 pb-section-padding">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-stack-md"
        >
          <motion.div variants={fadeUp} className="md:col-span-7 flex flex-col justify-center">
            <span className="font-label-mono text-label-mono text-primary tracking-[0.3em] mb-4">01</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8 text-on-surface leading-tight break-words">About Me</h1>
            <div className="hairline-h w-24 mb-8"></div>
            <p className="font-body-main text-body-main max-w-lg mb-12 text-on-surface-variant leading-relaxed">
              I am Gagan Shukla, a mobile developer dedicated to the intersection of architectural precision and high-performance engineering. My work focuses on building seamless user experiences through technical rigor and meticulous attention to visual detail.
            </p>
            
            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-y-12 border-t border-outline-variant pt-12">
              <div className="min-w-0">
                <h3 className="font-headline-md text-headline-md text-on-surface break-words">2+</h3>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">Years Experience</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-md text-headline-md text-on-surface break-words">5+</h3>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">Production Apps</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-md text-headline-md text-on-surface break-words">30-40%</h3>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">Performance Boost</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-headline-md text-headline-md text-on-surface break-words">2×</h3>
                <p className="font-label-mono text-label-mono uppercase text-on-surface-variant break-words">National Winner</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-[4/5] border border-outline-variant overflow-hidden bg-surface-container">
              <img loading="lazy"
                src={nanoBananaDev} 
                alt="Gagan Shukla - App Development Workspace with Nano Banana Mascot" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="absolute inset-0 border-[16px] border-white pointer-events-none shadow-inner"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hairline Divider */}
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="hairline-h"></div>
      </div>

      {/* Section 2: My Journey */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">My Journey</h2>
          <span className="font-label-mono text-label-mono text-on-surface-variant">EXPLORING THE TIMELINE OF GROWTH</span>
        </div>
        <div className="relative">
          {/* Vertical Line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant transform -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-24 relative">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Mobile layout: always left-aligned with left border */}
                <div className="block md:hidden pl-6 border-l-2 border-primary">
                  <span className="font-label-mono text-label-mono text-primary mb-1 block">{milestone.year}</span>
                  <h4 className="font-subhead-italic text-subhead-italic italic text-on-surface">{milestone.title}</h4>
                  <p className="font-body-main text-body-main text-on-surface-variant mt-2 leading-relaxed">{milestone.description}</p>
                </div>

                {/* Desktop alternating layout */}
                {idx % 2 === 0 ? (
                  <>
                    <div className="hidden md:block w-1/2 pr-16 text-right">
                      <span className="font-label-mono text-label-mono text-primary mb-2 block">{milestone.year}</span>
                      <h4 className="font-subhead-italic text-subhead-italic italic text-on-surface">{milestone.title}</h4>
                      <p className="font-body-main text-body-main text-on-surface-variant mt-2 leading-relaxed">{milestone.description}</p>
                    </div>
                    <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-on-surface transform -translate-x-1/2 rounded-full" />
                    <div className="hidden md:block w-1/2 pl-16" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block w-1/2 pr-16" />
                    <div className="hidden md:block absolute left-1/2 w-3 h-3 bg-on-surface transform -translate-x-1/2 rounded-full" />
                    <div className="hidden md:block w-1/2 pl-16">
                      <span className="font-label-mono text-label-mono text-primary mb-2 block">{milestone.year}</span>
                      <h4 className="font-subhead-italic text-subhead-italic italic text-on-surface">{milestone.title}</h4>
                      <p className="font-body-main text-body-main text-on-surface-variant mt-2 leading-relaxed">{milestone.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Certs & Awards */}
      <section className="bg-surface-container-low/50 py-section-padding">
        <div className="max-w-[1200px] mx-auto px-gutter">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="font-headline-md text-headline-md text-on-surface">Recognition</h2>
            <div className="hairline-h flex-grow"></div>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="bg-white border border-outline-variant p-8 hover:border-on-surface transition-colors duration-300 group flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 0"}}>military_tech</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">2024</span>
                </div>
                <h4 className="font-subhead-italic text-subhead-italic italic mb-4 text-on-surface">National App Design Winner</h4>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">Awarded for excellence in UI/UX architecture and performance benchmarks.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant group-hover:border-on-surface">
                <span className="font-label-mono text-[11px] uppercase tracking-widest text-primary cursor-pointer hover:underline">View Certificate</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="bg-white border border-outline-variant p-8 hover:border-on-surface transition-colors duration-300 group flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 0"}}>verified</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">2023</span>
                </div>
                <h4 className="font-subhead-italic text-subhead-italic italic mb-4 text-on-surface">AWS Certified Cloud Practitioner</h4>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">Deep expertise in scalable infrastructure and cloud-native mobile deployment.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant group-hover:border-on-surface">
                <span className="font-label-mono text-[11px] uppercase tracking-widest text-primary cursor-pointer hover:underline">View Credentials</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="bg-white border border-outline-variant p-8 hover:border-on-surface transition-colors duration-300 group flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 0"}}>workspace_premium</span>
                  <span className="font-label-mono text-label-mono text-on-surface-variant">2023</span>
                </div>
                <h4 className="font-subhead-italic text-subhead-italic italic mb-4 text-on-surface">Mobile Systems Excellence</h4>
                <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">Recognition for optimizing battery consumption and network efficiency in flagship apps.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant group-hover:border-on-surface">
                <span className="font-label-mono text-[11px] uppercase tracking-widest text-primary cursor-pointer hover:underline">View Award</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
