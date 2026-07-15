import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-light/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-10 lg:pt-0">
          <div className="max-w-3xl lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium"
          >
            Welcome to my portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <br />
            <span className="glitch-text" data-text={portfolioData.personal.name}>{portfolioData.personal.name}</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-slate-300 mb-6"
          >
            {portfolioData.personal.role}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            {portfolioData.personal.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] border-2 border-accent hover:bg-transparent">
                View Projects <ArrowRight size={18} />
              </button>
            </Link>
            
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="px-6 py-3 rounded-xl font-medium text-white border border-white/20 hover:bg-white/5 transition-all">
                Contact Me
              </button>
            </Link>

            <a href="/cv.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white border border-purple/30 bg-purple/10 hover:bg-purple/20 transition-all">
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-2/5 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Spinning gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-purple to-accent animate-[spin_4s_linear_infinite] opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Image container */}
            <div className="absolute inset-1.5 rounded-full overflow-hidden border-4 border-surface bg-surface z-10">
              <img 
                src={portfolioData.personal.profileImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"} 
                alt={portfolioData.personal.name} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-surface border border-white/10 rounded-2xl rotate-12 -z-10 group-hover:rotate-45 transition-transform duration-500"></div>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/20 border border-accent/30 rounded-full -z-10 group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-500"></div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
