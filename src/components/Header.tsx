import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'certifications', label: 'CERTIFICATIONS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/85 backdrop-blur-md border-b border-[#444748]/30 transition-all">
      <div className="h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram & Identity */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="flex items-center space-x-2 group focus:outline-none"
            aria-label="Home"
          >
            <img
              alt="HTG Monogram"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={PERSONAL_INFO.monogramLogo}
              referrerPolicy="no-referrer"
            />
            <div className="flex items-center space-x-2">
              <span className="font-headline-sm text-base sm:text-lg text-white font-bold tracking-tight">
                HTG
              </span>
              <span className="hidden sm:inline-block font-code-inline text-[11px] text-[#c4c7c8] border-l border-[#444748]/40 pl-2 tracking-wider">
                HARPREET T GOWDA
              </span>
            </div>
          </a>

          {/* Status Badge */}
          <div className="hidden md:flex items-center space-x-2 px-2.5 py-1 bg-[#1c1b1b] border border-[#444748]/40 rounded">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="font-code-inline text-[10px] text-[#c4c7c8] uppercase tracking-wider">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`font-code-inline text-xs transition-colors py-1 cursor-pointer uppercase ${
                  isActive
                    ? 'text-white border-b-2 border-white'
                    : 'text-[#c4c7c8] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Avatar */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 font-code-inline text-xs uppercase bg-[#1c1b1b] border border-[#444748]/40 text-[#e5e2e1] hover:border-[#8e9192] hover:text-white transition-all rounded cursor-pointer"
          >
            [ RESUME / CONNECT ]
          </button>

          <button
            onClick={onOpenResume}
            className="w-8 h-8 rounded-full bg-white text-[#2f3131] flex items-center justify-center hover:bg-[#e2e2e2] transition-colors cursor-pointer"
            title="View Profile / Resume"
            aria-label="View Profile / Resume"
          >
            <User className="w-4 h-4 text-[#2f3131]" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[#c4c7c8] hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131313] border-b border-[#444748]/40 px-6 py-4 space-y-3">
          <div className="flex items-center space-x-2 pb-2 border-b border-[#444748]/20">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="font-code-inline text-[10px] text-[#c4c7c8] uppercase tracking-wider">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
          <nav className="flex flex-col space-y-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left font-code-inline text-xs py-1.5 uppercase transition-colors ${
                  activeSection === item.id ? 'text-white font-bold' : 'text-[#c4c7c8]'
                }`}
              >
                &gt; {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#444748]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full text-center py-2 font-code-inline text-xs uppercase bg-[#1c1b1b] border border-[#444748]/50 text-white rounded"
            >
              [ VIEW RESUME / CONNECT ]
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
