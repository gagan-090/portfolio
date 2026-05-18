import React from 'react';
import useScrollProgress from '../../hooks/useScrollProgress';

export const ScrollProgress = () => {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-20 left-0 w-full h-[2px] z-[51] pointer-events-none bg-transparent">
      <div 
        className="h-full bg-[#2563EB] transition-all duration-75"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};
export default ScrollProgress;
