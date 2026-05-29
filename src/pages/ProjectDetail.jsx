import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import SEOHead from '../components/seo/SEOHead';
import SystemDesign from '../components/projects/SystemDesign';
import { BreadcrumbSchema, SoftwareAppSchema, ProjectSchema, FAQSchema } from '../components/seo/StructuredData';

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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ─── Shared: Tech Stack Hero Banner ─── */
const TechStackHero = ({ type }) => {
  const isFlutter = type.toUpperCase() === 'FLUTTER';
  return (
    <div className="relative w-full aspect-[16/9] bg-[#0A0A0A] border border-outline-variant flex flex-col items-center justify-center p-8 overflow-hidden group select-none">
      <div className={`absolute w-72 h-72 rounded-full blur-[100px] opacity-15 pointer-events-none transition-transform duration-1000 group-hover:scale-150 ${isFlutter ? 'bg-[#0284C7]' : 'bg-[#0891B2]'}`} />
      {isFlutter ? (
        <svg viewBox="0 0 2000 2000" className="w-16 h-16 md:w-24 md:h-24 filter drop-shadow-[0_0_20px_rgba(2,132,199,0.3)] transition-transform duration-500 group-hover:scale-110">
          <path fill="#47C5FB" d="M1411.3 759.2L915.2 263.1H0l683 683.1L0 1629.3h915.2l496.1-496.1 496.1-496.1-496.1 122.1z" />
          <path fill="#02569B" d="M1411.3 759.2l-496.1 496.1 496.1 496.1H1907l-495.7-496.1 495.7-496.1h-495.7z" />
          <path fill="#0175C2" d="M915.2 1255.3L419.1 1751.4H0l683-683.1 232.2 187z" />
        </svg>
      ) : (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16 md:w-24 md:h-24 text-[#0891B2] filter drop-shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor">
          <circle cx="0" cy="0" r="2.05" fill="#0891B2" stroke="none" />
          <g stroke="#0891B2" strokeWidth="0.8">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )}
      <span className="font-label-mono text-[10px] text-white/40 uppercase tracking-[0.25em] mt-6 md:mt-8 block group-hover:text-white/70 transition-colors duration-300 text-center">
        Enterprise Production Stack // {type.toUpperCase()}
      </span>
      <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none" />
    </div>
  );
};

/* ─── Shared: Phone Mockup (iPhone 14 style) ─── */
const PhoneMockup = ({ src, alt, label }) => (
  <motion.div variants={fadeUp} className="flex flex-col items-center w-full">
    {/* Outer shell */}
    <div
      className="relative w-full max-w-[190px] sm:max-w-[210px] aspect-[9/19.5] flex-shrink-0"
      style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.35))' }}
    >
      {/* Phone body */}
      <div className="absolute inset-0 rounded-[38px] bg-[#0A0A0A] border-[7px] border-[#1a1a1a] overflow-hidden">

        {/* Screen */}
        <div className="relative w-full h-full bg-black overflow-hidden rounded-[31px]">

          {/* Screenshot */}
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Status bar dark overlay at very top */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

          {/* Dynamic Island — pill notch */}
          <div
            className="absolute z-20"
            style={{ top: '10px', left: '50%', transform: 'translateX(-50%)' }}
          >
            <div
              className="relative flex items-center justify-center"
              style={{
                width: '84px',
                height: '26px',
                backgroundColor: '#000000',
                borderRadius: '20px',
              }}
            >
              {/* Front camera dot */}
              <div
                style={{
                  position: 'absolute',
                  right: '10px',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: '#0a0a18',
                  boxShadow: 'inset 0 0 0 1.5px #1e2035, 0 0 4px 1px rgba(0,100,255,0.15)',
                }}
              />
              {/* Speaker grille */}
              <div
                style={{
                  width: '30px',
                  height: '5px',
                  borderRadius: '3px',
                  backgroundColor: '#111',
                  marginRight: '16px',
                }}
              />
            </div>
          </div>

          {/* Home indicator bar */}
          <div
            className="absolute z-20"
            style={{ bottom: '8px', left: '50%', transform: 'translateX(-50%)' }}
          >
            <div
              style={{
                width: '80px',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: 'rgba(255,255,255,0.55)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Left side buttons */}
      {/* Silent switch */}
      <div
        className="absolute"
        style={{
          left: '-9px',
          top: '72px',
          width: '3px',
          height: '26px',
          backgroundColor: '#2a2a2a',
          borderRadius: '2px 0 0 2px',
        }}
      />
      {/* Volume up */}
      <div
        className="absolute"
        style={{
          left: '-9px',
          top: '110px',
          width: '3px',
          height: '44px',
          backgroundColor: '#2a2a2a',
          borderRadius: '2px 0 0 2px',
        }}
      />
      {/* Volume down */}
      <div
        className="absolute"
        style={{
          left: '-9px',
          top: '162px',
          width: '3px',
          height: '44px',
          backgroundColor: '#2a2a2a',
          borderRadius: '2px 0 0 2px',
        }}
      />

      {/* Right side button (power) */}
      <div
        className="absolute"
        style={{
          right: '-9px',
          top: '120px',
          width: '3px',
          height: '64px',
          backgroundColor: '#2a2a2a',
          borderRadius: '0 2px 2px 0',
        }}
      />

      {/* Subtle gloss reflection */}
      <div
        className="absolute inset-0 rounded-[38px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)',
        }}
      />
    </div>

    <span className="font-label-mono text-[10px] uppercase tracking-widest text-on-surface-variant mt-4 text-center px-2">{label}</span>
  </motion.div>
);

