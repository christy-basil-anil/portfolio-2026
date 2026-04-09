import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const skills = {
    languages: ['Python', 'C++', 'C', 'HTML', 'JavaScript'],
    gamedev: ['Godot', 'Scratch'],
    xr: ['Snapchat Lens Studio', 'Meta Spark'],
    robotics: ['Arduino'],
  };

  return (
    <section id="about" className="py-[120px] px-[clamp(1rem,5vw,2rem)] max-w-[1280px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-label">01 — about</div>
        <h2 className="section-title">Who I Am</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-text-secondary leading-[1.9] text-[0.95rem] space-y-5"
          >
            <p>
              Hi! I’m <strong className="text-text-primary">Christy Basil Anil</strong>, a student who loves building, experimenting with code, and exploring creative ideas. I’m naturally curious about how things work, and I enjoy diving deep into concepts to really understand them.
            </p>
            <p>
              I like coding and often challenge myself by stepping into areas I want to improve in, such as game development, AR/VR, UI/UX, and robotics. Right now, I’m focused on leveling up my skills and learning by doing.
            </p>
            <p>
              I believe the best way to learn is by getting hands-on and building projects, even small ones. I’m still at the beginning of the journey, but I’m enjoying every part of it.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-text-muted mb-3">// programming languages</div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="font-mono text-[0.72rem] px-3 py-1 rounded bg-accent/10 border border-accent/20 text-accent hover:-translate-y-px transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-text-muted mb-3">// game development</div>
              <div className="flex flex-wrap gap-2">
                {skills.gamedev.map((skill) => (
                  <span key={skill} className="font-mono text-[0.72rem] px-3 py-1 rounded bg-accent2/10 border border-accent2/20 text-accent2 hover:-translate-y-px transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-text-muted mb-3">// ar / vr</div>
              <div className="flex flex-wrap gap-2">
                {skills.xr.map((skill) => (
                  <span key={skill} className="font-mono text-[0.72rem] px-3 py-1 rounded bg-accent3/10 border border-accent3/20 text-accent3 hover:-translate-y-px transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-text-muted mb-3">// robotics</div>
              <div className="flex flex-wrap gap-2">
                {skills.robotics.map((skill) => (
                  <span key={skill} className="font-mono text-[0.72rem] px-3 py-1 rounded bg-white/5 border border-white/10 text-text-secondary hover:-translate-y-px transition-transform cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative hidden lg:block perspective-[1000px]">
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative cursor-crosshair will-change-transform"
          >
            <div 
              style={{ transform: "translateZ(50px)" }}
              className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/5 bg-bg-elevated group relative shadow-2xl"
            >
              <img 
                src="/images/black.png" 
                alt="Artistic Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 will-change-transform"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
              
              {/* Glare effect */}
              <motion.div 
                style={{
                  background: useTransform(
                    [mouseXSpring, mouseYSpring],
                    ([mx, my]) => `radial-gradient(circle at ${50 + (mx as number) * 100}% ${50 + (my as number) * 100}%, rgba(255,255,255,0.15) 0%, transparent 80%)`
                  )
                }}
                className="absolute inset-0 pointer-events-none"
              />
            </div>
            
            <div 
              style={{ transform: "translateZ(-20px)" }}
              className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-2xl" 
            />
            <div 
              style={{ transform: "translateZ(-20px)" }}
              className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl" 
            />
            
            {/* Floating decorative elements */}
            <motion.div 
              style={{ 
                x: useTransform(mouseXSpring, [-0.5, 0.5], [-20, 20]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], [-20, 20]),
                translateZ: 100
              }}
              className="absolute -top-8 -right-8 font-mono text-[0.6rem] text-accent/40 bg-bg-base border border-border px-2 py-1 rounded backdrop-blur-sm pointer-events-none"
            >
              [ interactive_mode: active ]
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
