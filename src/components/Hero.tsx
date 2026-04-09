import { motion } from 'motion/react';
import { Terminal, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-[clamp(1rem,5vw,2rem)] pt-[120px] pb-[80px] max-w-[1280px] mx-auto overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-mono text-[0.7rem] text-accent tracking-[0.2em] uppercase mb-6"
          >
            // hello world — welcome to my portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-[clamp(2.8rem,7vw,4.8rem)] font-extrabold leading-[0.95] text-text-primary mb-6 tracking-tighter"
          >
            Christy<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent3 to-accent2">Basil Anil</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-2.5 flex-wrap mb-8"
          >
            <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[0.65rem] font-mono tracking-wider text-accent uppercase">AI & ML Student</span>
            <span className="px-2.5 py-1 rounded-full bg-accent2/10 border border-accent2/20 text-[0.65rem] font-mono tracking-wider text-accent2 uppercase">tech enthusiast</span>
            <span className="px-2.5 py-1 rounded-full bg-accent3/10 border border-accent3/20 text-[0.65rem] font-mono tracking-wider text-accent3 uppercase">Designer</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-base text-text-secondary max-w-[460px] leading-relaxed mb-10"
          >
            Passionate about exploring tech, learning, and innovation. I enjoy pushing my boundaries with new projects. Currently a student, always building.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#projects" className="btn-primary px-6 py-3 text-[0.8rem]">
              <Terminal size={14} />
              Explore Work
            </a>
            <a href="#contact" className="btn-outline px-6 py-3 text-[0.8rem]">
              <Mail size={14} />
              Let's Talk
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative w-full max-w-[420px] aspect-square">
            {/* Animated Border Frame */}
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-accent via-accent3 to-accent2 animate-[hue-rotate_6s_linear_infinite] opacity-50 blur-sm" />
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-accent via-accent3 to-accent2 animate-[hue-rotate_6s_linear_infinite]" />
            
            <div className="relative z-10 w-full h-full rounded-[28px] bg-bg-elevated border-[4px] border-bg-base overflow-hidden flex items-center justify-center group/img shadow-2xl">
              <img 
                src="images/me.png" 
                alt="Christy Basil Anil" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="font-display text-8xl font-extrabold text-accent opacity-20">CBA</span>';
                }}
              />
              
              {/* Inner Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-bg-elevated border border-border rounded-2xl px-5 py-3 shadow-xl z-20 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="block w-2.5 h-2.5 rounded-full bg-green shadow-[0_0_10px_var(--color-green)]" />
                  <span className="absolute inset-0 rounded-full bg-green animate-ping opacity-40" />
                </div>
                <span className="font-mono text-[0.75rem] text-text-primary tracking-wider uppercase">Open to Collab</span>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-l-2 border-t-2 border-accent/20 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-24 h-24 border-r-2 border-b-2 border-accent/20 rounded-br-3xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