/* ─── Shared: Case Study Header ─── */
const CaseStudyHeader = ({ num, title, subtitle, heroSrc, heroAlt, techType, githubUrl }) => (
  <header className="max-w-[1200px] mx-auto px-gutter mb-12 md:mb-20">
    <motion.div variants={fadeUp} className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-end mb-8 md:mb-12 pt-8">
      <div className="md:col-span-8">
        <p className="font-label-mono text-label-mono text-primary mb-3 md:mb-4 uppercase tracking-[0.2em]">{num}</p>
        <h1 className="font-headline-md text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] font-bold leading-[1.0] md:leading-[0.9] text-on-surface tracking-tighter break-words">
          {title}
        </h1>
      </div>
      <div className="md:col-span-4 pb-0 md:pb-4 flex flex-col justify-end">
        <p className="font-body-main text-[15px] md:text-[16px] text-on-surface-variant leading-relaxed mb-4">{subtitle}</p>
        {githubUrl && (
          <div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label-mono text-[11px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors border border-outline-variant px-4 py-2 hover:border-primary bg-surface-container"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </motion.div>
    {heroSrc ? (
      <motion.div variants={fadeUp} className="relative w-full aspect-[16/9] bg-surface-container border border-outline-variant flex items-center justify-center p-4 md:p-8 group overflow-hidden">
        <img src={heroSrc} alt={heroAlt} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none" />
      </motion.div>
    ) : techType ? (
      <motion.div variants={fadeUp}><TechStackHero type={techType} /></motion.div>
    ) : null}
  </header>
);

/* ─── Shared: Stats Row ─── */
const StatsRow = ({ stats }) => (
  <motion.div variants={fadeUp} className="max-w-[1200px] mx-auto px-gutter py-8 md:py-12 border-b border-outline-variant">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map(({ label, value }) => (
        <div key={label} className="flex flex-col min-w-0">
          <span className="font-label-mono text-[10px] uppercase tracking-tighter text-on-surface-variant mb-1">{label}</span>
          <span className="font-body-main font-bold text-on-surface text-sm md:text-base break-words">{value}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

/* ─── Shared: Brief Section ─── */
const BriefSection = ({ heading, lead, body, children }) => (
  <section className="max-w-[1200px] mx-auto px-gutter py-12 md:py-[80px]">
    <motion.div variants={fadeUp} className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-4">
        <h2 className="font-headline-md text-2xl md:text-[2.5rem] font-bold text-on-surface leading-tight">{heading}</h2>
      </div>
      <div className="md:col-span-8 flex flex-col gap-6 md:gap-8">
        <p className="font-body-main text-[15px] md:text-[18px] text-on-surface-variant leading-relaxed italic">{lead}</p>
        {body && (
          <div className="hairline-b pb-6 md:pb-8">
            <p className="font-body-main text-base md:text-lg text-on-surface leading-loose">{body}</p>
          </div>
        )}
        {children}
      </div>
    </motion.div>
  </section>
);

/* ─── Shared: CTA Footer ─── */
const NextProjectCTA = ({ label, to }) => (
  <section className="max-w-[1200px] mx-auto px-gutter mb-12 md:mb-20">
    <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-8 md:p-16 text-center">
      <p className="font-label-mono text-label-mono mb-4 md:mb-6 uppercase tracking-[0.3em] text-white/50">Next Project</p>
      <h2 className="font-headline-md text-xl md:text-[2.5rem] font-bold mb-6 md:mb-10 text-white leading-tight">{label}</h2>
      <Link to={to} className="inline-flex items-center gap-3 font-body-main text-lg md:text-2xl italic hover:text-primary transition-colors text-white">
        View Case Study <span className="material-symbols-outlined">arrow_forward</span>
      </Link>
    </motion.div>
  </section>
);

/* ─── Shared: Feature Card Grid ─── */
const FeatureCards = ({ cards, cols = 3 }) => (
  <div className={`grid grid-cols-1 ${cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-4 md:gap-8`}>
    {cards.map(({ icon, title, desc }) => (
      <div key={title} className="p-5 md:p-8 border border-outline-variant bg-surface-container-lowest">
        <span className="material-symbols-outlined text-primary mb-3 md:mb-4 text-[28px] md:text-[32px] block">{icon}</span>
        <h3 className="font-body-main font-bold mb-2 text-on-surface text-sm md:text-base">{title}</h3>
        <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{desc}</p>
      </div>
    ))}
  </div>
);

/* ─── Shared: Interface Showcase Section ─── */
const InterfaceShowcase = ({ subtitle, phones }) => (
  <section className="bg-surface-container py-12 md:py-[80px] border-y border-outline-variant">
    <div className="max-w-[1200px] mx-auto px-gutter">
      <motion.div variants={fadeUp} className="mb-10 md:mb-16 text-center md:text-left">
        <h2 className="font-headline-md text-2xl md:text-[2.5rem] font-bold mb-3 md:mb-4 text-on-surface">Interface Showcase</h2>
        <p className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[10px] md:text-[13px]">{subtitle}</p>
      </motion.div>
      <motion.div variants={staggerContainer} className={`grid grid-cols-2 ${phones.length >= 4 ? 'lg:grid-cols-4' : phones.length === 5 ? 'sm:grid-cols-3 lg:grid-cols-5' : 'sm:grid-cols-2'} gap-4 md:gap-8 justify-items-center`}>
        {phones.map((p) => (
          <PhoneMockup key={p.label} {...p} />
        ))}
      </motion.div>
    </div>
  </section>
);

/* ─── Shared: Feature + Single Phone layout ─── */
const FeatureWithPhone = ({ heading, lead, bullets, phoneSrc, phoneAlt, phoneLabel }) => (
  <section className="max-w-[1200px] mx-auto px-gutter py-12 md:py-[80px]">
    <motion.div variants={fadeUp} className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-8 items-center">
      <div className="md:col-span-6">
        <h2 className="font-headline-md text-2xl md:text-[2.5rem] font-bold mb-4 md:mb-6 text-on-surface leading-tight">{heading}</h2>
        <p className="font-body-main text-[15px] md:text-[18px] mb-6 md:mb-8 text-on-surface-variant italic leading-relaxed">{lead}</p>
        <div className="space-y-5 md:space-y-8">
          {bullets.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3 md:gap-4">
              <span className="material-symbols-outlined text-primary text-[22px] md:text-[28px] flex-shrink-0 mt-0.5">{icon}</span>
              <div>
                <h4 className="font-bold text-on-surface text-sm md:text-base mb-1">{title}</h4>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:col-start-8 md:col-span-5 flex flex-col items-center w-full max-w-[240px] mx-auto md:max-w-none">
        <PhoneMockup src={phoneSrc} alt={phoneAlt} label={phoneLabel} />
      </div>
    </motion.div>
  </section>
);

/* ════════════════════════════════════════
   AURA DETAIL
════════════════════════════════════════ */
const AuraDetail = ({ projectInfo }) => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    <CaseStudyHeader
      num="Case Study 01"
      title={"AURA:\nExperiential Booking"}
      subtitle="Seamless travel destination, live social events, and romantic couple date concierge crafted with Flutter."
      heroSrc={auraHero}
      heroAlt="AURA Lifestyle App Showcase"
      githubUrl="https://github.com/gagan-090/aura.git"
    />
    <StatsRow stats={[
      { label: 'Role', value: 'Flutter Developer' },
      { label: 'Duration', value: '4 Months' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Key Tech', value: 'Flutter, Riverpod, Maps API' },
    ]} />
    <BriefSection
      heading="The Experience Engine"
      lead="AURA simplifies lifestyle scheduling by uniting travel, ticketing, and social event discovery under one premium interface."
      body="Modern lifestyle apps are often fragmented—users must jump between search engines, event listings, and dining platforms. AURA elegantly resolves this by designing a beautiful concierge engine. Users can book exotic tour routes, buy tickets for major local events, schedule custom couple dates, and find creative weekend activities in one unified booking dashboard."
    >
      <FeatureCards cols={3} cards={[
        { icon: 'explore', title: 'Tours & Getaways', desc: 'Seamless slots, travel guides, and route maps for premium local getaways.' },
        { icon: 'local_activity', title: 'Social Events', desc: 'Live tickets, calendar schedules, and interactive seating selections.' },
        { icon: 'favorite', title: 'Couple Dates', desc: 'Curated romantic planners, dinner bookings, and creative activity lists.' },
      ]} />
    </BriefSection>

    <InterfaceShowcase
      subtitle="High-Fidelity App Journey in Custom Device Simulators"
      phones={[
        { src: auraLogin, alt: 'AURA Login Interface', label: '1. Auth Portal' },
        { src: auraHero, alt: 'AURA Home Interface', label: '2. Experience Hub' },
        { src: auraImg1, alt: 'AURA Destination Discovery', label: '3. Tour Discovery' },
        { src: auraImg2, alt: 'AURA Date Scheduling', label: '4. Event Details' },
      ]}
    />

    <FeatureWithPhone
      heading="Curated Itinerary Flow"
      lead="High-performance reactive state management synchronizes ticket availability live."
      bullets={[
        { icon: 'calendar_month', title: 'Multi-Tier Event Schedules', desc: 'Real-time web integrations feed instant slot locks, group seating numbers, and booking reminders instantly to users.' },
        { icon: 'map', title: 'Curated Travel & Getaways', desc: 'Custom maps layers display guides, routes, local activities, and recommended stops dynamically compiled by experts.' },
      ]}
      phoneSrc={auraImg3}
      phoneAlt="AURA Couples Planner Interface"
      phoneLabel="5. Booking Success Portal"
    />

    <SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} animatedGraph={projectInfo.animatedGraph} />
    <NextProjectCTA label="GlowCart: Cosmetics Store" to="/projects/glowcart" />
  </motion.div>
);

/* ════════════════════════════════════════
   GLOWCART DETAIL
════════════════════════════════════════ */
const GlowCartDetail = ({ projectInfo }) => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    <CaseStudyHeader
      num="Case Study 02"
      title={"GlowCart:\nOnline Cosmetics App"}
      subtitle="A custom, premium online cosmetic product e-commerce app built from scratch in Flutter."
      heroSrc={glowcartHero}
      heroAlt="GlowCart Hero Showcase"
    />
    <StatsRow stats={[
      { label: 'Role', value: 'Creator & Lead Architect' },
      { label: 'Duration', value: '3 Months' },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Key Tech', value: 'Flutter, Riverpod, SQLite' },
    ]} />
    <BriefSection
      heading="The Cosmetic Shop Experience"
      lead="GlowCart redefines cosmetics shopping with visual richness, pre-cached product listings, and an extremely responsive shopping bag interface."
      body="E-commerce platforms for beauty products must look and feel exceptionally high-end. High resolution rendering, accurate product textures, and lag-free category filters are mandatory to win buyer trust. GlowCart addresses this with an optimized Flutter catalog framework, allowing quick item previews, interactive beauty blogs, fluid animations, and a seamless local checkout database that functions offline."
    >
      <FeatureCards cols={2} cards={[
        { icon: 'shopping_bag', title: 'Premium Catalog Layouts', desc: 'Carefully arranged grid displays tailored to highlight colors, skin routines, and makeup variations.' },
        { icon: 'favorite_border', title: 'Interactive Skincare Routines', desc: 'Allows users to curate customized skincare routines and add all steps to the checkout cart with one click.' },
      ]} />
    </BriefSection>

    <InterfaceShowcase
      subtitle="GlowCart High-Fidelity App Showcase"
      phones={[
        { src: glowcartImg4, alt: 'GlowCart Onboarding', label: '1. Welcome Splash' },
        { src: glowcartImg5, alt: 'GlowCart Login', label: '2. Auth & Profile' },
        { src: glowcartImg3, alt: 'GlowCart Categories', label: '3. Categories Hub' },
        { src: glowcartImg1, alt: 'GlowCart Product Detail', label: '4. Product Detail' },
        { src: glowcartImg2, alt: 'GlowCart Shopping Cart', label: '5. Shopping Cart' },
      ]}
    />

    <SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} animatedGraph={projectInfo.animatedGraph} />
    <NextProjectCTA label="HashKart: Flutter E-Commerce" to="/projects/hashkart" />
  </motion.div>
);

/* ════════════════════════════════════════
   HASHKART DETAIL
════════════════════════════════════════ */
const HashKartDetail = ({ projectInfo }) => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    <CaseStudyHeader
      num="Case Study 03"
      title={"HashKart:\nE-Commerce Solution"}
      subtitle="High-performance e-commerce engine with Razorpay and a reactive Rust-based backend analytics core."
      heroSrc={hashkartHero}
      heroAlt="HashKart Showcase Mockup"
      githubUrl="https://github.com/gagan-090/HashKart_Main.git"
    />
    <StatsRow stats={[
      { label: 'Role', value: 'Lead Mobile Architect' },
      { label: 'Duration', value: '4 Months' },
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Key Tech', value: 'Flutter, Rust, Razorpay SDK' },
    ]} />
    <BriefSection
      heading="Full-Stack E-Commerce Engine"
      lead="HashKart was built to deliver lightning-fast item browsing and instant Razorpay transactions for millions of retail buyers."
      body="Modern digital shoppers expect seamless rendering and immediate checkout confirmation. HashKart fulfills this expectation through a high-performance rendering stack. It supports real-time multi-resolution image rendering galleries, seamless checkout configurations via Razorpay API integrations, and robust real-time synchronization with a blazing fast Rust-based analytics inventory backend."
    />

    <InterfaceShowcase
      subtitle="High-Fidelity App Journey in Custom Device Simulators"
      phones={[
        { src: hashkartHero, alt: 'HashKart Product Listing', label: '1. Main Marketplace Feed' },
        { src: hashkartImg1, alt: 'HashKart Item Carousel', label: '2. Product Showcase' },
        { src: hashkartImg2, alt: 'HashKart Razorpay Checkout', label: '3. Razorpay Payment Gateway' },
        { src: hashkartImg3, alt: 'HashKart Order Confirmation', label: '4. Order Summary Hub' },
      ]}
    />

    <FeatureWithPhone
      heading="Scalable Inventory Sync"
      lead="Engineered to support heavy traffic spikes without latency bottlenecks."
      bullets={[
        { icon: 'electric_bolt', title: 'Rust Backend Core', desc: 'Blazing fast inventory checks and instant cart state calculations handled by compiled Rust threads.' },
      ]}
      phoneSrc={hashkartImg4}
      phoneAlt="HashKart Tech Stack"
      phoneLabel="5. Stock Inventory Sandbox"
    />

    <SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} animatedGraph={projectInfo.animatedGraph} />
    <NextProjectCTA label="TruckMitr Logistics Suite" to="/projects/truckmitr" />
  </motion.div>
);

/* ════════════════════════════════════════
   TRUCKMITR DETAIL
════════════════════════════════════════ */
const TruckMitrDetail = ({ projectInfo }) => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    <CaseStudyHeader
      num="Case Study 04"
      title={"TruckMitr:\nDigital Trucking Ecosystem"}
      subtitle="Empowering Indian truck drivers and fleet owners through modern digital collaboration."
      techType="React Native"
    />
    <StatsRow stats={[
      { label: 'Role', value: 'Lead App Developer' },
      { label: 'Duration', value: '5 Months' },
      { label: 'Platforms', value: 'Android & Web' },
      { label: 'Key Tech', value: 'React Native, Redux, SQLite' },
    ]} />

    {/* Challenge & Solution Bento */}
    <section className="max-w-[1200px] mx-auto px-gutter py-12 md:py-[80px]">
      <motion.div variants={fadeUp} className="flex flex-col md:grid md:grid-cols-2 border border-outline-variant">
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-outline-variant">
          <div className="mb-4 md:mb-6">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">01 / The Challenge</span>
          </div>
          <h2 className="font-headline-md text-xl md:text-[2.5rem] font-bold mb-3 md:mb-4 text-on-surface leading-tight">Fragmented Ecosystem</h2>
          <p className="font-body-main text-sm md:text-base text-on-surface-variant leading-relaxed">
            The Indian trucking sector operates largely offline and is heavily reliant on informal networks and brokers. Drivers struggle to find verified jobs, lack professional digital profiles, and fleet operators experience major inefficiencies.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-[#F5F8FF]">
          <div className="mb-4 md:mb-6">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest text-[11px]">02 / The Solution</span>
          </div>
          <h2 className="font-headline-md text-xl md:text-[2.5rem] font-bold mb-3 md:mb-4 text-on-surface leading-tight">Driver-Centric Platform</h2>
          <p className="font-body-main text-sm md:text-base text-on-surface-variant leading-relaxed">
            We built a comprehensive driver-focused ecosystem. It provides drivers with verified jobs, digital professional identities, training resources, and welfare access, while connecting them directly to transporters and fleet owners.
          </p>
        </div>
      </motion.div>
    </section>

    {/* Key Features */}
    <section className="max-w-[1200px] mx-auto px-gutter pb-12 md:pb-[60px]">
      <motion.div variants={fadeUp} className="hairline-b pb-4 mb-8 md:mb-10">
        <h2 className="font-headline-md text-2xl md:text-[2.5rem] font-bold text-on-surface leading-tight">Core Platform Goals</h2>
      </motion.div>
      <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {[
          { icon: 'badge', title: 'Digital Identity', desc: 'Helping truck drivers build verified professional digital profiles to showcase experience and secure trusted opportunities.' },
          { icon: 'handshake', title: 'Broker-Free Jobs', desc: 'Connecting verified drivers directly with transporters and operators, increasing transparency and reducing reliance on brokers.' },
          { icon: 'school', title: 'Training & Safety', desc: 'Access to driver training programs, safety protocols, and welfare support structures specifically for road operatives.' },
        ].map(({ icon, title, desc }) => (
          <motion.div key={title} variants={fadeUp} className="p-5 md:p-6 border border-outline-variant bg-surface-container-lowest">
            <span className="material-symbols-outlined text-primary mb-3 md:mb-4 text-[36px] md:text-[40px] block">{icon}</span>
            <h3 className="font-body-main font-bold text-base md:text-lg italic mb-2 text-on-surface">{title}</h3>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    <SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} animatedGraph={projectInfo.animatedGraph} />
    <NextProjectCTA label="TMConnact: Logistics Sync" to="/projects/TMConnact" />
  </motion.div>
);

/* ════════════════════════════════════════
   TMCONNACT DETAIL
════════════════════════════════════════ */
const TMConnactDetail = ({ projectInfo }) => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    <CaseStudyHeader
      num="Case Study 05"
      title={"TMConnact:\nLow-Latency Logistics Sync"}
      subtitle="Real-time sync bridging system for dispatcher networks over lightweight sockets and SMS."
      techType="Flutter"
    />
    <StatsRow stats={[
      { label: 'Role', value: 'Lead Flutter Developer' },
      { label: 'Duration', value: '3 Months' },
      { label: 'Platforms', value: 'Android, iOS & Web' },
      { label: 'Key Tech', value: 'Flutter, Riverpod, WebSockets' },
    ]} />
    <BriefSection
      heading="Low Connectivity Bridging"
      lead="TMConnact acts as a critical link in the transport network, solving live synchronization in extreme off-grid environments."
      body="Logistics coordinators operating on highways or remote dispatch centers often suffer from severe internet outages. TMConnact addresses this by employing a dual-channel real-time sync structure. The primary synchronization pipeline functions over high-speed lightweight websockets, while the automated standby system operates over encrypted SMS channels to broadcast telemetry even when completely offline."
    >
      <FeatureCards cols={2} cards={[
        { icon: 'sync_alt', title: 'Dynamic Websockets', desc: 'Continuous lightweight client-server telemetry transmission with auto reconnection protocol.' },
        { icon: 'cell_tower', title: 'SMS Fallback Sync', desc: 'Binary payload compression algorithm enabling data broadcasts over network standard SMS protocols.' },
      ]} />
    </BriefSection>

    <SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} animatedGraph={projectInfo.animatedGraph} />
    <NextProjectCTA label="HRMS & CRM: Enterprise Suite" to="/projects/hrms-crm" />
  </motion.div>
);

/* ════════════════════════════════════════
   HRMS DETAIL
════════════════════════════════════════ */
const HRMSDetail = ({ projectInfo }) => (
  <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full">
    <CaseStudyHeader
      num="Case Study 06"
      title={"HRMS & CRM:\nEnterprise Efficiency"}
      subtitle="Streamlining workforce management and sales tracking with React Native & Supabase."
      techType="React Native"
      githubUrl="https://github.com/gagan-090/HRMS.git"
    />
    <StatsRow stats={[
      { label: 'Role', value: 'Lead React Native Architect' },
      { label: 'Duration', value: '6 Months' },
      { label: 'Platform', value: 'Web & Mobile' },
      { label: 'Tech Suite', value: 'React Native, Supabase, Tailwind' },
    ]} />
    <BriefSection
      heading="The Brief"
      lead="The objective was to deconstruct fragmented enterprise silos and reconstruct a unified platform for leave, payroll, and attendance management."
      body='Large-scale enterprises often struggle with "data ghosts"—discrepancies between HR attendance records and payroll systems. We were tasked with building a source of truth that could handle thousands of concurrent requests while maintaining a surgical level of precision in reporting.'
    >
      <FeatureCards cols={2} cards={[
        { icon: 'group_add', title: 'Unified Workforce', desc: 'Centralizing 5,000+ employee records into a single, real-time synchronized database.' },
        { icon: 'account_balance_wallet', title: 'Automated Payroll', desc: 'Eliminating manual data entry by bridging attendance logs with financial payouts.' },
      ]} />
    </BriefSection>

    <SystemDesign overview={projectInfo.systemDesignOverview} mermaidCode={projectInfo.mermaidFlow} imageSrc={projectInfo.architectureImage} animatedGraph={projectInfo.animatedGraph} />
    <NextProjectCTA label="AURA: Experiential Concierge" to="/projects/aura" />
  </motion.div>
);

/* ════════════════════════════════════════
   ROUTER
════════════════════════════════════════ */
const ProjectDetail = () => {
  const { projectId } = useParams();

  const validProjects = ['truckmitr', 'hrms-crm', 'aura', 'TMConnact', 'hashkart', 'glowcart'];
  if (!validProjects.includes(projectId)) {
    return <Navigate to="/projects" replace />;
  }

  const projectInfo = projectsData.find(p => p.id === projectId) || projectsData[0];

  return (
    <div className="pt-8 w-full bg-white select-none overflow-x-hidden">
      <SEOHead
        title={`${projectInfo.title} — App Case Study | Gagan Shukla`}
        description={projectInfo.description}
        canonical={`https://gaganshukla.in/projects/${projectId}`}
        keywords={`${projectInfo.title}, ${projectInfo.tags.join(', ')}, Flutter Case Study, React Native Portfolio, App Development`}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gaganshukla.in/' },
        { name: 'Projects', url: 'https://gaganshukla.in/projects' },
        { name: projectInfo.title, url: `https://gaganshukla.in/projects/${projectId}` }
      ]} />
      <SoftwareAppSchema app={{
        name: projectInfo.title,
        description: projectInfo.longDescription || projectInfo.description,
        os: 'Android, iOS',
      }} />
      <ProjectSchema project={projectInfo} />
      {projectInfo.faqs && <FAQSchema faqs={projectInfo.faqs.map(f => ({ question: f.q, answer: f.a }))} />}

      {/* AI & Recruiter Summary Block */}
      {projectInfo.ai_summary && (
        <div className="max-w-[1200px] mx-auto px-gutter pt-8">
          <div className="bg-[#f0f4f8] border-l-4 border-[#2563EB] p-6 rounded-r-lg">
            <h3 className="font-label-mono text-xs uppercase tracking-widest text-[#2563EB] mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">smart_toy</span>
              AI & Recruiter Summary
            </h3>
            <p className="font-body-main text-sm text-on-surface-variant leading-relaxed">
              {projectInfo.ai_summary}
            </p>
            {projectInfo.keyTakeaways && (
              <div className="mt-4 flex flex-wrap gap-2">
                {projectInfo.keyTakeaways.map(t => (
                  <span key={t} className="bg-white border border-outline-variant px-3 py-1 text-xs rounded-full font-medium">{t}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {projectId === 'aura'      && <AuraDetail projectInfo={projectInfo} />}
      {projectId === 'glowcart'  && <GlowCartDetail projectInfo={projectInfo} />}
      {projectId === 'hashkart'  && <HashKartDetail projectInfo={projectInfo} />}
      {projectId === 'truckmitr' && <TruckMitrDetail projectInfo={projectInfo} />}
      {projectId === 'TMConnact' && <TMConnactDetail projectInfo={projectInfo} />}
      {projectId === 'hrms-crm'  && <HRMSDetail projectInfo={projectInfo} />}
    </div>
  );
};

export default ProjectDetail;
