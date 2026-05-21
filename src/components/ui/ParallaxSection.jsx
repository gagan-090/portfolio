import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ParallaxSection — Wraps children with a scroll-linked parallax effect.
 * 
 * @param {number} speed - Parallax intensity (-50 to 50, default: 20)
 * @param {string} className - Additional CSS classes
 * @param {string} direction - "up" or "down" (default: "up")
 */
const ParallaxSection = ({ children, speed = 20, className = "", direction = "up" }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yValue = direction === "up" ? [speed, -speed] : [-speed, speed];
  const y = useTransform(scrollYProgress, [0, 1], yValue);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
