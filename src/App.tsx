import { useState } from 'react';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import CVSection from './components/sections/CVSection';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import IntroAnimation from './components/IntroAnimation';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <ThemeProvider>
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      
      <div className={`bg-background min-h-screen text-text-muted selection:bg-accent/30 selection:text-text-main relative transition-colors duration-300 ${!introDone ? 'h-screen overflow-hidden' : ''}`}>
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <CVSection />
          <Contact />
        </main>
        <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
