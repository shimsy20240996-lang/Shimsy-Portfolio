import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { FaDatabase, FaChartPie, FaHtml5 } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiScikitlearn, SiTensorflow, SiPandas, SiNumpy, SiPhp, SiMongodb } from 'react-icons/si';

const techStack = [
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React.js', icon: SiReact },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Power BI', icon: FaChartPie },
  { name: 'Scikit-learn', icon: SiScikitlearn },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'HTML / CSS', icon: FaHtml5 },
  { name: 'Pandas', icon: SiPandas },
  { name: 'NumPy', icon: SiNumpy },
  { name: 'PHP', icon: SiPhp },
  { name: 'MongoDB', icon: SiMongodb },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Layers className="text-accent" size={32} />
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5 bg-[#0b1129]/50"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all cursor-default group"
                >
                  <Icon className="text-accent text-xl group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-200 tracking-wide">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
