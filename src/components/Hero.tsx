import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContact }) => {
  return (
    <section id="home" className="relative pt-6 pb-12 overflow-hidden scroll-mt-24">
      {/* Subtle Technical Dot Matrix Background Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 -z-10"
        style={{
          backgroundImage: 'radial-gradient(#8e9192 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="space-y-6">
        {/* Monospace Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#1c1b1b] border border-[#444748]/50 rounded text-xs font-code-inline text-[#c4c7c8]">
          <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span className="tracking-widest uppercase text-[11px] sm:text-xs">
            [ AVAILABLE FOR INTERNSHIPS & OPPORTUNITIES ]
          </span>
        </div>

        {/* Heading Group */}
        <div className="space-y-3">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-headline-md text-xl sm:text-2xl text-[#c4c7c8] font-medium tracking-tight uppercase">
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* Technical Breadcrumb Line */}
        <div className="font-code-inline text-xs sm:text-sm text-[#8e9192] tracking-wider flex items-center space-x-2 py-1">
          <span className="text-[#c4c7c8]">&gt;</span>
          <span>PYTHON / C / AI / DATA / SOFTWARE DEVELOPMENT</span>
        </div>

        {/* Verbatim Introduction */}
        <p className="font-body-lg text-base sm:text-lg text-[#c7c6c6] max-w-2xl leading-relaxed">
          {PERSONAL_INFO.intro}
        </p>

        {/* CTA Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={onViewWork}
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#2f3131] font-medium text-sm rounded hover:bg-[#e2e2e2] transition-colors duration-150 cursor-pointer"
          >
            VIEW MY WORK
          </button>
          <button
            onClick={onContact}
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#444748]/60 text-white font-medium text-sm rounded hover:border-white hover:bg-[#1c1b1b] transition-all duration-150 cursor-pointer"
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </section>
  );
};
