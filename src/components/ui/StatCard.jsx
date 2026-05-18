import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

export const StatCard = ({ label, value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const animatedValue = useCountUp(value, 1500, isInView);

  return (
    <div ref={ref} className="flex flex-col">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-wider mb-1">
        {label}
      </span>
      <span className="font-headline-md text-[32px] font-bold text-on-surface">
        {animatedValue}
      </span>
    </div>
  );
};
export default StatCard;
