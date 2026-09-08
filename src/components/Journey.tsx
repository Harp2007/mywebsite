import React from 'react';
import { TIMELINE } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section className="space-y-8 border-t border-[#444748]/30 pt-16">
      <div className="space-y-2">
        <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
          07 / DEVELOPMENT
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
          JOURNEY
        </h2>
      </div>

      {/* Vertical Timeline with fine rule */}
      <div className="relative pl-6 sm:pl-8 space-y-10 before:content-[''] before:absolute before:left-2 sm:before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#444748]/40">
        {TIMELINE.map((item) => {
          const isCurrent = item.status === 'active';
          return (
            <div key={item.step} className="relative space-y-1">
              <span
                className={`absolute -left-6 sm:-left-8 top-1.5 w-2 h-2 rounded-full ring-4 ring-[#0e0e0e] ${
                  isCurrent ? 'bg-white animate-pulse' : 'bg-[#8e9192]'
                }`}
              />
              <div className="flex items-baseline space-x-3">
                <span className="font-code-inline text-xs text-[#8e9192] font-semibold">
                  {item.step}
                </span>
                <span className="font-headline-sm text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                  {item.title}
                </span>
              </div>
              <p className="font-body-md text-[#c7c6c6] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
