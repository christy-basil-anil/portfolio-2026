import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Tuterra',
      role: 'Creative & Technology Lead',
      period: 'Sep 2025 - Present',
      desc: 'Leading creative direction and technological implementations for the platform.',
      icon: <Briefcase size={18} />,
    },
    {
      company: 'IDEAGORA',
      role: 'Creative and Innovation Lead',
      period: 'Apr 2025 - Present',
      desc: 'I help students with new ideas, guide project teams, and lead the creative work for events and workshops. I also take care of design, content, and work with others to promote innovation and teamwork.',
      icon: <Briefcase size={18} />,
    },
    {
      company: 'Regalo Box',
      role: 'Creative Lead',
      period: 'Feb 2025 - Present',
      desc: 'I lead the design team and guide and train interns to ensure high-quality creative output.',
      icon: <Briefcase size={18} />,
    },
    {
      company: 'VArts World Pvt Ltd',
      role: 'T Head Designer',
      period: 'Feb 2025 - Sep 2025',
      desc: 'I lead the design team by guiding interns, assigning tasks to designers, and making sure our designs meet client needs. I work closely with the marketing team and handle client communication to ensure smooth project flow and creative results.',
      icon: <Briefcase size={18} />,
    },
    {
      company: 'VArts World Pvt Ltd',
      role: 'Designer Internship',
      period: 'Nov 2024 - Jan 2025',
      desc: 'Gained hands-on experience in professional design workflows and client projects.',
      icon: <Briefcase size={18} />,
    },
  ];

  return (
    <section id="experience" className="py-[120px] px-[clamp(1rem,5vw,2rem)] max-w-[1280px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-label">04 — experience</div>
        <h2 className="section-title">Professional Journey</h2>
      </motion.div>

      <div className="mt-12 space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: idx * 0.1 }}
            className="group bg-bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-text-primary">{exp.role}</h3>
                  <div className="font-mono text-[0.8rem] text-accent flex items-center gap-2">
                    <span className="font-bold">{exp.company}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:items-end gap-1">
                <div className="flex items-center gap-2 font-mono text-[0.7rem] text-text-muted">
                  <Calendar size={12} />
                  {exp.period}
                </div>
              </div>
            </div>

            <p className="text-[0.9rem] text-text-secondary leading-relaxed max-w-3xl">
              {exp.desc}
            </p>
            
            {/* Decorative background element */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none">
              <Briefcase size={120} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
