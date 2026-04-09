import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'design', 'experience', 'achievements', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'projects', href: '#projects' },
    { name: 'design', href: '#design' },
    { name: 'experience', href: '#experience' },
    { name: 'achievements', href: '#achievements' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center px-[clamp(1rem,5vw,2rem)] h-[60px] bg-bg-base/85 backdrop-blur-md border-b border-border">
      <div className="flex items-center min-w-0">
        <div className="font-mono text-[0.85rem] text-accent tracking-wider flex items-center gap-2 whitespace-nowrap overflow-hidden">
          <span>~/</span>
          <span className="text-text-primary hidden lg:inline truncate">Christy Basil Anil</span>
          <span className="text-text-primary lg:hidden">Christy</span>
          <span className="text-text-muted">.dev</span>
        </div>
      </div>

      <ul className="hidden lg:flex items-center justify-center gap-4 xl:gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`font-mono text-[0.7rem] xl:text-[0.75rem] tracking-widest uppercase no-underline transition-colors duration-200 relative group ${
                activeSection === link.name.replace('#', '') ? 'text-text-primary' : 'text-text-secondary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 right-0 h-[1px] bg-accent transition-transform duration-250 origin-left ${
                activeSection === link.name.replace('#', '') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-end gap-4 sm:gap-6">
        <a 
          href="#contact" 
          className="lg:hidden font-mono text-[0.7rem] tracking-widest uppercase text-accent border border-accent/30 px-3 py-1.5 rounded-md hover:bg-accent/5 transition-colors"
        >
          contact
        </a>
        <div className="hidden sm:flex items-center gap-1.5 font-mono text-[0.7rem] text-text-muted whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_var(--color-green)] animate-pulse-green" />
          available
        </div>
        <button 
          className="lg:hidden text-text-secondary cursor-pointer p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bg-bg-surface border-b border-border p-6 z-[99] flex flex-col items-center gap-6 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-mono text-[0.75rem] tracking-widest uppercase transition-colors ${
                activeSection === link.name.replace('#', '') ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="sm:hidden flex items-center gap-1.5 font-mono text-[0.7rem] text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_6px_var(--color-green)] animate-pulse-green" />
            available
          </div>
        </div>
      )}
    </nav>
  );
}
