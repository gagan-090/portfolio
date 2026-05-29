import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedArchitecture from './AnimatedArchitecture';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  themeVariables: {
    primaryColor: '#0A0A0A',
    primaryTextColor: '#FFFFFF',
    primaryBorderColor: '#2A2A2A',
    lineColor: '#2563EB',
    secondaryColor: '#1A1A1A',
    tertiaryColor: '#FFFFFF',
    fontFamily: 'JetBrains Mono, monospace'
  },
  flowchart: { curve: 'basis' },
  securityLevel: 'loose',
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const SystemDesign = ({ overview, mermaidCode, animatedGraph }) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (mermaidRef.current && mermaidCode) {
      mermaidRef.current.innerHTML = '';
      mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, mermaidCode).then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
        }
      });
    }
  }, [mermaidCode]);

  return (
    <section className="max-w-[1200px] mx-auto px-gutter py-16 md:py-24 border-t border-outline-variant">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-[#2563EB] text-[32px]">architecture</span>
          <h2 className="font-headline-md text-3xl md:text-5xl font-bold text-on-surface tracking-tighter">System Architecture</h2>
        </div>
        
        <p className="font-body-main text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mb-12">
          {overview}
        </p>
      </motion.div>

      {/* Split Pane: Image + Data Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Abstract 3D Architecture Visual */}
        <AnimatedArchitecture nodes={animatedGraph?.nodes} edges={animatedGraph?.edges} />

        {/* Live Data Flow Diagram */}
        <motion.div 
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="w-full bg-surface-container-lowest border border-outline-variant p-6 md:p-8 relative min-h-[400px] flex flex-col justify-center"
        >
          <div className="absolute top-4 left-4 z-10 font-label-mono text-[10px] text-[#2563EB] uppercase tracking-[0.3em] bg-white px-2 py-1 border border-[#2563EB]/20">
            Live Data Flow Sequence
          </div>
          <div 
            className="mermaid-container w-full overflow-x-auto pt-8 flex justify-center items-center font-label-mono text-[11px]" 
            ref={mermaidRef}
          >
            {/* Mermaid SVG injects here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDesign;
