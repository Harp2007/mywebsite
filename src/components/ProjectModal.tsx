import React, { useEffect } from 'react';
import { Project } from '../types';
import { ExternalLink, FolderCode, X } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#201f1f] border border-[#444748]/60 rounded max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#444748]/30 pb-4">
          <div className="flex items-center space-x-2">
            <FolderCode className="w-4 h-4 text-white" />
            <span className="font-code-inline text-[11px] text-[#8e9192]">
              {project.code} · {project.tags}
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
          <div>
            <h3 className="font-headline-sm text-xl font-bold text-white uppercase tracking-tight">
              {project.title}
            </h3>
            <p className="font-body-md text-[#c7c6c6] text-sm mt-1 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="p-4 bg-[#1c1b1b] border border-[#444748]/30 rounded space-y-3">
            <div>
              <div className="font-code-inline text-[11px] text-[#8e9192] uppercase">
                SYSTEM OVERVIEW
              </div>
              <p className="font-body-md text-[#e5e2e1] text-xs sm:text-sm mt-1 leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            <div className="pt-2 border-t border-[#444748]/20">
              <div className="font-code-inline text-[11px] text-[#8e9192] uppercase mb-1.5">
                KEY HIGHLIGHTS
              </div>
              <ul className="space-y-1.5 font-body-md text-xs sm:text-sm text-[#c7c6c6]">
                {project.details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-white font-code-inline text-xs mt-0.5">&gt;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-[#444748]/20">
              <div className="font-code-inline text-[11px] text-[#8e9192] uppercase mb-1.5">
                TECHNOLOGY STACK
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-code-inline text-[11px] px-2 py-0.5 bg-[#353534] text-white border border-[#444748]/40 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-[#2f3131] font-code-inline text-xs uppercase font-medium rounded hover:bg-[#e2e2e2] transition-colors"
          >
            <span>VIEW CODE ON GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1c1b1b] border border-[#444748]/40 text-white font-code-inline text-xs uppercase rounded hover:border-white transition-colors cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
