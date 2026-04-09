import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Trophy } from 'lucide-react';

export default function Achievements() {
  const [isExpanded, setIsExpanded] = useState(false);

  const achievements = [
    {
      year: 'Mar 2026',
      type: 'award',
      title: 'First Prize at STAGTIC',
      sub: 'College of Engineering Thalassery · Agnitus 2026',
      desc: 'Won first place in a 24-hour coding marathon.',
    },
    {
      year: '2026',
      type: 'award',
      title: 'First Prize at "Pitch It"',
      sub: 'Ideagora IEDC · St. Thomas College Ranni',
      desc: 'Secured first place in the pitching competition.',
    },
    {
      year: 'Feb 2026',
      type: 'award',
      title: 'Runner-Up: Python Debugging Challenge',
      sub: 'Cozmek · Valentine\'s Day Challenge',
      desc: 'Placed second in the intermediate category of the debugging challenge.',
    },
    {
      year: 'Jan 2026',
      type: 'award',
      title: 'First Prize: Code Quest',
      sub: 'Gregorian Institute of Technology · Future Tech\'26',
      desc: 'Won first place in the Code Quest event during the tech fest.',
    },
    {
      year: 'Jan 2026',
      type: 'award',
      title: 'Second Prize: 404: DESIGN FOUND',
      sub: 'Mar Augusthinose College Ramapuram · CELESTA 2026',
      desc: 'Runner-up in the Frontend Design Challenge.',
    },
    {
      year: 'Jan 2026',
      type: 'award',
      title: 'First Prize: Cresign',
      sub: 'BCM College, Kottayam · TAAL 2K26',
      desc: 'Won the UI/UX Design Challenge conducted by the CS Department.',
    },
    {
      year: 'Jan 2026',
      type: 'award',
      title: 'First Prize: Dig N Hunt',
      sub: 'BCM College, Kottayam · TAAL 2K26',
      desc: 'First place in the Digital Treasure Hunt competition.',
    },
    {
      year: 'Jan 2026',
      type: 'award',
      title: 'First Prize: CodeX',
      sub: 'BCM College, Kottayam · TAAL 2K26',
      desc: 'Won the Reverse Coding competition.',
    },
    {
      year: 'Dec 2025',
      type: 'award',
      title: 'First Prize: FearForge Gaming Hackathon',
      sub: 'IEDC Summit 2025',
      desc: 'Secured first place in the gaming-focused hackathon.',
    },
    {
      year: 'Oct 2025',
      type: 'award',
      title: 'Third Prize: All Kerala Mathematics Quiz',
      sub: 'Muthoot Institute of Technology and Science',
      desc: 'Placed third in the intercollegiate mathematics quiz.',
    },
    {
      year: 'Sep 2025',
      type: 'award',
      title: 'First Prize: THE CODE FATHER',
      sub: 'MACFAST · MACFIESTA 2K25',
      desc: 'Won the coding competition hosted by Mar Athanasios College.',
    },
    {
      year: 'Aug 2025',
      type: 'award',
      title: 'Self-Motivated Youngster Award',
      sub: 'NINANS KCIF Computer College, Ranni',
      desc: 'Received recognition for proactive learning and motivation.',
    },
    {
      year: 'Jul 2025',
      type: 'award',
      title: 'Second Prize: Python Coding Competition',
      sub: 'Sree Sankara College, Kalady',
      desc: 'Runner-up in the intercollegiate coding event.',
    },
    {
      year: 'Mar 2025',
      type: 'award',
      title: 'First Place: Mathematics Quiz',
      sub: 'IIIT Kottayam',
      desc: 'Won the quiz competition conducted by the Dept. of Computational Science.',
    },
    {
      year: 'Mar 2025',
      type: 'award',
      title: 'Second Place: Mathematics Quiz',
      sub: 'Deva Matha College Kuravilangad',
      desc: 'Runner-up in the inter-collegiate mathematics quiz.',
    },
    {
      year: 'Mar 2025',
      type: 'award',
      title: 'First Position: Debugging Competition',
      sub: 'St. Berchmans College Changanassery',
      desc: 'Won first place in the debugging event.',
    },
    {
      year: 'Mar 2025',
      type: 'award',
      title: 'Second Place: Blind Coding',
      sub: 'St. Berchmans College Changanassery',
      desc: 'Runner-up in the blind coding competition.',
    },
    {
      year: 'Jan 2025',
      type: 'award',
      title: 'First Place: Maths Mental Challenge (State)',
      sub: 'National Mathematics Day Celebrations 2024',
      desc: 'Won the state-level mental math challenge.',
    },
    {
      year: 'Dec 2024',
      type: 'award',
      title: 'First Place: Maths Mental Challenge (District)',
      sub: 'National Mathematics Day Celebrations 2024',
      desc: 'Won the district-level mental math challenge.',
    },
  ];

  const displayedAchievements = isExpanded ? achievements : achievements.slice(0, 5);

  return (
    <section id="achievements" className="py-[120px] px-[clamp(1rem,5vw,2rem)] max-w-[1280px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-label">05 — achievements</div>
        <h2 className="section-title">Recognition</h2>
      </motion.div>

      <div className="mt-12 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border" />
        
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {displayedAchievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isExpanded ? 0 : idx * 0.1 }}
                className="grid grid-cols-[100px_1fr] gap-8 relative"
              >
                <div className="absolute -left-[4px] top-[6px] w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-glow)]" />
                
                <div className="font-mono text-[0.7rem] text-text-muted tracking-widest pt-1 text-right">
                  {item.year}
                </div>

                <div className="bg-bg-card border border-border rounded-xl p-5 hover:border-border-hover transition-colors">
                  <span className={`font-mono text-[0.62rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded mb-2.5 inline-block border ${
                    item.type === 'award' ? 'bg-amber/10 border-amber/25 text-amber' : 
                    item.type === 'edu' ? 'bg-accent/10 border-accent/20 text-accent' : 
                    'bg-accent3/10 border-accent3/20 text-accent3'
                  }`}>
                    {item.type === 'award' ? '🏆 Award' : 
                     item.type === 'edu' ? '🎓 Education' : 
                     '📜 Certification'}
                  </span>
                  <h3 className="font-semibold text-[0.95rem] mb-1">{item.title}</h3>
                  <div className="font-mono text-[0.72rem] text-accent2 mb-2">{item.sub}</div>
                  <p className="text-[0.85rem] text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex justify-center relative z-10"
          >
            <button 
              onClick={() => setIsExpanded(true)}
              className="group relative flex items-center gap-3 px-8 py-4 bg-bg-card border border-border rounded-full font-mono text-[0.75rem] tracking-[0.2em] uppercase text-text-secondary hover:text-accent hover:border-accent transition-all duration-300 shadow-[0_0_0_0_rgba(var(--color-accent-rgb),0)] hover:shadow-[0_0_20px_-5px_rgba(var(--color-accent-rgb),0.4)]"
            >
              <span className="relative z-10">Unlock Full Archive</span>
              <Trophy size={14} className="relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <ChevronDown size={14} className="relative z-10 animate-bounce" />
              
              {/* Background Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
