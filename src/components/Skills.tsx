import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-8 border-t border-[#444748]/30 pt-16 scroll-mt-20">
      <div className="space-y-2">
        <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
          04 / TECHNICAL SKILLS
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
          SKILLS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="bg-[#201f1f] border border-[#444748]/40 rounded p-6 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#444748]/30 pb-3">
                <span className="font-headline-sm text-base sm:text-lg font-bold text-white tracking-tight">
                  {category.title}
                </span>
                <span className="font-code-inline text-xs text-[#8e9192]">{category.code}</span>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => {
                  const isActive = item.status === 'ACTIVE';
                  return (
                    <li
                      key={item.name}
                      className="flex items-center justify-between p-3 bg-[#1c1b1b] border border-[#444748]/20 rounded"
                    >
                      <span
                        className={`font-body-md text-sm font-medium ${
                          isActive ? 'text-white' : 'text-[#c7c6c6]'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`font-code-inline text-[11px] px-2 py-0.5 rounded border ${
                          isActive
                            ? 'bg-[#353534] text-white border-[#444748]/50'
                            : 'bg-[#1c1b1b] text-[#c4c7c8] border-[#444748]/40'
                        }`}
                      >
                        {item.status}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="font-code-inline text-[11px] text-[#8e9192] uppercase tracking-wider pt-2">
              {category.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
