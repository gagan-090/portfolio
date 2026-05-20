import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { MarqueeTicker } from '../components/common/MarqueeTicker';
import { AbstractMockup } from '../components/ui/AbstractMockup';
import { StatCard } from '../components/ui/StatCard';
import { FeaturedProject } from '../components/ui/FeaturedProject';
import { fadeUp, fadeIn, staggerContainer } from '../utils/animations';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema } from '../components/seo/StructuredData';

export const Hero = () => {
  const navigate = useNavigate();
  const featuredProject = projectsData.find(p => p.featured) || projectsData[0];

  return (
    <div className="w-full bg-white select-none">
      <SEOHead
        title="Gagan Shukla — Flutter & React Native Developer | Full Stack App Developer Portfolio"
        description="Gagan Shukla is a Full Stack Mobile App Developer specializing in Flutter, React Native, and cross-platform development. 2+ years experience, 5+ production apps shipped. View portfolio, case studies, and hire for app development services."
        canonical="https://gaganshukla.in/"
        keywords="Gagan Shukla, Flutter Developer, React Native Developer, Full Stack Developer, App Developer, Software Engineer, Mobile App Developer, Developer Portfolio, Cross Platform Developer, App Development Services, Hire Flutter Developer"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' }
      ]} />
      {/* Hero Intro */}
      <section className="max-w-[1200px] mx-auto px-gutter pt-12 pb-stack-lg border-b border-outline-variant">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center mt-12 md:mt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column Text */}
          <motion.div className="col-span-12 md:col-span-7 flex flex-col justify-center" variants={fadeUp}>
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-[0.2em] block mb-4">
              Flutter & React Native Developer — Portfolio 2026
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 tracking-tighter leading-none">
              Gagan Shukla
            </h1>
            <p className="font-subhead-italic text-subhead-italic text-on-surface-variant italic mb-8 max-w-xl">
              Full Stack Mobile App Developer specializing in Flutter, React Native, and high-fidelity cross-platform systems that bridge precision and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => navigate('/work')}
                className="w-full sm:w-auto bg-[#0A0A0A] text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-primary transition-all duration-300"
              >
                View Portfolio
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto border border-[#0A0A0A] text-on-surface px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-[#F5F8FF] transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>

          {/* Right Column Abstract Graphic */}
          <motion.div className="col-span-12 md:col-span-5 flex justify-center items-center mt-12 md:mt-0" variants={fadeIn}>
            <AbstractMockup />
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee ticker */}
      <MarqueeTicker />

      {/* Statistics Section */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 justify-between">
          <StatCard label="Reach" value="3 Companies" />
          <StatCard label="Duration" value="2+ Years" />
          <StatCard label="Impact" value="5+ Shipped" />
        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-12">
          01 / SELECTED WORK
        </span>
        <FeaturedProject project={featuredProject} />
      </section>

      {/* Let's Work CTA */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface max-w-xl">
            Let's build the next big thing.
          </h2>
          <div className="flex flex-col gap-6">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full md:w-auto bg-[#0A0A0A] text-white px-12 py-6 font-label-mono text-label-mono uppercase tracking-widest text-center hover:bg-primary transition-all duration-300"
            >
              Get In Touch
            </button>
            <p className="font-body-main text-on-surface-variant text-center md:text-left">
              Available for remote contracts and full-time roles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
