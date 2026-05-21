import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

/**
 * AnimatedCounter — Animated number counter with spring physics.
 * Counts from 0 to target value when scrolled into view.
 * 
 * @param {string} value - The display value (e.g. "2+", "5+", "3")
 * @param {string} label - The label below the number
 * @param {string} sublabel - Optional sublabel text
 */
const AnimatedCounter = ({ value, label, sublabel }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");
  
  // Extract numeric part and suffix safely
  const safeValue = value != null ? value.toString() : "0";
  const numericMatch = safeValue.match(/^(\d+)/);
  const targetNum = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = safeValue.replace(/^\d+/, ''); // e.g. "+", "K", etc.

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.1 
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNum);
    }
  }, [isInView, targetNum, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div 
      ref={ref} 
      className="flex flex-col relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative line */}
      <motion.div 
        className="h-[1px] bg-on-surface mb-6"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
      />

      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-[0.2em] mb-2">
        {label}
      </span>
      
      <div className="flex items-baseline gap-0.5">
        <span className="font-display-lg-mobile text-[56px] md:text-[72px] font-bold text-on-surface leading-none tracking-tighter">
          {displayValue}
        </span>
        {suffix && (
          <span className="font-display-lg-mobile text-[36px] md:text-[48px] font-bold text-primary leading-none">
            {suffix}
          </span>
        )}
      </div>
      
      {sublabel && (
        <span className="font-body-main text-on-surface-variant mt-2">
          {sublabel}
        </span>
      )}
    </motion.div>
  );
};

export default AnimatedCounter;
