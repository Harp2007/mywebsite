import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="space-y-8 border-t border-[#444748]/30 pt-16 scroll-mt-20">
      <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
        01 / ABOUT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold tracking-tight text-white uppercase leading-tight">
            BUILDING MY FOUNDATION IN AI & DATA
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-[#444748]/60"></div>
        </div>

        <div className="lg:col-span-7 space-y-6 font-body-md text-[#c7c6c6] text-sm sm:text-base leading-relaxed">
          <p>{PERSONAL_INFO.aboutP1}</p>
          <p>{PERSONAL_INFO.aboutP2}</p>
        </div>
      </div>

      {/* Quick Profile 4-Column Minimal Block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#444748]/30 bg-[#1c1b1b] rounded overflow-hidden">
        <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#444748]/30">
          <span className="block font-code-inline text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
            NAME
          </span>
          <span className="block font-body-md text-white font-medium text-sm sm:text-base">
            {PERSONAL_INFO.name}
          </span>
        </div>

        <div className="p-6 border-b sm:border-b-0 lg:border-r border-[#444748]/30">
          <span className="block font-code-inline text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
            DOMAIN
          </span>
          <span className="block font-body-md text-white font-medium text-sm sm:text-base">
            AI & Data Science
          </span>
        </div>

        <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#444748]/30">
          <span className="block font-code-inline text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
            UNIVERSITY
          </span>
          <span className="block font-body-md text-white font-medium text-sm sm:text-base">
            {PERSONAL_INFO.university}
          </span>
        </div>

        <div className="p-6">
          <span className="block font-code-inline text-[11px] text-[#8e9192] uppercase tracking-wider mb-2">
            LOCATION
          </span>
          <span className="block font-body-md text-white font-medium text-sm sm:text-base">
            {PERSONAL_INFO.location}
          </span>
        </div>
      </div>
    </section>
  );
};
