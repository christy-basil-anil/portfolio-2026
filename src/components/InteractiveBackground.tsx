import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Grid settings
    const gap = 35;
    const dotRadius = 1.2;
    const mouseRadius = 180;
    const distortionStrength = 50;

    let dots: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];
    const mouse = { x: -1000, y: -1000 };

    const initDots = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      dots = [];
      for (let x = gap / 2; x < width; x += gap) {
        for (let y = gap / 2; y < height; y += gap) {
          dots.push({ x, y, originX: x, originY: y, vx: 0, vy: 0 });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      initDots();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim() || '#3b82f6';
      ctx.fillStyle = accentColor;

      dots.forEach(dot => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - distance) / mouseRadius;
          const distortion = force * distortionStrength;
          
          const targetX = dot.originX - Math.cos(angle) * distortion;
          const targetY = dot.originY - Math.sin(angle) * distortion;
          
          dot.vx += (targetX - dot.x) * 0.15;
          dot.vy += (targetY - dot.y) * 0.15;
        } else {
          dot.vx += (dot.originX - dot.x) * 0.05;
          dot.vy += (dot.originY - dot.y) * 0.05;
        }

        dot.vx *= 0.85;
        dot.vy *= 0.85;
        
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw dot with higher visibility
        const distFromOrigin = Math.sqrt(Math.pow(dot.x - dot.originX, 2) + Math.pow(dot.y - dot.originY, 2));
        const opacity = Math.min(0.8, 0.2 + (distFromOrigin / distortionStrength) * 0.6);
        
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    initDots();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
