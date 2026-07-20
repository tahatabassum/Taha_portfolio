import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { FeaturedProject } from '@/components/FeaturedProject';
import { LatestProjects } from '@/components/LatestProjects';
import { Philosophy } from '@/components/Philosophy';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <LatestProjects />
        <Philosophy />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
