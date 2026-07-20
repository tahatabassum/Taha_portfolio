'use client';

import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { AnimationWrapper } from './AnimationWrapper';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-white border-b border-slate-200">
      {/* Dynamic Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Ambient Radial Color Spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[24rem] h-[24rem] bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-[26rem] h-[26rem] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Headline & Description (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <AnimationWrapper direction="down" delay={0.1}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-bold shadow-xs">
                <Flame className="h-3.5 w-3.5 text-orange-500 fill-orange-500" />
                <span>Full-Stack & AI Engineering Portfolio</span>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] sm:leading-[1.1] text-slate-900 tracking-tight">
                Building <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-orange-500 bg-clip-text text-transparent">AI-Powered</span> Applications That Solve Real Business Problems
              </h1>
            </AnimationWrapper>
            
            <AnimationWrapper direction="up" delay={0.3}>
              <p className="text-slate-600 text-sm sm:text-lg max-w-2xl font-normal leading-relaxed">
                Computer Science student specializing in AI-powered web applications, automation systems, computer vision workflows, full-stack engineering, and modern AI-assisted development.
              </p>
            </AnimationWrapper>

            {/* Optimized Button Group for Mobile and Desktop */}
            <AnimationWrapper direction="up" delay={0.4} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
                {/* Primary Action Button */}
                <a
                  href="#featured"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/25 hover:shadow-orange-500/20 gap-2 shrink-0"
                >
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Secondary Social Action Buttons (Side-by-Side on Mobile) */}
                <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto">
                  <a
                    href="https://github.com/tahatabassum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all gap-2 shadow-xs"
                  >
                    <svg className="h-4 w-4 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/tahatabassum2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-3 sm:px-6 rounded-xl text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all gap-2 shadow-xs"
                  >
                    <svg className="h-4 w-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </AnimationWrapper>

            {/* Tri-Color Balanced Stat Cards */}
            <AnimationWrapper direction="up" delay={0.5} className="w-full">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-6 border-t border-slate-200 w-full max-w-lg">
                {/* Stat 1: Royal Blue */}
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/90 text-left">
                  <p className="text-xl sm:text-2xl font-black font-display text-blue-600">3+</p>
                  <p className="text-[10px] sm:text-[11px] text-blue-800 font-bold uppercase tracking-wider">AI Products</p>
                </div>

                {/* Stat 2: Emerald Green */}
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/90 text-left">
                  <p className="text-xl sm:text-2xl font-black font-display text-emerald-600">FSD</p>
                  <p className="text-[10px] sm:text-[11px] text-emerald-800 font-bold uppercase tracking-wider">Pakistan</p>
                </div>

                {/* Stat 3: Sunset Orange */}
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-orange-50/80 border border-orange-200/90 text-left">
                  <p className="text-xl sm:text-2xl font-black font-display text-orange-600">UAF</p>
                  <p className="text-[10px] sm:text-[11px] text-orange-800 font-bold uppercase tracking-wider">CS Student</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Developer Photo (Right Column) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <AnimationWrapper direction="left" delay={0.3} className="w-full max-w-sm sm:max-w-md">
              <div className="relative group w-full">
                {/* Decorative multi-colored aura glow behind photo */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-emerald-500 to-orange-500 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition duration-700"></div>
                
                {/* Photo Frame Container */}
                <div className="relative rounded-2xl bg-white border border-slate-200 p-3 shadow-2xl">
                  <img 
                    src="/taha.png" 
                    alt="Taha Tabassum" 
                    className="rounded-xl w-full aspect-[4/5] object-cover transition-all duration-500 ease-in-out select-none border border-slate-100"
                    draggable="false"
                  />
                  
                  {/* Floating Availability Tag */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 shadow-lg flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900">Open for AI Engineering Roles</p>
                      <p className="text-[10px] text-slate-500 font-medium">Faisalabad & Remote Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          
        </div>
      </div>
    </section>
  );
};
