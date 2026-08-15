import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, User, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <User className="text-accent" size={32} />
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            
            <div className="relative mb-8 w-48 h-48 sm:w-56 sm:h-56 mx-auto group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-[-15px] border-2 border-dashed border-primary rounded-full animate-[float_6s_ease-in-out_infinite] opacity-50 z-0"></div>
              <img 
                src={portfolioData.personal.profileImage || './profile.png'} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full filter grayscale-[10%] contrast-110 group-hover:grayscale-0 group-hover:contrast-125 transition-all duration-500 shadow-[0_0_30px_rgba(192,38,211,0.3)] group-hover:shadow-[0_0_50px_rgba(192,38,211,0.6)] relative z-10" 
              />
            </div>

            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center lg:justify-start gap-2 w-full">
              <BookOpen className="text-primary" size={24} />
              My Journey
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg relative z-10">
              {portfolioData.personal.bio}
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <GraduationCap className="text-accent" size={24} />
              Education
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl hover:border-accent/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-slate-400 font-medium mb-3">{edu.institution}</div>
                    {edu.description && (
                      <p className="text-slate-400 text-sm">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
