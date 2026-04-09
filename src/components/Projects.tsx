import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-[120px] px-[clamp(1rem,5vw,2rem)] max-w-[1280px] mx-auto">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="section-label">02 — projects</div>
          <h2 className="section-title">Things I've Built</h2>
        </motion.div>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          href="https://github.com/christy-basil-anil" 
          target="_blank" 
          className="btn-outline h-fit"
        >
          <Github size={14} />
          GitHub
        </motion.a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: idx * 0.1 }}
            className="group bg-bg-card border border-border rounded-xl p-6 transition-all duration-250 relative overflow-hidden cursor-pointer hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent3 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                project.color === 'cyan' ? 'bg-accent2/10' : 
                project.color === 'purple' ? 'bg-accent3/10' : 
                project.color === 'amber' ? 'bg-amber/10' : 'bg-accent-dim'
              }`}>
                {project.icon}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] text-text-muted no-underline px-2 py-1 border border-border rounded transition-all hover:border-accent hover:text-accent flex items-center gap-1"
                  >
                    <Github size={10} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] text-text-muted no-underline px-2 py-1 border border-border rounded transition-all hover:border-accent hover:text-accent flex items-center gap-1"
                  >
                    <ExternalLink size={10} />
                    Demo
                  </a>
                )}
              </div>
            </div>

            <div className="w-full h-[140px] bg-bg-elevated border border-border rounded-lg mb-5 overflow-hidden flex items-center justify-center">
              {project.demo || project.github ? (
                <a 
                  href={project.demo || project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                    referrerPolicy="no-referrer"
                  />
                </a>
              ) : (
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {project.demo || project.github ? (
              <a 
                href={project.demo || project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-underline group/title"
              >
                <h3 className="font-sans font-semibold text-base text-text-primary mb-2 group-hover/title:text-accent transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink size={12} className="opacity-0 group-hover/title:opacity-100 transition-opacity" />
                </h3>
              </a>
            ) : (
              <h3 className="font-sans font-semibold text-base text-text-primary mb-2">{project.title}</h3>
            )}
            <p className="text-[0.85rem] text-text-secondary leading-relaxed mb-5">{project.desc}</p>
            
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[0.65rem] px-2 py-0.5 rounded bg-white/5 border border-border text-text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
