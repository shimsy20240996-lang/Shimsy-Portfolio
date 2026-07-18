import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="skills" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3 text-slate-900 dark:text-white">
            <span className="text-accent text-3xl md:text-4xl leading-none">•</span> Tech Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl">
            Tools and technologies I work with daily
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-100 dark:bg-[#13131a]/80 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                  className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 hover:border-accent/50 transition-all cursor-default shadow-sm dark:shadow-none group"
                >
                  <Icon className="text-accent text-xl group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wide">
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
