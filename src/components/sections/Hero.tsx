import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const Hero: React.FC = () => {
  const fullCode = `const developer = {
  name: '${portfolioData.personal.name}',
  skills: ['React', 'Python', 'Data Science'],
  passion: 'Building scalable applications & AI solutions'
};
developer.initialize();`;

  const [displayedCode, setDisplayedCode] = useState("");
  const codeIndexRef = useRef(0);
  const isCodeDeletingRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCodeDeletingRef.current) {
        if (codeIndexRef.current <= fullCode.length) {
          setDisplayedCode(fullCode.slice(0, codeIndexRef.current));
          codeIndexRef.current++;
        } else {
          setTimeout(() => { isCodeDeletingRef.current = true; }, 4000);
        }
      } else {
        if (codeIndexRef.current >= 0) {
          setDisplayedCode(fullCode.slice(0, codeIndexRef.current));
          codeIndexRef.current -= 3;
        } else {
          isCodeDeletingRef.current = false;
          codeIndexRef.current = 0;
        }
      }
    }, 40);
    
    return () => clearInterval(interval);
  }, [fullCode]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[var(--bg-dark)]">
      {/* Abstract Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        {/* Cover Photo / Mac Terminal Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mx-auto h-[400px] sm:h-[450px] relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.15)] mb-12 border border-white/5"
        >
          {/* Mac Terminal Layout */}
          <div className="absolute inset-0 bg-[#0a0f1d]/90 backdrop-blur-xl flex flex-col">
            {/* Terminal Header */}
            <div className="h-10 bg-[#111827] border-b border-white/10 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="mx-auto text-xs text-slate-400 font-mono flex-1 text-center pr-16">
                developer@portfolio:~
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="flex-1 p-6 sm:p-8 font-mono text-sm sm:text-base md:text-lg overflow-hidden relative text-left">
              <div className="text-slate-300">
                <span className="text-primary font-bold">~</span> <span className="text-accent font-bold">node</span> start.js
              </div>
              <div className="mt-4 min-h-[160px] whitespace-pre-wrap">
                <span className="text-cyan-400">const</span> <span className="text-slate-200">developer</span> <span className="text-cyan-400">=</span> <span className="text-slate-200">{'{'}</span>
                <br />
                {displayedCode.split('\n').slice(1, -1).map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br />
                  </React.Fragment>
                ))}
                {displayedCode.split('\n').length > 1 && (
                  <><span className="text-slate-200">{displayedCode.split('\n').pop()}</span></>
                )}
                {!displayedCode.includes('\n') && (
                  <span className="text-slate-200">{displayedCode.substring(17)}</span>
                )}
                <span className="inline-block w-2.5 h-5 bg-accent ml-1 align-middle animate-pulse"></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Details & Buttons */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">{portfolioData.personal.name}</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-8 font-display"
          >
            {portfolioData.personal.role}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="group flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                View Projects 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <a href="/cv.pdf" download className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-white border border-accent/30 bg-accent/10 hover:bg-accent/20 transition-all backdrop-blur-sm">
              <Download size={18} /> Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
