import React, { useEffect } from 'react';
import { Certificate } from '../types';
import { Award, ShieldCheck, X } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#201f1f] border border-[#444748]/60 rounded max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#444748]/30 pb-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="font-code-inline text-[11px] text-[#8e9192]">
              DOCUMENT VERIFICATION · {certificate.recordId}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#c7c6c6] hover:text-white font-code-inline text-xs flex items-center space-x-1 cursor-pointer"
          >
            <span>[ESC / CLOSE]</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-[#1c1b1b] border border-[#444748]/40 rounded mt-1">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-white uppercase">
                {certificate.title}
              </h3>
              <p className="font-code-inline text-xs text-[#8e9192]">{certificate.date}</p>
            </div>
          </div>

          <div className="p-4 bg-[#1c1b1b] border border-[#444748]/30 rounded space-y-2.5">
            <div>
              <div className="font-code-inline text-[11px] text-[#8e9192] uppercase">
                ISSUING AUTHORITY
              </div>
              <div className="font-body-md text-white font-medium text-sm mt-0.5">
                {certificate.issuer}
              </div>
            </div>

            <div className="pt-2 border-t border-[#444748]/20">
              <div className="font-code-inline text-[11px] text-[#8e9192] uppercase">
                VALIDATION METRICS &amp; CONTENT
              </div>
              <div className="font-code-inline text-xs text-[#c7c6c6] mt-0.5 leading-relaxed">
                {certificate.verificationDetails}
              </div>
            </div>

            <div className="pt-2 border-t border-[#444748]/20">
              <div className="font-code-inline text-[11px] text-[#8e9192] uppercase mb-1.5">
                KEY COMPETENCIES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-code-inline text-[10px] px-2 py-0.5 bg-[#353534] text-white border border-[#444748]/50 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="font-body-md text-xs text-[#8e9192] leading-relaxed">
            Official digital accreditation record maintained under academic credentials archive.
            Verified through institutional coursework benchmarks.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <span className="font-code-inline text-[10px] text-emerald-400 flex items-center">
            ● STATUS: ACADEMIC CREDENTIAL VERIFIED
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white text-[#2f3131] font-medium text-xs font-code-inline uppercase rounded hover:bg-[#e2e2e2] transition-colors cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
