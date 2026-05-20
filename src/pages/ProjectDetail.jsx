import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema, SoftwareAppSchema, ProjectSchema } from '../components/seo/StructuredData';

// Import AURA local images
import auraHero from '../assets/Aura/home.jpeg';
import auraLogin from '../assets/Aura/login.jpeg';
import auraImg1 from '../assets/Aura/aura1.jpeg';
import auraImg2 from '../assets/Aura/aura2.jpeg';
import auraImg3 from '../assets/Aura/aura3.jpeg';

// Import HashKart local images
import hashkartHero from '../assets/hashkart/hashkart.jpeg';
import hashkartImg1 from '../assets/hashkart/hashkart1.jpeg';
import hashkartImg2 from '../assets/hashkart/hashkart2.jpeg';
import hashkartImg3 from '../assets/hashkart/hashkart3.jpeg';
import hashkartImg4 from '../assets/hashkart/hashkart4.jpeg';

// Import GlowCart local images
import glowcartHero from '../assets/GlowCart/home.jpeg';
import glowcartImg1 from '../assets/GlowCart/glowcart1.jpeg';
import glowcartImg2 from '../assets/GlowCart/glowcart2.jpeg';
import glowcartImg3 from '../assets/GlowCart/glowcart3.jpeg';
import glowcartImg4 from '../assets/GlowCart/glowcart4.jpeg';
import glowcartImg5 from '../assets/GlowCart/glowcart5.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const TechStackHero = ({ type }) => {
  const isFlutter = type.toUpperCase() === 'FLUTTER';

  return (
    <div className="relative w-full aspect-[16/9] bg-[#0A0A0A] border border-outline-variant flex flex-col items-center justify-center p-8 overflow-hidden group select-none">
      {/* Background radial highlight */}
      <div className={`absolute w-72 h-72 rounded-full blur-[100px] opacity-15 pointer-events-none transition-transform duration-1000 group-hover:scale-150 ${isFlutter ? 'bg-[#0284C7]' : 'bg-[#0891B2]'}`}></div>

      {isFlutter ? (
        <svg viewBox="0 0 2000 2000" className="w-24 h-24 filter drop-shadow-[0_0_20px_rgba(2,132,199,0.3)] transition-transform duration-500 group-hover:scale-110">
          <path fill="#47C5FB" d="M1411.3 759.2L915.2 263.1H0l683 683.1L0 1629.3h915.2l496.1-496.1 496.1-496.1-496.1 122.1z" />
          <path fill="#02569B" d="M1411.3 759.2l-496.1 496.1 496.1 496.1H1907l-495.7-496.1 495.7-496.1h-495.7z" />
          <path fill="#0175C2" d="M915.2 1255.3L419.1 1751.4H0l683-683.1 232.2 187z" />
        </svg>
      ) : (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-24 h-24 text-[#0891B2] filter drop-shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#0891B2" stroke="none" />
          <g stroke="#0891B2" strokeWidth="0.8">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )}

      <span className="font-label-mono text-[10px] text-white/40 uppercase tracking-[0.25em] mt-8 block group-hover:text-white/70 transition-colors duration-300">
        Enterprise Production Stack // {type.toUpperCase()}
      </span>
      <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none"></div>
    </div>
  );
};

