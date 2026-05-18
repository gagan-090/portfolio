import React from 'react';

export const AbstractMockup = () => {
  return (
    <div className="relative flex justify-center items-center select-none">
      <div className="w-full max-w-[340px] aspect-[9/18] border-4 border-on-surface bg-white relative p-4 flex flex-col justify-between floating offset-border">
        {/* Status Bar */}
        <div className="flex justify-between items-center font-label-mono text-[10px] tracking-widest text-on-surface">
          <span>12:00</span>
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-[12px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[12px]">battery_charging_full</span>
          </div>
        </div>
        
        {/* App Content */}
        <div className="flex-grow flex flex-col justify-center items-center gap-6 py-8">
          <div className="w-16 h-16 border-2 border-dashed border-[#2563EB] flex items-center justify-center animate-spin [animation-duration:10s]">
            <span className="material-symbols-outlined text-[#2563EB] text-[28px]">token</span>
          </div>
          <div className="text-center">
            <h3 className="font-headline-md text-xl text-on-surface">TruckMitr</h3>
            <span className="font-label-mono text-[10px] text-primary uppercase tracking-widest block mt-1">Active Tracking</span>
          </div>
          {/* Mock stats */}
          <div className="w-full bg-[#F5F8FF] border border-[#2563EB] p-4 flex justify-between items-center">
            <div>
              <span className="font-label-mono text-[9px] uppercase text-on-surface-variant block">Current Load</span>
              <span className="font-headline-md text-sm font-bold text-on-surface">MH-12-GQ-4592</span>
            </div>
            <span className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="w-24 h-1 bg-on-surface mx-auto mt-2"></div>
      </div>
    </div>
  );
};
export default AbstractMockup;
