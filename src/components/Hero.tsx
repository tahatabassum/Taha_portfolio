import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Headline & Description */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 text-xs font-medium backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Full-Stack & AI Engineering Portfolio</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] text-zinc-50">
              Building <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">AI-Powered</span> Applications That Solve Real Business Problems
            </h1>
            
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              Computer Science student specializing in AI-powered web applications, automation systems, computer vision workflows, full-stack engineering, and modern AI-assisted development.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
              <a
                href="#featured"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold bg-zinc-50 text-zinc-950 hover:bg-white transition-colors gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/tahatabassum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-850 hover:text-white transition-all gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/tahatabassum2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-850 hover:text-white transition-all gap-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Badges/Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-900 w-full max-w-md">
              <div>
                <p className="text-2xl font-bold font-display text-cyan-400">5+</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">AI Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-indigo-400">FSD</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Pakistan</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-zinc-200">UAF</p>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">CS Student</p>
              </div>
            </div>
          </div>

          {/* Developer Photo (Right Side) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Decorative background glow behind the photo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Photo Frame Container */}
              <div className="relative rounded-2xl bg-zinc-900 border border-zinc-800/85 p-2.5 overflow-hidden shadow-2xl">
                <img 
                  src="/taha.png" 
                  alt="Taha Tabassum" 
                  className="rounded-xl w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out select-none"
                  draggable="false"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
