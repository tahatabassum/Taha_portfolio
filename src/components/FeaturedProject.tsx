'use client';

import React from 'react';
import { Badge } from './ui/Badge';
import { AnimationWrapper } from './AnimationWrapper';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="featured" className="py-24 bg-gradient-to-b from-slate-50/80 via-blue-50/20 to-slate-50/80 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Case Study Container Card with Tri-Color Top Border Gradient */}
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="w-full rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg relative border-gradient-top">
            
            {/* Card Header Info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
              <div className="space-y-3 text-left">
                <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-blue-100 text-blue-700 border border-blue-200 inline-block">
                  Featured Case Study
                </span>
                
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-slate-900">
                    Advantage AI
                  </h3>
                  <div className="flex gap-2">
                    <Badge variant="blue" className="py-0.5 px-2.5 text-[10px]">
                      AI SaaS Platform
                    </Badge>
                    <Badge variant="green" className="py-0.5 px-2.5 text-[10px]">
                      Deployed
                    </Badge>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm font-semibold">
                  Digital Marketing Creative Auditing Platform
                </p>
              </div>
              
              {/* Header Action Buttons (Side-by-Side on Mobile) */}
              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:space-x-3 text-xs w-full sm:w-auto">
                <a 
                  href="https://advantage-ai-1.onrender.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-white transition-all shadow-md shadow-blue-500/25 hover:shadow-orange-500/20"
                >
                  <span>Live Demo</span>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
                <a 
                  href="https://github.com/tahatabassum/advantage-ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all shadow-xs"
                >
                  <svg className="h-4 w-4 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Card Body Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
              
              {/* Left Content Column */}
              <div className="lg:col-span-8 flex flex-col space-y-8 text-left">
                
                {/* Problem Section */}
                <div className="space-y-2.5 bg-blue-50/50 border border-blue-100 rounded-xl p-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-blue-700">
                    The Problem
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                    Performance marketing agencies spend significant resources testing ad creatives after launch, only learning what works from live campaign data. Advantage AI moves that evaluation earlier — auditing image and video advertisements before launch to identify weaknesses in hook effectiveness, visual pacing, copywriting quality, CTA placement, cognitive trigger alignment, and engagement potential.
                  </p>
                </div>

                {/* Engineering Challenges */}
                <div className="space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Key Engineering Challenges Solved
                  </h4>
                  
                  <div className="space-y-5">
                    {/* Challenge 1: Royal Blue */}
                    <div className="flex items-start bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                      <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 font-mono text-xs font-extrabold mr-3 shrink-0">01</span>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                          High-Fidelity Video Analysis
                        </h5>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          Implemented chronological frame extraction using OpenCV and evaluated the full sequence within a single multimodal AI prompt — preserving narrative flow and significantly improving analysis accuracy over per-frame approaches.
                        </p>
                      </div>
                    </div>

                    {/* Challenge 2: Emerald Green */}
                    <div className="flex items-start bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 font-mono text-xs font-extrabold mr-3 shrink-0">02</span>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                          Meta Creative Extraction
                        </h5>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          Developed Selenium automation using undetected-chromedriver to access blob-based video assets and programmatically bypass Meta's platform limitations that prevent direct media download.
                        </p>
                      </div>
                    </div>

                    {/* Challenge 3: Sunset Orange */}
                    <div className="flex items-start bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                      <span className="px-2.5 py-1 rounded-md bg-orange-100 text-orange-700 font-mono text-xs font-extrabold mr-3 shrink-0">03</span>
                      <div className="space-y-1">
                        <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                          Low-Resource Deployment
                        </h5>
                        <p className="text-xs text-slate-600 font-normal leading-relaxed">
                          Optimized Chrome execution inside Docker containers with targeted memory management techniques to achieve stable deployment on Render free-tier infrastructure without performance degradation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Spec Sidebar Column */}
              <div className="lg:col-span-4 flex flex-col space-y-5">
                
                {/* Technical Stack Sub-card (Blue) */}
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-5 text-left space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-blue-700">
                    Technical Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["FastAPI", "React", "Python", "Docker", "OpenCV", "Selenium", "Gemini AI"].map((tech, i) => (
                      <span 
                        key={tech}
                        className={`px-2.5 py-0.5 rounded text-[10px] font-bold shadow-2xs ${
                          i % 3 === 0 ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                          i % 3 === 1 ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                          'bg-orange-100 text-orange-800 border border-orange-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lessons Learned Sub-card (Emerald) */}
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-5 text-left space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-800">
                    Lessons Learned
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {[
                      "AI-assisted development workflows",
                      "Full-stack architecture design",
                      "Production deployment challenges",
                      "Performance optimization",
                      "Multimodal AI integration"
                    ].map((lesson) => (
                      <li key={lesson} className="flex items-start">
                        <span className="text-emerald-600 font-bold mr-2 font-mono text-sm leading-none">✓</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Planned Improvements Sub-card (Orange) */}
                <div className="bg-orange-50/70 border border-orange-200/80 rounded-xl p-5 text-left space-y-3">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-orange-800">
                    Planned Improvements
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700 font-medium">
                    {[
                      "PostgreSQL + pgvector for semantic search",
                      "Celery distributed task processing",
                      "Multi-agent analysis architecture",
                      "Historical creative performance benchmarks"
                    ].map((improvement) => (
                      <li key={improvement} className="flex items-start">
                        <span className="text-orange-500 font-bold mr-2 font-mono text-sm leading-none">➔</span>
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </AnimationWrapper>

      </div>
    </section>
  );
};
