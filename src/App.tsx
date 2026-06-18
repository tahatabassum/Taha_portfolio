import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Philosophy />
        <Education />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
