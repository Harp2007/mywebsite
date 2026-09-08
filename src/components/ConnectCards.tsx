import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ConnectCards: React.FC = () => {
  return (
    <section className="space-y-8 border-t border-[#444748]/30 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* GitHub Panel */}
        <div className="lg:col-span-7 bg-[#201f1f] border border-[#444748]/40 rounded p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#444748]/30 pb-4">
            <div className="space-y-1">
              <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
                08 / CODE ARCHIVE
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                GITHUB
              </h2>
            </div>
            <div className="px-3 py-1 bg-[#1c1b1b] border border-[#444748]/40 rounded font-code-inline text-xs text-white">
              @{PERSONAL_INFO.githubUsername}
            </div>
          </div>

          <p className="font-body-md text-[#c7c6c6] text-sm sm:text-base leading-relaxed">
            Where my code and projects are documented. Open to technical collaborations and software
            experiments.
          </p>

          {/* Integration-ready repository state */}
          <div className="p-6 bg-[#1c1b1b] border border-[#444748]/30 rounded space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-code-inline text-[11px] text-[#8e9192] uppercase tracking-wider">
                REPOSITORY MONITOR
              </span>
              <span className="font-code-inline text-[11px] text-[#c7c6c6]">
                PUBLIC REPOSITORIES
              </span>
            </div>
            <div className="py-6 text-center border-t border-b border-[#444748]/20 space-y-1">
              <div className="font-code-inline text-sm text-[#e5e2e1]">
                github.com/{PERSONAL_INFO.githubUsername}
              </div>
              <div className="font-code-inline text-[11px] text-[#8e9192]">
                [ CONNECTED — READY FOR REALTIME ACTIVITY FEED ]
              </div>
            </div>
          </div>

          <a
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#1c1b1b] border border-[#444748]/40 text-white font-code-inline text-xs uppercase rounded hover:border-white hover:bg-[#201f1f] transition-all"
            href={PERSONAL_INFO.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>VISIT GITHUB</span>
            <span>→</span>
          </a>
        </div>

        {/* LinkedIn Panel */}
        <div className="lg:col-span-5 bg-[#201f1f] border border-[#444748]/40 rounded p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div className="border-b border-[#444748]/30 pb-4">
              <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
                NETWORK / CONNECT
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
                LINKEDIN
              </h2>
            </div>

            <p className="font-body-md text-[#c7c6c6] text-sm sm:text-base leading-relaxed">
              Connect with me and follow my journey in Artificial Intelligence, Data Science and
              Software Development.
            </p>

            <div className="p-4 bg-[#1c1b1b] border border-[#444748]/30 rounded space-y-2">
              <div className="font-code-inline text-[11px] text-[#8e9192] uppercase">
                STATUS INDICATOR
              </div>
              <div className="font-body-md text-white font-medium text-sm sm:text-base">
                Seeking Summer Internships &amp; Collaborative Projects
              </div>
            </div>
          </div>

          <a
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-[#2f3131] font-medium text-sm rounded hover:bg-[#e2e2e2] transition-colors mt-6"
            href={PERSONAL_INFO.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>VIEW LINKEDIN</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