const AuraDetail = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    {/* Hero Section */}
    <header className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 items-end mb-12 pt-8">
        <div className="col-span-12 md:col-span-8">
          <p className="font-label-mono text-label-mono text-primary mb-4 uppercase tracking-[0.2em]">Case Study 01</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.9] text-on-surface">AURA:<br />Experiential Booking</h1>
        </div>
        <div className="col-span-12 md:col-span-4 pb-4">
          <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant">Seamless travel destination, live social events, and romantic couple date concierge crafted with Flutter.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeUp} className="relative w-full aspect-[16/9] bg-surface-container border border-outline-variant flex items-center justify-center p-8 group overflow-hidden">
        <img
          src={auraHero}
          alt="AURA Lifestyle App Showcase"
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none"></div>
      </motion.div>
    </header>

    {/* Stats Hairline Row */}
    <motion.div variants={fadeUp} className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Role</span>
          <span className="font-body-main font-bold text-on-surface">Flutter Developer</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Duration</span>
          <span className="font-body-main font-bold text-on-surface">4 Months</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Platforms</span>
          <span className="font-body-main font-bold text-on-surface">iOS & Android</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Key Tech</span>
          <span className="font-body-main font-bold text-on-surface">Flutter, Riverpod, Maps API</span>
        </div>
      </div>
    </motion.div>

    {/* Section 1: The Brief */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">The Experience Engine</h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
          <p className="font-subhead-italic text-subhead-italic text-on-surface-variant leading-relaxed">
            AURA simplifies lifestyle scheduling by uniting travel, ticketing, and social event discovery under one premium interface.
          </p>
          <div className="hairline-b pb-8">
            <p className="font-body-main text-lg text-on-surface leading-loose">
              Modern lifestyle apps are often fragmented—users must jump between search engines, event listings, and dining platforms. AURA elegantly resolves this by designing a beautiful concierge engine. Users can book exotic tour routes, buy tickets for major local events, schedule custom couple dates, and find creative weekend activities in one unified booking dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">explore</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Tours & Getaways</h3>
              <p className="text-xs text-on-surface-variant">Seamless slots, travel guides, and route maps for premium local getaways.</p>
            </div>
            <div className="p-6 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">local_activity</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Social Events</h3>
              <p className="text-xs text-on-surface-variant">Live tickets, calendar schedules, and interactive seating selections.</p>
            </div>
            <div className="p-6 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">favorite</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Couple Dates</h3>
              <p className="text-xs text-on-surface-variant">Curated romantic planners, dinner bookings, and creative activity lists.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Section 2: Mobile Interface Showcase (Simulated Phone Screens) */}
    <section className="bg-surface-container py-[100px] border-y border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <motion.div variants={fadeUp} className="mb-16 text-center md:text-left">
          <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Interface Showcase</h2>
          <p className="font-label-mono text-label-mono text-primary uppercase tracking-widest">High-Fidelity App Journey in Custom Device Simulators</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Mockup 1: Auth Screen */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={auraLogin} alt="AURA Login Interface" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">1. Auth Portal</span>
          </motion.div>

          {/* Mockup 2: Home Feed */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={auraHero} alt="AURA Home Interface" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">2. Experience Hub</span>
          </motion.div>

          {/* Mockup 3: Tour Detail */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={auraImg1} alt="AURA Destination Discovery" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">3. Tour Discovery</span>
          </motion.div>

          {/* Mockup 4: Date Customization */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={auraImg2} alt="AURA Date Scheduling" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">4. Event Details</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Section 3: Detailed Experience Planning */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-headline-md text-headline-md mb-6 text-on-surface">Curated Itinerary Flow</h2>
          <p className="font-subhead-italic text-subhead-italic mb-8 text-on-surface-variant">High-performance reactive state management synchronizes ticket availability live.</p>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-[28px]">calendar_month</span>
              <div>
                <h4 className="font-bold text-on-surface text-base mb-1">Multi-Tier Event Schedules</h4>
                <p className="text-sm text-on-surface-variant">Real-time web integrations feed instant slot locks, group seating numbers, and booking reminders instantly to users.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-[28px]">map</span>
              <div>
                <h4 className="font-bold text-on-surface text-base mb-1">Curated Travel & Getaways</h4>
                <p className="text-sm text-on-surface-variant">Custom maps layers display guides, routes, local activities, and recommended stops dynamically compiled by experts.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-start-8 md:col-span-5 flex flex-col items-center">
          <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
            </div>
            <img loading="lazy" src={auraImg3} alt="AURA Couples Planner Interface" className="w-full h-full object-contain" />
          </div>
          <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">5. Booking Success Portal</span>
        </div>
      </motion.div>
    </section>

    {/* Footer Call to Action */}
    <section className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-16 text-center">
        <p className="font-label-mono text-label-mono mb-6 uppercase tracking-[0.3em] text-white/50">Next Project</p>
        <h2 className="font-headline-md text-headline-md mb-10 text-white">GlowCart: Cosmetics Store</h2>
        <Link to="/work/glowcart" className="inline-flex items-center gap-4 font-subhead-italic text-2xl italic hover:text-primary transition-colors text-white">
          View Case Study <span className="material-symbols-outlined text-white">arrow_forward</span>
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

const GlowCartDetail = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    {/* Hero Section */}
    <header className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 items-end mb-12 pt-8">
        <div className="col-span-12 md:col-span-8">
          <p className="font-label-mono text-label-mono text-primary mb-4 uppercase tracking-[0.2em]">Case Study 02</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.9] text-on-surface">GlowCart:<br />Online Cosmetics App</h1>
        </div>
        <div className="col-span-12 md:col-span-4 pb-4">
          <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant">A custom, premium online cosmetic product e-commerce app built from scratch in Flutter.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeUp} className="relative w-full aspect-[16/9] bg-surface-container border border-outline-variant flex items-center justify-center p-8 group overflow-hidden">
        <img
          src={glowcartHero}
          alt="GlowCart Hero Showcase"
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none"></div>
      </motion.div>
    </header>

    {/* Stats Hairline Row */}
    <motion.div variants={fadeUp} className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Role</span>
          <span className="font-body-main font-bold text-on-surface">Creator & Lead Architect</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Duration</span>
          <span className="font-body-main font-bold text-on-surface">3 Months</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Platform</span>
          <span className="font-body-main font-bold text-on-surface">iOS & Android</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Key Tech</span>
          <span className="font-body-main font-bold text-on-surface">Flutter, Riverpod, SQLite</span>
        </div>
      </div>
    </motion.div>

    {/* Section 1: The Brief */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">The Cosmetic Shop Experience</h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
          <p className="font-subhead-italic text-subhead-italic text-on-surface-variant leading-relaxed">
            GlowCart redefines cosmetics shopping with visual richness, pre-cached product listings, and an extremely responsive shopping bag interface.
          </p>
          <div className="hairline-b pb-8">
            <p className="font-body-main text-lg text-on-surface leading-loose">
              E-commerce platforms for beauty products must look and feel exceptionally high-end. High resolution rendering, accurate product textures, and lag-free category filters are mandatory to win buyer trust. GlowCart addresses this with an optimized Flutter catalog framework, allowing quick item previews, interactive beauty blogs, fluid animations, and a seamless local checkout database that functions offline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">shopping_bag</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Premium Catalog Layouts</h3>
              <p className="text-sm text-on-surface-variant">Carefully arranged grid displays tailored to highlight colors, skin routines, and makeup variations.</p>
            </div>
            <div className="p-8 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">favorite_border</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Interactive Skincare Routines</h3>
              <p className="text-sm text-on-surface-variant">Allows users to curate customized skincare routines and add all steps to the checkout cart with one click.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Section 2: Mobile Interface Showcase (Simulated Phone Screens) */}
    <section className="bg-surface-container py-[100px] border-y border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <motion.div variants={fadeUp} className="mb-16 text-center md:text-left">
          <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Interface Showcase</h2>
          <p className="font-label-mono text-label-mono text-primary uppercase tracking-widest">GlowCart High-Fidelity App Showcase</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
          {/* Mockup 1 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[30px] border-[6px] border-[#0A0A0A] bg-white p-1 shadow-xl overflow-hidden max-w-[210px] h-[420px] flex flex-col items-center justify-center">
              <img loading="lazy" src={glowcartImg1} alt="GlowCart Screen 1" className="w-full h-full object-cover" />
            </div>
            <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant mt-3 text-center">1. Welcome splash</span>
          </motion.div>

          {/* Mockup 2 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[30px] border-[6px] border-[#0A0A0A] bg-white p-1 shadow-xl overflow-hidden max-w-[210px] h-[420px] flex flex-col items-center justify-center">
              <img loading="lazy" src={glowcartImg2} alt="GlowCart Screen 2" className="w-full h-full object-cover" />
            </div>
            <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant mt-3 text-center">2. Product list</span>
          </motion.div>

          {/* Mockup 3 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[30px] border-[6px] border-[#0A0A0A] bg-white p-1 shadow-xl overflow-hidden max-w-[210px] h-[420px] flex flex-col items-center justify-center">
              <img loading="lazy" src={glowcartImg3} alt="GlowCart Screen 3" className="w-full h-full object-cover" />
            </div>
            <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant mt-3 text-center">3. Product detail</span>
          </motion.div>

          {/* Mockup 4 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[30px] border-[6px] border-[#0A0A0A] bg-white p-1 shadow-xl overflow-hidden max-w-[210px] h-[420px] flex flex-col items-center justify-center">
              <img loading="lazy" src={glowcartImg4} alt="GlowCart Screen 4" className="w-full h-full object-cover" />
            </div>
            <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant mt-3 text-center">4. Shopping cart</span>
          </motion.div>

          {/* Mockup 5 */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[30px] border-[6px] border-[#0A0A0A] bg-white p-1 shadow-xl overflow-hidden max-w-[210px] h-[420px] flex flex-col items-center justify-center">
              <img loading="lazy" src={glowcartImg5} alt="GlowCart Screen 5" className="w-full h-full object-cover" />
            </div>
            <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant mt-3 text-center">5. Profile</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Footer Call to Action */}
    <section className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-16 text-center">
        <p className="font-label-mono text-label-mono mb-6 uppercase tracking-[0.3em] text-white/50">Next Project</p>
        <h2 className="font-headline-md text-headline-md mb-10 text-white">HashKart: Flutter E-Commerce</h2>
        <Link to="/work/hashkart" className="inline-flex items-center gap-4 font-subhead-italic text-2xl italic hover:text-primary transition-colors text-white">
          View Case Study <span className="material-symbols-outlined text-white">arrow_forward</span>
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

const HashKartDetail = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    {/* Hero Section */}
    <header className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 items-end mb-12 pt-8">
        <div className="col-span-12 md:col-span-8">
          <p className="font-label-mono text-label-mono text-primary mb-4 uppercase tracking-[0.2em]">Case Study 03</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.9] text-on-surface">HashKart:<br />E-Commerce Solution</h1>
        </div>
        <div className="col-span-12 md:col-span-4 pb-4">
          <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant">High-performance e-commerce engine with Stripe and a reactive Rust-based backend analytics core.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeUp} className="relative w-full aspect-[16/9] bg-surface-container border border-outline-variant flex items-center justify-center p-8 group overflow-hidden">
        <img
          src={hashkartHero}
          alt="HashKart Showcase Mockup"
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none"></div>
      </motion.div>
    </header>

    {/* Stats Hairline Row */}
    <motion.div variants={fadeUp} className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Role</span>
          <span className="font-body-main font-bold text-on-surface">Lead Mobile Architect</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Duration</span>
          <span className="font-body-main font-bold text-on-surface">4 Months</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Platforms</span>
          <span className="font-body-main font-bold text-on-surface">iOS & Android</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Key Tech</span>
          <span className="font-body-main font-bold text-on-surface">Flutter, Rust, Stripe SDK</span>
        </div>
      </div>
    </motion.div>

    {/* Section 1: The Brief */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Full-Stack E-Commerce Engine</h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
          <p className="font-subhead-italic text-subhead-italic text-on-surface-variant leading-relaxed">
            HashKart was built to deliver lightning-fast item browsing and instant Stripe transactions for millions of retail buyers.
          </p>
          <div className="hairline-b pb-8">
            <p className="font-body-main text-lg text-on-surface leading-loose">
              Modern digital shoppers expect seamless rendering and immediate checkout confirmation. HashKart fulfills this expectation through a high-performance rendering stack. It supports real-time multi-resolution image rendering galleries, seamless checkout configurations via Stripe API integrations, and robust real-time synchronization with a blazing fast Rust-based analytics inventory backend.
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Section 2: Mobile Interface Showcase (Simulated Phone Screens) */}
    <section className="bg-surface-container py-[100px] border-y border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <motion.div variants={fadeUp} className="mb-16 text-center md:text-left">
          <h2 className="font-headline-md text-headline-md mb-4 text-on-surface">Interface Showcase</h2>
          <p className="font-label-mono text-label-mono text-primary uppercase tracking-widest">High-Fidelity App Journey in Custom Device Simulators</p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Mockup 1: Feed Portal */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={hashkartHero} alt="HashKart Product Listing" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">1. Main Marketplace Feed</span>
          </motion.div>

          {/* Mockup 2: Detail Display */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={hashkartImg1} alt="HashKart Item Carousel" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">2. Product Showcase</span>
          </motion.div>

          {/* Mockup 3: Secure Payments */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={hashkartImg2} alt="HashKart Stripe Checkout" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">3. Stripe Payment Gateway</span>
          </motion.div>

          {/* Mockup 4: Active telemetry and orders */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
              </div>
              <img loading="lazy" src={hashkartImg3} alt="HashKart Order Confirmation" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">4. Order Summary Hub</span>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Section 3: Technical Highlights */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-headline-md text-headline-md mb-6 text-on-surface">Scalable Inventory Sync</h2>
          <p className="font-subhead-italic text-subhead-italic mb-8 text-on-surface-variant">Engineered to support heavy traffic spikes without latency bottlenecks.</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-[28px]">electric_bolt</span>
              <div>
                <h4 className="font-bold text-on-surface text-base mb-1">Rust Backend Core</h4>
                <p className="text-sm text-on-surface-variant">Blazing fast inventory checks and instant cart state calculations handled by compiled Rust threads.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-start-8 md:col-span-5 flex flex-col items-center">
          <div className="relative rounded-[40px] border-8 border-[#0A0A0A] bg-white p-2.5 shadow-2xl overflow-hidden max-w-[280px] h-[550px] flex flex-col items-center justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A0A0A] rounded-b-2xl z-20 flex items-center justify-center">
              <div className="w-12 h-1 bg-neutral-700 rounded-full mb-1"></div>
            </div>
            <img loading="lazy" src={hashkartImg4} alt="HashKart Tech Stack" className="w-full h-full object-contain" />
          </div>
          <span className="font-label-mono text-xs uppercase tracking-widest text-on-surface-variant mt-4">5. Stock Inventory Sandbox</span>
        </div>
      </motion.div>
    </section>

    {/* Footer Call to Action */}
    <section className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-16 text-center">
        <p className="font-label-mono text-label-mono mb-6 uppercase tracking-[0.3em] text-white/50">Next Project</p>
        <h2 className="font-headline-md text-headline-md mb-10 text-white">TruckMitr Logistics Suite</h2>
        <Link to="/work/truckmitr" className="inline-flex items-center gap-4 font-subhead-italic text-2xl italic hover:text-primary transition-colors text-white">
          View Case Study <span className="material-symbols-outlined text-white">arrow_forward</span>
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

const TruckMitrDetail = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    {/* Hero Section */}
    <section className="max-w-[1200px] mx-auto px-gutter py-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-end">
        <motion.div variants={fadeUp} className="md:col-span-8">
          <p className="font-label-mono text-label-mono text-primary mb-4 uppercase tracking-[0.2em]">Case Study 04</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.9] text-on-surface">TruckMitr:<br />Digital Trucking Ecosystem</h1>
        </motion.div>
        <div className="col-span-12 md:col-span-4 pb-4">
          <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant">Empowering Indian truck drivers and fleet owners through modern digital collaboration.</p>
        </div>
      </div>

      <motion.div variants={fadeUp} className="mt-stack-lg">
        <TechStackHero type="React Native" />
      </motion.div>
    </section>

    {/* Stats Hairline Row */}
    <motion.div variants={fadeUp} className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Role</span>
          <span className="font-body-main font-bold text-on-surface">Lead App Developer</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Duration</span>
          <span className="font-body-main font-bold text-on-surface">5 Months</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Platforms</span>
          <span className="font-body-main font-bold text-on-surface">Android & Web</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Key Tech</span>
          <span className="font-body-main font-bold text-on-surface">React Native, Redux, SQLite</span>
        </div>
      </div>
    </motion.div>

    {/* Challenge & Solution Bento */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 pixel-border">
        <div className="p-stack-lg hairline-r">
          <div className="mb-stack-md">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">01 / The Challenge</span>
          </div>
          <h2 className="font-headline-md text-headline-md mb-stack-sm text-on-surface">Fragmented Ecosystem</h2>
          <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed">
            The Indian trucking sector operates largely offline and is heavily reliant on informal networks and brokers. Drivers struggle to find verified jobs, lack professional digital profiles, and fleet operators experience major inefficiencies.
          </p>
        </div>
        <div className="p-stack-lg bg-[#F5F8FF]">
          <div className="mb-stack-md">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">02 / The Solution</span>
          </div>
          <h2 className="font-headline-md text-headline-md mb-stack-sm text-on-surface">Driver-Centric Platform</h2>
          <p className="font-body-main text-body-main text-on-surface-variant leading-relaxed mb-stack-md">
            We built a comprehensive driver-focused ecosystem. It provides drivers with verified jobs, digital professional identities, training resources, and welfare access, while connecting them directly to transporters and fleet owners.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Key Features */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[50px] mb-[50px]">
      <motion.div variants={fadeUp} className="hairline-b pb-stack-sm mb-stack-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface">Core Platform Goals</h2>
      </motion.div>
      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={fadeUp} className="p-6 border border-outline-variant bg-surface-container-lowest">
          <span className="material-symbols-outlined text-primary mb-4 text-[40px]">badge</span>
          <h3 className="font-subhead-italic text-2xl italic mb-2 text-on-surface">Digital Identity</h3>
          <p className="text-sm text-on-surface-variant">Helping truck drivers build verified professional digital profiles to showcase experience and secure trusted opportunities.</p>
        </motion.div>
        <motion.div variants={fadeUp} className="p-6 border border-outline-variant bg-surface-container-lowest">
          <span className="material-symbols-outlined text-primary mb-4 text-[40px]">handshake</span>
          <h3 className="font-subhead-italic text-2xl italic mb-2 text-on-surface">Broker-Free Jobs</h3>
          <p className="text-sm text-on-surface-variant">Connecting verified drivers directly with transporters and operators, increasing transparency and reducing reliance on brokers.</p>
        </motion.div>
        <motion.div variants={fadeUp} className="p-6 border border-outline-variant bg-surface-container-lowest">
          <span className="material-symbols-outlined text-primary mb-4 text-[40px]">school</span>
          <h3 className="font-subhead-italic text-2xl italic mb-2 text-on-surface">Training & Safety</h3>
          <p className="text-sm text-on-surface-variant">Access to driver training programs, safety protocols, and welfare support structures specifically for road operatives.</p>
        </motion.div>
      </motion.div>
    </section>

    {/* Footer Call to Action */}
    <section className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-16 text-center">
        <p className="font-label-mono text-label-mono mb-6 uppercase tracking-[0.3em] text-white/50">Next Project</p>
        <h2 className="font-headline-md text-headline-md mb-10 text-white">TMConnact: Logistics Sync</h2>
        <Link to="/work/TMConnact" className="inline-flex items-center gap-4 font-subhead-italic text-2xl italic hover:text-primary transition-colors text-white">
          View Case Study <span className="material-symbols-outlined text-white">arrow_forward</span>
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

const TMConnactDetail = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    {/* Hero Section */}
    <header className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 items-end mb-12 pt-8">
        <div className="col-span-12 md:col-span-8">
          <p className="font-label-mono text-label-mono text-primary mb-4 uppercase tracking-[0.2em]">Case Study 05</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.9] text-on-surface">TMConnact:<br />Low-Latency Logistics Sync</h1>
        </div>
        <div className="col-span-12 md:col-span-4 pb-4">
          <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant">Real-time sync bridging system for dispatcher networks over lightweight sockets and SMS.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeUp}>
        <TechStackHero type="Flutter" />
      </motion.div>
    </header>

    {/* Stats Hairline Row */}
    <motion.div variants={fadeUp} className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Role</span>
          <span className="font-body-main font-bold text-on-surface">Lead Flutter Developer</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Duration</span>
          <span className="font-body-main font-bold text-on-surface">3 Months</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Platforms</span>
          <span className="font-body-main font-bold text-on-surface">Android, iOS & Web</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Key Tech</span>
          <span className="font-body-main font-bold text-on-surface">Flutter, Riverpod, WebSockets</span>
        </div>
      </div>
    </motion.div>

    {/* Section 1: The Brief */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">Low Connectivity Bridging</h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
          <p className="font-subhead-italic text-subhead-italic text-on-surface-variant leading-relaxed">
            TMConnact acts as a critical link in the transport network, solving live synchronization in extreme off-grid environments.
          </p>
          <div className="hairline-b pb-8">
            <p className="font-body-main text-lg text-on-surface leading-loose">
              Logistics coordinators operating on highways or remote dispatch centers often suffer from severe internet outages. TMConnact addresses this by employing a dual-channel real-time sync structure. The primary synchronization pipeline functions over high-speed lightweight websockets, while the automated standby system operates over encrypted SMS channels to broadcast telemetry even when completely offline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">sync_alt</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Dynamic Websockets</h3>
              <p className="text-sm text-on-surface-variant">Continuous lightweight client-server telemetry transmission with auto reconnection protocol.</p>
            </div>
            <div className="p-8 border border-outline-variant bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">cell_tower</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">SMS Fallback Sync</h3>
              <p className="text-sm text-on-surface-variant">Binary payload compression algorithm enabling data broadcasts over network standard SMS protocols.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Footer Call to Action */}
    <section className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-16 text-center">
        <p className="font-label-mono text-label-mono mb-6 uppercase tracking-[0.3em] text-white/50">Next Project</p>
        <h2 className="font-headline-md text-headline-md mb-10 text-white">HRMS & CRM: Enterprise Suite</h2>
        <Link to="/work/hrms-crm" className="inline-flex items-center gap-4 font-subhead-italic text-2xl italic hover:text-primary transition-colors text-white">
          View Case Study <span className="material-symbols-outlined text-white">arrow_forward</span>
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

const HRMSDetail = () => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    {/* Hero Section */}
    <header className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-8 items-end mb-12">
        <div className="col-span-12 md:col-span-8">
          <p className="font-label-mono text-label-mono text-primary mb-4 uppercase tracking-[0.2em]">Case Study 06</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-[0.9] text-on-surface">HRMS & CRM:<br />Enterprise Efficiency</h1>
        </div>
        <div className="col-span-12 md:col-span-4 pb-4">
          <p className="font-subhead-italic text-subhead-italic italic text-on-surface-variant">Streamlining workforce management and sales tracking with React Native & Supabase.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeUp}>
        <TechStackHero type="React Native" />
      </motion.div>
    </header>

    {/* Stats Hairline Row */}
    <motion.div variants={fadeUp} className="max-w-[1200px] mx-auto px-gutter py-12 border-b border-outline-variant">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Role</span>
          <span className="font-body-main font-bold text-on-surface">Lead React Native Architect</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Duration</span>
          <span className="font-body-main font-bold text-on-surface">6 Months</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Platform</span>
          <span className="font-body-main font-bold text-on-surface">Web & Mobile</span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-2">Tech Suite</span>
          <span className="font-body-main font-bold text-on-surface">React Native, Supabase, Tailwind</span>
        </div>
      </div>
    </motion.div>

    {/* Section 1: The Brief */}
    <section className="max-w-[1200px] mx-auto px-gutter py-[100px]">
      <motion.div variants={fadeUp} className="grid grid-cols-12 gap-12">
        <div className="col-span-12 md:col-span-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">The Brief</h2>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col gap-8">
          <p className="font-subhead-italic text-subhead-italic text-on-surface-variant leading-relaxed">
            The objective was to deconstruct fragmented enterprise silos and reconstruct a unified platform for leave, payroll, and attendance management.
          </p>
          <div className="hairline-b pb-8">
            <p className="font-body-main text-lg text-on-surface leading-loose">
              Large-scale enterprises often struggle with "data ghosts"—discrepancies between HR attendance records and payroll systems. We were tasked with building a source of truth that could handle thousands of concurrent requests while maintaining a surgical level of precision in reporting.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-[#E5E5E5] bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">group_add</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Unified Workforce</h3>
              <p className="text-sm text-on-surface-variant">Centralizing 5,000+ employee records into a single, real-time synchronized database.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary mb-4 text-[32px]">account_balance_wallet</span>
              <h3 className="font-body-main font-bold mb-2 text-on-surface">Automated Payroll</h3>
              <p className="text-sm text-on-surface-variant">Eliminating manual data entry by bridging attendance logs with financial payouts.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>

    {/* Footer Call to Action */}
    <section className="max-w-[1200px] mx-auto px-gutter mb-20">
      <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-16 text-center">
        <p className="font-label-mono text-label-mono mb-6 uppercase tracking-[0.3em] text-white/50">Next Project</p>
        <h2 className="font-headline-md text-headline-md mb-10 text-white">AURA: Experiential Concierge</h2>
        <Link to="/work/aura" className="inline-flex items-center gap-4 font-subhead-italic text-2xl italic hover:text-primary transition-colors text-white">
          View Case Study <span className="material-symbols-outlined text-white">arrow_forward</span>
        </Link>
      </motion.div>
    </section>
  </motion.div>
);

const ProjectDetail = () => {
  const { projectId } = useParams();

  // Validate the route
  const validProjects = ['truckmitr', 'hrms-crm', 'aura', 'TMConnact', 'hashkart', 'glowcart'];
  if (!validProjects.includes(projectId)) {
    return <Navigate to="/work" replace />;
  }

  const projectInfo = projectsData.find(p => p.id === projectId) || projectsData[0];

  // Scroll to top automatically handled by App.jsx
  return (
    <div className="pt-8 w-full bg-white select-none">
      <SEOHead
        title={`${projectInfo.title} — App Case Study | Gagan Shukla`}
        description={projectInfo.description}
        canonical={`https://gaganshukla.in/work/${projectId}`}
        keywords={`${projectInfo.title}, ${projectInfo.tags.join(', ')}, Flutter Case Study, React Native Portfolio, App Development`}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'Work', url: 'https://gaganshukla.in/work' },
        { name: projectInfo.title, url: `https://gaganshukla.in/work/${projectId}` }
      ]} />
      <SoftwareAppSchema app={{
        name: projectInfo.title,
        description: projectInfo.longDescription || projectInfo.description,
        os: 'Android, iOS',
      }} />
      <ProjectSchema project={projectInfo} />
      
      {projectId === 'aura' && <AuraDetail />}
      {projectId === 'glowcart' && <GlowCartDetail />}
      {projectId === 'hashkart' && <HashKartDetail />}
      {projectId === 'truckmitr' && <TruckMitrDetail />}
      {projectId === 'TMConnact' && <TMConnactDetail />}
      {projectId === 'hrms-crm' && <HRMSDetail />}
    </div>
  );
};

export default ProjectDetail;
