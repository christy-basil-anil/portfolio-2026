import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Design from './components/Design';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

function Home() {
  return (
    <div className="min-h-screen bg-bg-base text-text-primary selection:bg-accent/30 selection:text-accent">
      <InteractiveBackground />
      {/* Background Orbs */}
      <div className="orb w-[500px] h-[500px] bg-accent top-[-100px] right-[-100px]" />
      <div className="orb w-[400px] h-[400px] bg-accent3 bottom-[20%] left-[-150px]" />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Design />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
