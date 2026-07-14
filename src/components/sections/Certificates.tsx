import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Award, ExternalLink } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.certificates.map((cert, index) => {
            const card = (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-3 bg-white/5 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                    <Award size={24} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{cert.title}</h3>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm font-medium">{cert.issuer}</p>
                      <p className="text-slate-500 text-xs mt-1">{cert.date}</p>
                    </div>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors" title="View Certificate">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </>
            );

            return cert.url ? (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl group hover:border-accent/40 transition-all cursor-pointer relative overflow-hidden"
                title="Click to view certificate"
              >
                {card}
              </motion.a>
            ) : (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-2xl group hover:border-accent/40 transition-all cursor-pointer relative overflow-hidden"
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
