import React, { useEffect, useRef } from 'react';

// Configuration
const COLORS = {
  bgNode: 'rgba(59, 130, 246, 0.2)', // dim blue
  mainNode: 'rgba(6, 182, 212, 0.8)', // cyan
  specialNode: 'rgba(59, 130, 246, 1)', // electric blue
  line: 'rgba(6, 182, 212, 0.15)',
  lineActive: 'rgba(6, 182, 212, 0.5)',
  pulse: 'rgba(255, 255, 255, 0.8)',
  text: 'rgba(248, 250, 252, 0.9)',
  tooltipBg: 'rgba(11, 17, 32, 0.9)'
};

const CONCEPTS = [
  { short: 'AI', full: 'Artificial Intelligence' },
  { short: 'ML', full: 'Machine Learning' },
  { short: 'DATA', full: 'Data Science' },
  { short: 'PY', full: 'Python' },
  { short: 'STAT', full: 'Statistics' },
  { short: 'NN', full: 'Neural Networks' },
  { short: 'DL', full: 'Deep Learning' },
  { short: 'NLP', full: 'Natural Language' },
  { short: 'SQL', full: 'Database' },
  { short: 'MATH', full: 'Mathematics' },
  { short: 'ALGO', full: 'Algorithms' },
  { short: 'CS', full: 'Computer Science' }
];

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  type: 'bg' | 'main' | 'special';
  concept?: typeof CONCEPTS[0];
  pulseTimer: number;
}

interface Pulse {
  source: Node;
  target: Node;
  progress: number;
  speed: number;
}

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    
    // Mouse state
    const mouse = { x: -1000, y: -1000, active: false };

    const resize = () => {
      // Handle device pixel ratio for crisp text and lines
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      pulses = [];
      
      const isMobile = width < 768;
      const nodeCount = isMobile ? 40 : 120;
      
      for (let i = 0; i < nodeCount; i++) {
        const typeRand = Math.random();
        let type: Node['type'] = 'bg';
        let radius = Math.random() * 1 + 0.5;
        let concept = undefined;

        if (typeRand > 0.95 && CONCEPTS.length > 0) {
          type = 'special';
          radius = Math.random() * 2 + 2;
          concept = CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)];
        } else if (typeRand > 0.7) {
          type = 'main';
          radius = Math.random() * 1.5 + 1;
        }

        const x = Math.random() * width;
        const y = Math.random() * height;
        
        nodes.push({
          x, y,
          baseX: x, baseY: y,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.2),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.2),
          radius,
          type,
          concept,
          pulseTimer: Math.random() * 100
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Distances for connections
      const connectDist = width < 768 ? 100 : 150;
      const mouseInfluence = width < 768 ? 0 : 200; // Disable mouse influence on mobile

      // Update & Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Movement
        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off edges smoothly
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        // Mouse attraction
        let distToMouse = 9999;
        if (mouse.active && !prefersReducedMotion) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          distToMouse = Math.sqrt(dx * dx + dy * dy);
          
          if (distToMouse < mouseInfluence) {
            const force = (mouseInfluence - distToMouse) / mouseInfluence;
            node.x += dx * force * 0.02;
            node.y += dy * force * 0.02;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDist) {
            const opacity = 1 - (dist / connectDist);
            
            // Highlight connections near mouse
            const isNearMouse = (distToMouse < mouseInfluence && mouse.active);
            ctx.beginPath();
            ctx.strokeStyle = isNearMouse ? COLORS.lineActive : `rgba(6, 182, 212, ${opacity * 0.3})`;
            ctx.lineWidth = isNearMouse ? 1 : 0.5;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();

            // Randomly create energy pulse
            if (!prefersReducedMotion && Math.random() < 0.0005 && pulses.length < 5) {
              pulses.push({
                source: node,
                target: node2,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02
              });
            }
          }
        }

        // Draw node
        ctx.beginPath();
        let color = COLORS.bgNode;
        if (node.type === 'main') color = COLORS.mainNode;
        if (node.type === 'special') color = COLORS.specialNode;
        
        ctx.fillStyle = color;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing glow for special nodes
        if (node.type === 'special' && !prefersReducedMotion) {
          node.pulseTimer += 0.05;
          const glowRadius = node.radius + 2 + Math.sin(node.pulseTimer) * 2;
          ctx.beginPath();
          ctx.fillStyle = `rgba(59, 130, 246, ${0.2 + Math.sin(node.pulseTimer) * 0.1})`;
          ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Energy Pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;
        
        if (pulse.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const px = pulse.source.x + (pulse.target.x - pulse.source.x) * pulse.progress;
        const py = pulse.source.y + (pulse.target.y - pulse.source.y) * pulse.progress;

        ctx.beginPath();
        ctx.fillStyle = COLORS.pulse;
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Pulse glow
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, 0.4)`;
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Labels (always keep at top layer of canvas)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.type === 'special' && node.concept) {
          let distToMouse = 9999;
          if (mouse.active) {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            distToMouse = Math.sqrt(dx * dx + dy * dy);
          }

          // Draw short label
          ctx.font = 'bold 10px sans-serif';
          ctx.fillStyle = COLORS.text;
          ctx.textAlign = 'center';
          ctx.fillText(node.concept.short, node.x, node.y - 8);

          // Draw tooltip if hovered
          if (distToMouse < 40 && mouse.active) {
            const padX = 8;
            const padY = 4;
            ctx.font = '12px sans-serif';
            const textWidth = ctx.measureText(node.concept.full).width;
            
            // Tooltip background
            ctx.fillStyle = COLORS.tooltipBg;
            ctx.strokeStyle = COLORS.mainNode;
            ctx.lineWidth = 1;
            
            const tooltipY = node.y - 35;
            
            ctx.beginPath();
            if (ctx.roundRect) {
              ctx.roundRect(node.x - textWidth/2 - padX, tooltipY - 12 - padY, textWidth + padX * 2, 12 + padY * 2, 4);
            } else {
              // fallback
              ctx.rect(node.x - textWidth/2 - padX, tooltipY - 12 - padY, textWidth + padX * 2, 12 + padY * 2);
            }
            ctx.fill();
            ctx.stroke();

            // Tooltip text
            ctx.fillStyle = '#ffffff';
            ctx.fillText(node.concept.full, node.x, tooltipY);
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-70 transition-opacity duration-1000"
        style={{ pointerEvents: 'auto' }} // Allow capturing mouse events for tooltip
      />
      {/* Fallback gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background/50 to-background pointer-events-none"></div>
    </div>
  );
};

export default ParticlesBackground;
