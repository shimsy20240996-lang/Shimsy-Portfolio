import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stage, setStage] = useState<'loading' | 'shooting' | 'done'>('loading');

  useEffect(() => {
    // Start shooting phase after short delay
    const loadingTimer = setTimeout(() => {
      setStage('shooting');
      
      // Fire confetti from left edge
      const end = Date.now() + 1500;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#c026d3', '#a855f7', '#8b5cf6']
        });
        
        // Fire from right edge
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#c026d3', '#a855f7', '#8b5cf6']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        } else {
          setTimeout(() => {
            setStage('done');
            setTimeout(onComplete, 800); // Wait for exit animation
          }, 500);
        }
      }());
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="mb-8 relative"
            >
              {/* Glowing Orb behind logo */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary/40 blur-[40px] rounded-full"
              ></motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter font-display relative z-10 text-white flex items-center gap-2">
                Shimsy<span className="text-primary">.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-text-muted font-medium tracking-[0.2em] uppercase text-sm"
            >
              Initializing...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
