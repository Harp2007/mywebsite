import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certificate } from '../types';

interface CertificationsProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCertificate }) => {
  return (
    <section id="certifications" className="space-y-8 border-t border-[#444748]/30 pt-16 scroll-mt-20">
      <div className="space-y-2">
        <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
          05 / CERTIFICATIONS
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
          CERTIFICATIONS
        </h2>
        <p className="font-body-md text-[#c7c6c6] text-sm sm:text-base max-w-2xl leading-relaxed">
          Completed academic and professional Python certifications demonstrating hands-on
          programming competencies, data structures manipulation, and analytical fundamentals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#201f1f] border border-[#444748]/40 rounded p-6 space-y-6 flex flex-col justify-between hover:border-[#8e9192] transition-colors duration-150"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#444748]/30 pb-3">
                <span className="font-code-inline text-[11px] text-[#8e9192]">{cert.recordId}</span>
                <span className="font-code-inline text-[11px] px-2 py-0.5 bg-[#1c1b1b] text-white border border-[#444748]/40 rounded">
                  VERIFIED
                </span>
              </div>
              <h3 className="font-headline-sm text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                {cert.title}
              </h3>
              <div className="space-y-1 text-sm font-body-md text-[#c7c6c6]">
                <div className="flex justify-between">
                  <span className="text-[#8e9192]">Issuer:</span>
                  <span className="text-white font-medium">{cert.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8e9192]">Credential ID:</span>
                  <span className="font-code-inline text-xs text-[#e5e2e1]">{cert.credentialId}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectCertificate(cert)}
              className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#1c1b1b] border border-[#444748]/40 text-white font-code-inline text-xs uppercase hover:border-white transition-colors rounded cursor-pointer"
            >
              <span>VIEW CERTIFICATE</span>
              <span>→</span>
            </button>
          </div>
        ))}
      </div>

      {/* Verified Placeholder Notice */}
      <div className="p-4 bg-[#1c1b1b] border border-[#444748]/30 rounded flex items-center justify-between flex-wrap gap-3">
        <span className="font-code-inline text-[11px] text-[#8e9192]">
          // INTEGRATION NOTE: SYSTEM PREPARED FOR UPCOMING DSA &amp; CLOUD COMPUTING ACCREDITATIONS
        </span>
        <span className="font-code-inline text-xs text-white">[ STATUS: ACTIVE SYNC ]</span>
      </div>
    </section>
  );
};
