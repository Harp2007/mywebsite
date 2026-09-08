import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';
import { Check, Copy, Download, ExternalLink, Mail, Phone, Printer, X } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyInfo = () => {
    const text = `Harpreet T Gowda
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}
GitHub: ${PERSONAL_INFO.githubUrl}
University: ${PERSONAL_INFO.university}, Bengaluru
Degree: ${PERSONAL_INFO.degree} (CGPA: ${PERSONAL_INFO.cgpa})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#1c1b1b] border border-[#444748]/60 rounded-lg max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#444748]/40 bg-[#131313] shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-code-inline text-xs text-[#c4c7c8] tracking-widest uppercase">
              CANDIDATE DOSSIER · {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopyInfo}
              className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#201f1f] border border-[#444748]/40 hover:border-white text-xs font-code-inline text-[#e5e2e1] rounded transition-colors cursor-pointer"
              title="Copy contact text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY INFO</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 bg-white hover:bg-[#e2e2e2] text-xs font-code-inline font-medium text-[#2f3131] rounded transition-colors cursor-pointer"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="text-[#8e9192] hover:text-white p-1 cursor-pointer"
              title="Close [ESC]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#171717] text-[#e5e2e1] font-body-md print:bg-white print:text-black">
          {/* Header Identity */}
          <div className="border-b border-[#444748]/40 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <span className="font-code-inline text-xs sm:text-sm text-[#8e9192] print:text-gray-600">
                {PERSONAL_INFO.location}, India
              </span>
            </div>
            <p className="font-code-inline text-xs text-[#c4c7c8] tracking-wider uppercase print:text-gray-700">
              {PERSONAL_INFO.degree} · BATCH {PERSONAL_INFO.batch}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs font-code-inline text-[#8e9192] print:text-gray-600">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-white flex items-center space-x-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span>•</span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="hover:text-white flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center space-x-1"
              >
                <ExternalLink className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center space-x-1"
              >
                <ExternalLink className="w-3 h-3" />
                <span>GitHub (@{PERSONAL_INFO.githubUsername})</span>
              </a>
            </div>
          </div>

          {/* Academic Objective */}
          <div className="space-y-2">
            <h2 className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase border-b border-[#444748]/30 pb-1">
              CAREER OBJECTIVE
            </h2>
            <p className="text-sm leading-relaxed text-[#c7c6c6] print:text-gray-800">
              {PERSONAL_INFO.careerObjective.replace(/“|”/g, '')}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase border-b border-[#444748]/30 pb-1">
              EDUCATION &amp; ACADEMIC EXCELLENCE
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-bold text-white text-base print:text-black">
                    {PERSONAL_INFO.university}, Bengaluru
                  </h3>
                  <p className="text-xs text-[#c4c7c8] print:text-gray-700">
                    Bachelor of Technology in Artificial Intelligence &amp; Data Science (Year II,
                    Semester III)
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-code-inline text-xs text-white bg-[#353534] px-2.5 py-1 rounded border border-[#444748]/40 print:text-black">
                    CGPA: {PERSONAL_INFO.cgpa} / 10.0
                  </span>
                  <p className="font-code-inline text-[11px] text-[#8e9192] mt-1">
                    {PERSONAL_INFO.batch}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#8e9192] print:text-gray-600">
                Key Coursework: Data Structures &amp; Algorithms, Object-Oriented Programming,
                Python, C Programming, Linear Algebra, Discrete Mathematics, Data Analysis.
              </p>
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div className="space-y-3">
            <h2 className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase border-b border-[#444748]/30 pb-1">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-[#201f1f] border border-[#444748]/30 rounded space-y-1 print:bg-gray-100 print:text-black">
                <span className="font-code-inline text-[10px] text-[#8e9192] uppercase">
                  PROGRAMMING LANGUAGES
                </span>
                <p className="font-medium text-white print:text-black">
                  Python (Advanced), C (Intermediate)
                </p>
              </div>
              <div className="p-3 bg-[#201f1f] border border-[#444748]/30 rounded space-y-1 print:bg-gray-100 print:text-black">
                <span className="font-code-inline text-[10px] text-[#8e9192] uppercase">
                  AI &amp; DATA PIPELINES
                </span>
                <p className="font-medium text-white print:text-black">
                  Pandas, NumPy, Matplotlib, Data Analysis, ML Concepts
                </p>
              </div>
              <div className="p-3 bg-[#201f1f] border border-[#444748]/30 rounded space-y-1 print:bg-gray-100 print:text-black">
                <span className="font-code-inline text-[10px] text-[#8e9192] uppercase">
                  CORE SYSTEMS &amp; TOOLS
                </span>
                <p className="font-medium text-white print:text-black">
                  DSA Fundamentals, Git/GitHub, VS Code, Linux CLI
                </p>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-3">
            <h2 className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase border-b border-[#444748]/30 pb-1">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-white print:text-black uppercase tracking-tight">
                      {proj.title}
                    </h3>
                    <span className="font-code-inline text-[11px] text-[#8e9192]">
                      {proj.tags}
                    </span>
                  </div>
                  <p className="text-xs text-[#c7c6c6] print:text-gray-700">{proj.description}</p>
                  <ul className="list-disc list-inside text-xs text-[#8e9192] space-y-0.5 print:text-gray-600">
                    {proj.details.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase border-b border-[#444748]/30 pb-1">
              ACCREDITATIONS &amp; CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 bg-[#201f1f] border border-[#444748]/30 rounded space-y-1 print:bg-gray-100 print:text-black"
                >
                  <span className="font-code-inline text-[10px] text-[#8e9192] uppercase">
                    {cert.recordId} · {cert.issuer}
                  </span>
                  <h4 className="font-bold text-xs text-white uppercase print:text-black">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-[#c7c6c6] print:text-gray-700">
                    {cert.credentialId} ({cert.date})
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#131313] border-t border-[#444748]/40 flex items-center justify-between shrink-0">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Inquiry%20-%20Harpreet%20T%20Gowda`}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-[#2f3131] font-code-inline text-xs uppercase font-medium rounded hover:bg-[#e2e2e2] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>CONNECT VIA EMAIL</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#201f1f] border border-[#444748]/40 text-white font-code-inline text-xs uppercase rounded hover:border-white transition-colors cursor-pointer"
          >
            CLOSE DOSSIER
          </button>
        </div>
      </div>
    </div>
  );
};
