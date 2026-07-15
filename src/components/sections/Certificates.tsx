import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Award, ExternalLink, X } from 'lucide-react';

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <div className="text-slate-400 hover:text-accent transition-colors" title="View Certificate">
                        <ExternalLink size={18} />
                      </div>
                    )}
                  </div>
                </div>
              </>
            );

            return (
              <motion.div
                key={cert.id}
                onClick={() => cert.url ? setSelectedCert(cert) : null}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass-panel p-6 rounded-2xl group hover:border-accent/40 transition-all relative overflow-hidden ${cert.url ? 'cursor-pointer' : ''}`}
                title={cert.url ? "Click to view certificate" : ""}
              >
                {card}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col"
              style={{ height: '85vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-surface/80 backdrop-blur-md">
                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-white/5 hover:bg-accent rounded-full text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="w-full flex-grow p-0 sm:p-4 bg-black/20">
                {selectedCert.url.toLowerCase().endsWith('.png') || selectedCert.url.toLowerCase().endsWith('.jpg') || selectedCert.url.toLowerCase().endsWith('.jpeg') ? (
                  <img src={selectedCert.url} alt={selectedCert.title} className="w-full h-full object-contain rounded-xl" />
                ) : (
                  <iframe src={selectedCert.url} className="w-full h-full rounded-xl border-0" title={selectedCert.title} />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
