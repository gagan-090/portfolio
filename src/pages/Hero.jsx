import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDown, ArrowRight, Clock, Calendar } from 'lucide-react';
import { projectsData } from '../data/projects';
import { blogService } from '../services/blogService';
import { MarqueeTicker } from '../components/common/MarqueeTicker';
import { AbstractMockup } from '../components/ui/AbstractMockup';
import AnimatedText from '../components/ui/AnimatedText';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import ParallaxSection from '../components/ui/ParallaxSection';
import MagneticButton from '../components/ui/MagneticButton';
import { FeaturedProject } from '../components/ui/FeaturedProject';
import { fadeUp, fadeIn, staggerContainer, staggerContainerSlow, blurIn } from '../utils/animations';
import SEOHead from '../components/seo/SEOHead';
import { BreadcrumbSchema } from '../components/seo/StructuredData';
import { format } from 'date-fns';

// Tech stack items
const techStack = [
  'Flutter', 'React Native', 'Dart', 'TypeScript', 'JavaScript', 
  'Node.js', 'Supabase', 'PostgreSQL', 'Firebase', 'REST APIs',
  'GraphQL', 'Redux', 'Riverpod', 'Git', 'Figma'
];

export const Hero = () => {
  const navigate = useNavigate();
  const [latestBlogs, setLatestBlogs] = useState([]);
  const heroRef = useRef(null);

  // Featured projects (top 2)
  const featuredProjects = projectsData.filter(p => p.featured || p.id === 'hashkart').slice(0, 2);

  // Scroll-linked parallax for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Fetch latest blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await blogService.getBlogs({ limit: 3 });
      if (data) setLatestBlogs(data);
    };
    fetchBlogs();
  }, []);

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

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 1 — CINEMATIC HERO                              */}
      {/* ════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 dot-grid-bg-subtle opacity-40 pointer-events-none" />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-[1200px] mx-auto px-gutter w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center pt-12 md:pt-0">
            {/* Left Column — Text */}
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
              {/* Role Label */}
              <motion.span 
                className="font-label-mono text-label-mono text-primary uppercase tracking-[0.2em] block mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Full Stack App Developer — Portfolio 2026
              </motion.span>

              {/* Name — Giant Character Reveal */}
              <h1 className="mb-4">
                <AnimatedText 
                  text="Gagan" 
                  splitBy="char" 
                  className="font-display-lg text-[56px] md:text-[90px] lg:text-[120px] text-on-surface tracking-tighter leading-[0.9] font-extrabold block"
                  stagger={0.04}
                  once={true}
                />
                <AnimatedText 
                  text="Shukla" 
                  splitBy="char" 
                  className="font-display-lg text-[56px] md:text-[90px] lg:text-[120px] tracking-tighter leading-[0.9] font-extrabold gradient-text block"
                  stagger={0.04}
                  delay={0.3}
                  once={true}
                />
              </h1>

              {/* Subtitle with typing cursor */}
              <motion.p 
                className="font-subhead-italic text-subhead-italic text-on-surface-variant italic mb-10 max-w-xl typing-cursor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                I build scalable applications using React, Flutter, Node.js, and modern cloud infrastructure.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              >
                <MagneticButton
                  onClick={() => navigate('/projects')}
                  className="w-full sm:w-auto bg-[#0A0A0A] text-white px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-primary transition-all duration-300 cursor-pointer"
                >
                  View Portfolio
                </MagneticButton>
                <MagneticButton
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto border border-[#0A0A0A] text-on-surface px-8 py-4 font-label-mono text-label-mono uppercase tracking-widest hover:bg-[#F5F8FF] transition-all duration-300 cursor-pointer"
                >
                  Get In Touch
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Column — Abstract Graphic */}
            <motion.div 
              className="col-span-12 md:col-span-5 flex justify-center items-center mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ParallaxSection speed={15}>
                <AbstractMockup />
              </ParallaxSection>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="font-label-mono text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">Scroll</span>
          <div className="scroll-indicator">
            <ArrowDown size={16} className="text-on-surface-variant" />
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 2 — MARQUEE TICKER                              */}
      {/* ════════════════════════════════════════════════════════ */}
      <MarqueeTicker />

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 3 — IMPACT STATS                                */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <motion.span 
          className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          00 / IMPACT
        </motion.span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          <AnimatedCounter value="3" label="Companies" sublabel="Enterprise clients served" />
          <AnimatedCounter value="2+" label="Years" sublabel="Professional experience" />
          <AnimatedCounter value="5+" label="Apps Shipped" sublabel="Production deployments" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 4 — FEATURED PROJECTS                           */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.span 
              className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              01 / SELECTED WORK
            </motion.span>
            <AnimatedText 
              text="Crafted with Precision" 
              splitBy="word" 
              className="font-headline-md text-headline-md text-on-surface"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/projects" 
              className="hidden md:inline-flex items-center gap-2 font-label-mono text-label-mono uppercase tracking-widest text-on-surface hover:text-primary transition-colors group"
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col gap-12"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={project.id} variants={fadeUp}>
              <FeaturedProject project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 5 — LATEST FROM THE BLOG                        */}
      {/* ════════════════════════════════════════════════════════ */}
      {latestBlogs.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-gutter py-section-padding border-b border-outline-variant">
          <div className="flex justify-between items-end mb-16">
            <div>
              <motion.span 
                className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                02 / JOURNAL
              </motion.span>
              <AnimatedText 
                text="Latest Writings" 
                splitBy="word" 
                className="font-headline-md text-headline-md text-on-surface"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/blog" 
                className="hidden md:inline-flex items-center gap-2 font-label-mono text-label-mono uppercase tracking-widest text-on-surface hover:text-primary transition-colors group"
              >
                Read All
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {latestBlogs.map((blog) => (
              <motion.article 
                key={blog.id} 
                variants={fadeUp}
                className="group"
              >
                <Link to={`/blog/${blog.slug}`} className="block">
                  {/* Cover Image */}
                  {blog.cover_image_url && (
                    <div className="overflow-hidden mb-5 aspect-[16/9] bg-surface-container border border-outline-variant">
                      <img
                        loading="lazy"
                        src={blog.cover_image_url}
                        alt={blog.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                    </div>
                  )}

                  {/* Category */}
                  {blog.category?.name && (
                    <span className="inline-block font-label-mono text-[10px] uppercase tracking-[0.15em] text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 mb-3">
                      {blog.category.name}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-headline-md text-lg font-bold text-on-surface group-hover:text-primary transition-colors duration-200 leading-snug mb-3">
                    {blog.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-on-surface-variant text-[12px] font-label-mono">
                    {blog.published_at && (
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {format(new Date(blog.published_at), 'MMM d, yyyy')}
                      </span>
                    )}
                    {blog.reading_time_minutes && (
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} />
                        {blog.reading_time_minutes} min
                      </span>
                    )}
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* Mobile "Read All" link */}
          <motion.div 
            className="mt-10 md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 font-label-mono text-label-mono uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
            >
              Read All Articles
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 6 — TECH STACK RIBBON                           */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="border-b border-outline-variant py-10 overflow-hidden">
        <div className="tech-scroll-container">
          <div className="tech-scroll-content">
            {[...techStack, ...techStack].map((tech, i) => (
              <span 
                key={i} 
                className="font-label-mono text-[13px] uppercase tracking-[0.2em] text-on-surface-variant whitespace-nowrap flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 bg-primary rotate-45 inline-block flex-shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* SECTION 7 — CTA                                         */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className="max-w-[1200px] mx-auto px-gutter py-section-padding relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 dot-grid-bg-subtle opacity-20 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="max-w-2xl">
            <motion.span 
              className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              03 / CONNECT
            </motion.span>
            <AnimatedText 
              text="Let's build the next big thing." 
              splitBy="word" 
              className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-[64px] text-on-surface leading-[1.05]"
              stagger={0.1}
            />
          </div>
          <div className="flex flex-col gap-6 items-center md:items-end">
            <MagneticButton
              onClick={() => navigate('/contact')}
              className="w-full md:w-auto bg-[#0A0A0A] text-white px-12 py-6 font-label-mono text-label-mono uppercase tracking-widest text-center hover:bg-primary transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </MagneticButton>
            <p className="font-body-main text-on-surface-variant text-center md:text-right flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for remote contracts and full-time roles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
