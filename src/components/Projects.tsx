import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="space-y-8 border-t border-[#444748]/30 pt-16 scroll-mt-20">
      <div className="space-y-2">
        <div className="font-code-inline text-xs text-[#8e9192] tracking-widest uppercase">
          06 / SELECTED WORK
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
          PROJECTS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-[#201f1f] border border-[#444748]/40 rounded p-6 space-y-6 flex flex-col justify-between hover:border-[#8e9192] transition-colors duration-150 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#444748]/30 pb-3">
                <span className="font-code-inline text-xs text-[#8e9192]">{project.code}</span>
                <span className="font-code-inline text-[11px] text-[#c4c7c8]">{project.tags}</span>
              </div>
              <h3 className="font-headline-sm text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="font-body-md text-[#c7c6c6] text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#444748]/30 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(project)}
                className="font-code-inline text-xs text-white uppercase hover:text-[#c7c6c6] transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <span>VIEW PROJECT</span>
                <span>→</span>
              </button>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-code-inline text-[11px] text-[#8e9192] hover:text-white transition-colors"
                title="View code on GitHub"
              >
                [GITHUB]
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
