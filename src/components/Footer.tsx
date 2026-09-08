import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#444748]/30 pt-12 pb-16 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-headline-sm text-lg font-bold text-white tracking-tight">
            HTG / {PERSONAL_INFO.name.toUpperCase()}
          </div>
          <div className="font-code-inline text-xs text-[#8e9192]">
            B.Tech Artificial Intelligence &amp; Data Science · {PERSONAL_INFO.university}
          </div>
        </div>

        <div className="flex flex-col md:items-end space-y-2">
          <div className="font-code-inline text-xs text-[#8e9192]">
            PYTHON / C / AI / DATA / SOFTWARE
          </div>
          <div className="flex items-center space-x-4 font-code-inline text-xs">
            <a
              className="text-[#c7c6c6] hover:text-white transition-colors"
              href={PERSONAL_INFO.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              [GITHUB ↗]
            </a>
            <a
              className="text-[#c7c6c6] hover:text-white transition-colors"
              href={PERSONAL_INFO.linkedinUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              [LINKEDIN ↗]
            </a>
            <a
              className="text-[#c7c6c6] hover:text-white transition-colors"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              [EMAIL ↗]
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-[#444748]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-code-inline text-[11px] text-[#8e9192]">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>STATUS: STANDBY · LATENCY: 12MS</span>
        </div>
        <div>© 2026 {PERSONAL_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.</div>
        <div className="text-[#8e9192]">ENGINEERED WITH EDITORIAL RESTRAINT</div>
      </div>
    </footer>
  );
};
