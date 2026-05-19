import React from 'react';

export const AbstractMockup = () => {
  return (
    <div className="relative flex justify-center items-center select-none">
      <div className="w-full max-w-[340px] aspect-[9/18] border-4 border-on-surface bg-white relative p-4 flex flex-col justify-between floating offset-border">
        {/* Status Bar */}
        <div className="flex justify-between items-center font-label-mono text-[10px] tracking-widest text-on-surface px-1">
          <span>12:00</span>
          <div className="flex gap-2">
            <span className="material-symbols-outlined text-[12px]">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-[12px]">battery_charging_full</span>
          </div>
        </div>
        
        {/* App Content */}
        <div className="flex-grow flex flex-col justify-between py-6 gap-4">
          {/* Brand Header */}
          <div className="flex justify-between items-center w-full px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-primary rotate-45 animate-pulse"></span>
              <span className="font-label-mono font-bold text-xs tracking-[0.2em] text-on-surface">AURA</span>
            </div>
            <span className="font-label-mono text-[8px] uppercase tracking-widest text-[#2563EB] bg-[#F5F8FF] px-2 py-0.5 border border-outline-variant">CONCIERGE</span>
          </div>

          {/* Premium Widescreen Card Display */}
          <div className="relative w-full aspect-[4/3] bg-[#0A0A0A] overflow-hidden border border-outline-variant group">
            {/* Abstract fluid animation background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB] via-[#1E1B4B] to-[#0A0A0A] opacity-90"></div>
            
            {/* Glowing active core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-primary/20 blur-[25px] animate-pulse"></div>
            
            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            {/* Text Overlay */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
              <span className="font-label-mono text-[8px] text-white/50 uppercase tracking-widest block mb-0.5">EXOTIC GETAWAYS</span>
              <h4 className="font-headline-md text-xs font-bold text-white tracking-tight leading-tight uppercase">Paris Sunset Concierge</h4>
            </div>
            
            <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
          </div>

          {/* Experience Grid Selection */}
          <div className="flex gap-2 overflow-hidden w-full">
            <div className="flex-1 border border-[#2563EB] p-2.5 bg-[#F5F8FF] min-w-0 transition-all duration-300">
              <span className="material-symbols-outlined text-[15px] text-[#2563EB] mb-1">explore</span>
              <span className="font-body-main font-bold text-[9px] block truncate text-[#2563EB]">Luxury Stay</span>
              <span className="font-label-mono text-[7px] text-[#2563EB]/70 block mt-0.5">Premium Getaway</span>
            </div>
            
            <div className="flex-1 border border-outline-variant p-2.5 bg-surface-container-lowest min-w-0 hover:border-on-surface transition-all duration-300">
              <span className="material-symbols-outlined text-[15px] text-primary mb-1">local_activity</span>
              <span className="font-body-main font-bold text-[9px] block truncate text-on-surface">Live Tickets</span>
              <span className="font-label-mono text-[7px] text-on-surface-variant block mt-0.5">Social Events</span>
            </div>
          </div>

          {/* Active Live Booking Tracker */}
          <div className="w-full border border-outline-variant p-3 bg-surface-container-lowest relative overflow-hidden flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-label-mono text-[7px] uppercase tracking-wider text-on-surface-variant block">Real-time status</span>
                <span className="font-body-main font-bold text-[10px] text-on-surface">Tour Slot Reservation</span>
              </div>
              <span className="font-label-mono text-[9px] text-[#0284C7] font-bold">89% Booked</span>
            </div>
            
            {/* Custom moving progress bar */}
            <div className="w-full h-1 bg-neutral-100 overflow-hidden relative">
              <div className="absolute top-0 left-0 h-full bg-[#0284C7] animate-pulse" style={{ width: '89%' }}></div>
            </div>
          </div>
        </div>
        
        {/* Home Navigation Indicator Bar */}
        <div className="w-24 h-1 bg-on-surface mx-auto mt-1"></div>
      </div>
    </div>
  );
};

export default AbstractMockup;
