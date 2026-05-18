import React from 'react';

export const MarqueeTicker = ({ text = "FLUTTER DEVELOPER • REACT NATIVE EXPERT • CROSS-PLATFORM ARCHITECT • FULL-STACK ENGINEER • MOBILE INNOVATOR" }) => {
  // Repeated string for seamless sliding marquee
  const repeatedText = `${text} • ${text} • ${text} • ${text} • `;

  return (
    <div className="marquee-container bg-[#0A0A0A] text-white py-5 uppercase font-label-mono text-[12px] tracking-[0.2em] border-y border-outline-variant select-none">
      <div className="marquee-content flex gap-4 whitespace-nowrap">
        <span>{repeatedText}</span>
        <span>{repeatedText}</span>
      </div>
    </div>
  );
};
export default MarqueeTicker;
