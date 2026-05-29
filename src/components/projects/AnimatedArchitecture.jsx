import React from 'react';
import { motion } from 'framer-motion';

const AnimatedArchitecture = ({ nodes = [], edges = [] }) => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#0A0A0A] border border-outline-variant overflow-hidden group rounded-sm p-4">
      {/* Background Grid & Scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMGgyMHYyMEgwem0xMCAxMGgxMHYxMEgxMHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]"></div>
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none z-30" />

      <div className="absolute top-4 left-4 z-20 font-label-mono text-[10px] text-white/50 uppercase tracking-[0.3em]">
        Live Interactive Topology
      </div>

      {/* SVG Layer for Edges */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
        {edges.map((edge, i) => {
          const source = nodes.find((n) => n.id === edge.source);
          const target = nodes.find((n) => n.id === edge.target);

          if (!source || !target) return null;

          const startX = `${source.x}%`;
          const startY = `${source.y}%`;
          const endX = `${target.x}%`;
          const endY = `${target.y}%`;

          // Calculate bezier control points for curved lines
          const isHorizontal = Math.abs(target.x - source.x) > Math.abs(target.y - source.y);
          const cp1x = isHorizontal ? `${(source.x + target.x) / 2}%` : startX;
          const cp1y = isHorizontal ? startY : `${(source.y + target.y) / 2}%`;
          const cp2x = isHorizontal ? `${(source.x + target.x) / 2}%` : endX;
          const cp2y = isHorizontal ? endY : `${(source.y + target.y) / 2}%`;

          const pathD = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

          return (
            <g key={`edge-${i}`}>
              {/* Base Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                strokeOpacity="0.2"
              />
              {/* Animated Data Stream (Marching Ants) */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="8 12"
                animate={{ strokeDashoffset: [40, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'linear',
                }}
                style={{ filter: 'drop-shadow(0 0 6px rgba(96,165,250,0.8))' }}
              />
            </g>
          );
        })}
      </svg>

      {/* HTML Layer for Nodes */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: node.delay || 0 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="relative group/node cursor-crosshair">
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-[#2563EB] rounded-sm blur-[16px] opacity-20 group-hover/node:opacity-50 transition-opacity duration-300"></div>
              
              {/* Node Card */}
              <div className="relative bg-[#0A0A0A] border border-[#2563EB]/40 p-3 flex flex-col items-center justify-center min-w-[90px] shadow-[0_0_15px_rgba(37,99,235,0.1)] group-hover/node:border-[#60A5FA] transition-colors duration-300 rounded-sm">
                <span className="material-symbols-outlined text-[#60A5FA] text-2xl mb-1 drop-shadow-[0_0_4px_rgba(96,165,250,0.5)]">
                  {node.icon}
                </span>
                <span className="font-label-mono text-[10px] text-white whitespace-nowrap tracking-wider text-center">
                  {node.label}
                </span>
                
                {/* Decorative tech dots */}
                <div className="absolute top-1 right-1 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#2563EB]/50" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedArchitecture;
