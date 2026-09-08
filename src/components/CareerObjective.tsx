import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const CareerObjective: React.FC = () => {
  return (
    <section className="border-t border-[#444748]/30 pt-16 pb-4">
      <div className="bg-[#1c1b1b] border border-[#444748]/40 rounded p-8 sm:p-12 space-y-6 relative">
        <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
          CAREER OBJECTIVE
        </div>
        <blockquote className="font-headline-lg text-xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight leading-snug">
          {PERSONAL_INFO.careerObjective}
        </blockquote>
        <div className="flex items-center space-x-3 pt-2">
          <span className="w-8 h-[1px] bg-[#444748]"></span>
          <span className="font-code-inline text-xs text-[#c4c7c8] uppercase tracking-widest">
            HARPREET T GOWDA — B.TECH AI &amp; DS
          </span>
        </div>
      </div>
    </section>
  );
};
