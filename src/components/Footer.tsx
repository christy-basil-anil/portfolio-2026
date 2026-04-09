export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-[clamp(1rem,5vw,2rem)] flex justify-between items-center flex-wrap gap-4 relative z-10 bg-bg-base">
      <div className="font-mono text-[0.7rem] text-text-muted">
        <span className="text-accent">~/Christy Basil Anil</span>.dev — built with ♥ and too much kattan chaya & mixture
      </div>
      <div className="flex gap-6">
        <a href="#home" className="font-mono text-[0.68rem] text-text-muted no-underline transition-colors hover:text-accent">back_to_top↑</a>
        <a href="mailto:magicianchristy@gmail.com" className="font-mono text-[0.68rem] text-text-muted no-underline transition-colors hover:text-accent">email</a>
        <a href="https://github.com/christy-basil-anil/" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.68rem] text-text-muted no-underline transition-colors hover:text-accent">github</a>
        <a href="https://www.linkedin.com/in/christy-basil-anil" target="_blank" rel="noopener noreferrer" className="font-mono text-[0.68rem] text-text-muted no-underline transition-colors hover:text-accent">linkedin</a>
      </div>
    </footer>
  );
}
