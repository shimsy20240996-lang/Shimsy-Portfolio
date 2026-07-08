
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

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-200 selection:bg-accent/30 selection:text-white relative">
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
  );
}

export default App;
