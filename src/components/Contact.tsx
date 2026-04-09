import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    { name: 'Email', icon: <Mail size={16} />, value: 'magicianchristy@gmail.com', href: 'mailto:magicianchristy@gmail.com' },
    { name: 'GitHub', icon: <Github size={16} />, value: '/christy-basil-anil', href: 'https://github.com/christy-basil-anil/' },
    { name: 'LinkedIn', icon: <Linkedin size={16} />, value: '/in/christy-basil-anil', href: 'https://www.linkedin.com/in/christy-basil-anil' },
    { name: 'Instagram', icon: <Instagram size={16} />, value: '@magicianchristy', href: 'https://www.instagram.com/magicianchristy' },
  ];

  return (
    <section id="contact" className="py-[120px] pb-[160px] px-[clamp(1rem,5vw,2rem)] max-w-[1280px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-label">06 — contact</div>
        <h2 className="section-title">Let's Connect</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-8">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech and innovation. Feel free to reach out!
          </p>
          
          <div className="flex flex-col gap-3">
            {contactLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 bg-bg-card border border-border rounded-lg no-underline transition-all hover:border-accent hover:text-text-primary hover:translate-x-1 group"
              >
                <span className="text-text-secondary group-hover:text-accent transition-colors">{link.icon}</span>
                <span className="font-mono text-[0.75rem] tracking-wider text-text-secondary group-hover:text-text-primary">{link.name}</span>
                <span className="ml-auto font-mono text-[0.7rem] text-text-muted">{link.value}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="w-full"
        >
          <div className="bg-[#0D0D0D] border border-border rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-bg-elevated px-4 py-2.5 border-b border-border flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="font-mono text-[0.6rem] text-text-muted uppercase tracking-widest">bash — stats.sh</div>
              <div className="w-10" /> {/* Spacer */}
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-[0.8rem] space-y-6">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-accent">➜</span>
                  <span className="text-text-primary">Amount of coffee consumed?</span>
                </div>
                <div className="pl-5 text-text-secondary italic">
                  "I prefer tea 🍵"
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-accent2">➜</span>
                  <span className="text-text-primary">Bugs Squashed:</span>
                </div>
                <div className="pl-5 text-text-secondary">
                  close to infinity
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-accent3">➜</span>
                  <span className="text-text-primary">Lines of Code:</span>
                </div>
                <div className="pl-5 text-text-secondary">
                  i don't count
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className="text-cyan">➜</span>
                  <span className="text-text-primary">Curiosity Level:</span>
                </div>
                <div className="pl-5 text-accent font-bold">
                  1000%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
