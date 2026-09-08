import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { AreasOfInterest } from './components/AreasOfInterest';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { ConnectCards } from './components/ConnectCards';
import { CareerObjective } from './components/CareerObjective';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Certificate, Project } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] selection:bg-white selection:text-black">
      {/* Top Fixed Header */}
      <Header
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 space-y-20 sm:space-y-24">
        {/* 01. Hero */}
        <Hero
          onViewWork={() => scrollToSection('projects')}
          onContact={() => scrollToSection('contact')}
        />

        {/* 02. About */}
        <About />

        {/* 03. Academic Background & Achievement */}
        <Education />

        {/* 04. Technical Skills */}
        <Skills />

        {/* 05. Areas of Interest */}
        <AreasOfInterest />

        {/* 06. Certifications */}
        <Certifications onSelectCertificate={(cert) => setSelectedCertificate(cert)} />

        {/* 07. Selected Work / Projects */}
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 08. Journey Timeline */}
        <Journey />

        {/* 09. GitHub & LinkedIn Panels */}
        <ConnectCards />

        {/* 10. Career Objective Quote */}
        <CareerObjective />

        {/* 11. Contact & Connect */}
        <Contact />

        {/* 12. Footer */}
        <Footer />
      </main>

      {/* Certificate Verification Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Resume / Candidate Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
