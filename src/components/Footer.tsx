import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer inline-block mb-4">
              <div className="text-2xl font-bold tracking-tighter font-display">
                <span className="text-text-main">Shimsy</span>
                <span className="text-accent">.</span>
              </div>
            </Link>
            <p className="text-text-muted max-w-sm">
              Building scalable web applications and intelligent data solutions with a focus on modern design.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={portfolioData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-text-main/5 border border-border/10 flex items-center justify-center text-text-muted hover:text-text-main hover:bg-text-main/10 transition-all"
            >
              <FaGithub size={18} />
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-text-main/5 border border-border/10 flex items-center justify-center text-text-muted hover:text-text-main hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/10 text-text-muted text-sm">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1.5">
            Designed & Built with Sirius Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
