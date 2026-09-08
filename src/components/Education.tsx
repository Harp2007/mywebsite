import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="border-t border-[#444748]/30 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Education Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
            02 / ACADEMIC BACKGROUND
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
            EDUCATION
          </h2>
          <div className="p-6 sm:p-8 bg-[#201f1f] border border-[#444748]/40 rounded space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-code-inline text-[11px] px-2.5 py-1 bg-[#353534] text-[#e5e2e1] border border-[#444748]/40 rounded">
                {PERSONAL_INFO.semester}
              </span>
              <span className="font-code-inline text-xs text-[#8e9192]">
                {PERSONAL_INFO.batch}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-sm text-lg sm:text-xl text-white font-bold">
                {PERSONAL_INFO.degree}
              </h3>
              <p className="font-body-md text-sm sm:text-base text-[#c4c7c8]">
                {PERSONAL_INFO.university}, Bengaluru
              </p>
            </div>
            <p className="font-body-md text-[#c7c6c6] text-xs sm:text-sm pt-2 border-t border-[#444748]/20 leading-relaxed">
              Rigorous curriculum spanning advanced computational algorithms, data pipelines,
              linear algebra, discrete structures, and artificial intelligence architectures.
            </p>
          </div>
        </div>

        {/* Academic Achievement */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
            03 / ACADEMIC PROGRESS
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
            ACHIEVEMENT
          </h2>
          <div className="p-6 sm:p-8 bg-[#201f1f] border border-[#444748]/40 rounded flex flex-col justify-center h-[calc(100%-4rem)] space-y-2">
            <div className="font-display text-6xl sm:text-7xl font-bold tracking-tighter text-white leading-none">
              {PERSONAL_INFO.cgpa}
            </div>
            <div className="font-code-inline text-xs sm:text-sm text-[#c4c7c8] uppercase tracking-wider pt-2">
              {PERSONAL_INFO.cgpaPeriod}
            </div>
            <p className="font-body-md text-[#8e9192] text-xs pt-4 border-t border-[#444748]/20 leading-relaxed">
              {PERSONAL_INFO.cgpaDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
