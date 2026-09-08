import React from 'react';
import { INTEREST_AREAS } from '../data/portfolioData';

export const AreasOfInterest: React.FC = () => {
  return (
    <section className="space-y-8 border-t border-[#444748]/30 pt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
            SPECIFICATION / CONCENTRATIONS
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
            AREAS OF INTEREST
          </h2>
        </div>
        <div className="font-code-inline text-xs text-[#8e9192]">
          // 07 FIELDS OF INQUIRY
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {INTEREST_AREAS.map((item) => {
          const isFullWidth = item.id === '07';
          return (
            <div
              key={item.id}
              className={`p-6 bg-[#201f1f] border border-[#444748]/40 rounded hover:border-[#8e9192] transition-colors duration-150 space-y-3 ${
                isFullWidth ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="font-code-inline text-xs text-[#8e9192]">{item.id}</div>
              <h3 className="font-headline-sm text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                {item.title}
              </h3>
              <p
                className={`font-body-md text-[#c7c6c6] text-sm leading-relaxed ${
                  isFullWidth ? 'max-w-2xl' : ''
                }`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
