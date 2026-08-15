import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const IntroAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stage, setStage] = useState<'waiting' | 'flashing' | 'loading' | 'shooting' | 'done'>('waiting');

  const playGunshot = () => {
    // Safely attempt to use Web Audio API
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const time = ctx.currentTime;

    // 1. "Crack" (White noise)
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(2500, time);
    noiseFilter.frequency.exponentialRampToValueAtTime(100, time + 0.5);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(1.5, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(time);

    // 2. "Thump" (Low frequency oscillator)
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(2, time);
    oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.4);

    osc.connect(oscGain);
    oscGain.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.5);
  };

  const handleFire = () => {
    playGunshot();
    setStage('flashing');
    
    // Quick flash duration
    setTimeout(() => {
      setStage('loading');
    }, 100);
  };

  useEffect(() => {
    if (stage === 'loading') {
      const loadingTimer = setTimeout(() => {
        setStage('shooting');
        
        const end = Date.now() + 1500;
        (function frame() {
          confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#c026d3', '#a855f7', '#8b5cf6']
          });
          confetti({
            particleCount: 7,
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
              setTimeout(onComplete, 800);
            }, 500);
          }
        }());
      }, 1000);

      return () => clearTimeout(loadingTimer);
    }
  }, [stage, onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-colors duration-75 ${
            stage === 'flashing' ? 'bg-white' : 'bg-background'
          }`}
        >
          
          {/* Waiting for user interaction */}
          {stage === 'waiting' && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleFire}
              className="relative group cursor-crosshair focus:outline-none"
            >
              <div className="absolute inset-[-20px] rounded-full border border-primary/30 animate-ping"></div>
              <div className="w-24 h-24 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(192,38,211,0.5)] group-hover:shadow-[0_0_60px_rgba(192,38,211,0.9)] transition-all relative z-10">
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Enter</span>
              </div>
              
              {/* Crosshairs */}
              <div className="absolute top-1/2 -left-8 w-6 h-[2px] bg-primary/80 group-hover:bg-primary -translate-y-1/2"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-[2px] bg-primary/80 group-hover:bg-primary -translate-y-1/2"></div>
              <div className="absolute left-1/2 -top-8 w-[2px] h-6 bg-primary/80 group-hover:bg-primary -translate-x-1/2"></div>
              <div className="absolute left-1/2 -bottom-8 w-[2px] h-6 bg-primary/80 group-hover:bg-primary -translate-x-1/2"></div>
            </motion.button>
          )}

          {/* Loading and Confetti Sequence */}
          {(stage === 'loading' || stage === 'shooting') && (
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0, x: [-20, 20, -15, 15, 0], y: [-20, 20, -10, 10, 0] }}
                animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="mb-8 relative"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
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
                Access Granted
              </motion.p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
