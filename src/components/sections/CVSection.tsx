import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Download, FileText, ChevronRight } from 'lucide-react';

const CVSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'skills'>('overview');

  return (
    <section id="cv" className="py-24 relative overflow-hidden">
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple/10 via-background to-background -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <FileText className="text-accent" size={32} />
              Interactive <span className="text-gradient">CV</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full"></div>
          </div>
          
          <a href="/cv.pdf" download className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-surface border border-white/10 rounded-xl hover:bg-white/5 hover:border-accent/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent overflow-hidden">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center gap-2">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Full CV
            </span>
          </a>
        </motion.div>

        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Sidebar / Tabs */}
          <div className="lg:w-64 bg-surface/50 border-r border-white/10 p-6 flex flex-row lg:flex-col gap-2 overflow-x-auto">
            {['overview', 'education', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between whitespace-nowrap ${
                  activeTab === tab 
                    ? 'bg-accent/10 text-accent border border-accent/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="capitalize">{tab}</span>
                {activeTab === tab && <ChevronRight size={16} className="hidden lg:block" />}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 lg:p-12 min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Professional Summary</h3>
                  <div className="prose prose-invert max-w-none text-slate-300">
                    <p className="text-lg leading-relaxed mb-6">{portfolioData.personal.bio}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-surface/50 p-6 rounded-xl border border-white/5">
                        <p className="text-sm text-slate-400 mb-1">Role</p>
                        <p className="font-semibold text-lg">{portfolioData.personal.role}</p>
                      </div>
                      <div className="bg-surface/50 p-6 rounded-xl border border-white/5">
                        <p className="text-sm text-slate-400 mb-1">Degree</p>
                        <p className="font-semibold text-lg">{portfolioData.education[0].degree}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Education History</h3>
                  <div className="space-y-8">
                    {portfolioData.education.map((edu) => (
                      <div key={edu.id} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-accent before:rounded-full before:shadow-[0_0_10px_rgba(59,130,246,0.5)] after:absolute after:left-[5px] after:top-5 after:w-0.5 after:h-full after:bg-white/10 last:after:hidden">
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                        <div className="flex items-center gap-3 mt-2 mb-3">
                          <span className="text-accent font-medium">{edu.institution}</span>
                          <span className="text-slate-500 text-sm">{edu.period}</span>
                        </div>
                        {edu.description && <p className="text-slate-300">{edu.description}</p>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Skills Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.skills.map((category) => (
                      <div key={category.title}>
                        <h4 className="font-bold text-lg mb-4 text-purple-light">{category.title}</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map(skill => (
                            <span key={skill.name} className="px-3 py-1.5 bg-surface rounded-lg border border-white/5 text-sm font-medium text-slate-300 hover:border-accent/50 transition-colors cursor-default">
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
