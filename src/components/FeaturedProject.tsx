import React from 'react';
import { Badge } from './ui/Badge';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="featured" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Case Study Container Card */}
        <div className="w-full rounded-2xl bg-[#0d0d10] border border-zinc-900 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Card Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-zinc-900">
            <div className="space-y-3 text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                Featured Case Study
              </span>
              
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-zinc-50">
                  Advantage AI
                </h3>
                <div className="flex gap-2">
                  <Badge variant="indigo" className="bg-indigo-950/40 text-indigo-300 border-indigo-900/50 py-0.5 px-2.5 text-[10px]">
                    AI SaaS Platform
                  </Badge>
                  <Badge variant="accent" className="bg-emerald-950/40 text-emerald-400 border-emerald-900/50 py-0.5 px-2.5 text-[10px]">
                    Deployed
                  </Badge>
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm font-light">
                Digital Marketing Creative Auditing Platform
              </p>
            </div>
            
            {/* Header Action Buttons */}
            <div className="flex sm:space-x-3 gap-2 text-xs">
              <a 
                href="https://advantage-ai-1.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-all shadow-md shadow-blue-900/20"
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
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-850 font-semibold text-zinc-300 hover:border-zinc-700 hover:text-white transition-all"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Card Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col space-y-8 text-left">
              
              {/* Problem Section */}
              <div className="space-y-2.5">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Problem
                </h4>
                <p className="text-zinc-350 text-xs sm:text-sm leading-relaxed font-light">
                  Performance marketing agencies spend significant resources testing ad creatives after launch, only learning what works from live campaign data. Advantage AI moves that evaluation earlier — auditing image and video advertisements before launch to identify weaknesses in hook effectiveness, visual pacing, copywriting quality, CTA placement, cognitive trigger alignment, and engagement potential.
                </p>
              </div>

              {/* Engineering Challenges */}
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Engineering Challenges
                </h4>
                
                <div className="space-y-5">
                  {/* Challenge 1 */}
                  <div className="flex items-start">
                    <span className="text-cyan-400 font-mono text-sm font-semibold mr-3 pt-0.5">01</span>
                    <div className="space-y-1">
                      <h5 className="text-xs sm:text-sm font-bold text-zinc-100">
                        High-Fidelity Video Analysis
                      </h5>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Implemented chronological frame extraction using OpenCV and evaluated the full sequence within a single multimodal AI prompt — preserving narrative flow and significantly improving analysis accuracy over per-frame approaches.
                      </p>
                    </div>
                  </div>

                  {/* Challenge 2 */}
                  <div className="flex items-start">
                    <span className="text-cyan-400 font-mono text-sm font-semibold mr-3 pt-0.5">02</span>
                    <div className="space-y-1">
                      <h5 className="text-xs sm:text-sm font-bold text-zinc-100">
                        Meta Creative Extraction
                      </h5>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Developed Selenium automation using undetected-chromedriver to access blob-based video assets and programmatically bypass Meta's platform limitations that prevent direct media download.
                      </p>
                    </div>
                  </div>

                  {/* Challenge 3 */}
                  <div className="flex items-start">
                    <span className="text-cyan-400 font-mono text-sm font-semibold mr-3 pt-0.5">03</span>
                    <div className="space-y-1">
                      <h5 className="text-xs sm:text-sm font-bold text-zinc-100">
                        Low-Resource Deployment
                      </h5>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        Optimized Chrome execution inside Docker containers with targeted memory management techniques to achieve stable deployment on Render free-tier infrastructure without performance degradation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Spec Sidebar Column */}
            <div className="lg:col-span-4 flex flex-col space-y-5">
              
              {/* Technical Stack Sub-card */}
              <div className="bg-[#0f0f13]/80 border border-zinc-900/80 rounded-xl p-5 text-left space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Technical Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {["FastAPI", "React", "Python", "Docker", "OpenCV", "Selenium", "Gemini AI"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lessons Learned Sub-card */}
              <div className="bg-[#0f0f13]/80 border border-zinc-900/80 rounded-xl p-5 text-left space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Lessons Learned
                </h4>
                <ul className="space-y-2 text-xs text-zinc-400 font-light">
                  {[
                    "AI-assisted development workflows",
                    "Full-stack architecture design",
                    "Production deployment challenges",
                    "Performance optimization",
                    "Multimodal AI integration"
                  ].map((lesson) => (
                    <li key={lesson} className="flex items-start">
                      <span className="text-cyan-500 font-semibold mr-2 font-mono text-sm leading-none">›</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Planned Improvements Sub-card */}
              <div className="bg-[#0f0f13]/80 border border-zinc-900/80 rounded-xl p-5 text-left space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  Planned Improvements
                </h4>
                <ul className="space-y-2 text-xs text-zinc-400 font-light">
                  {[
                    "PostgreSQL + pgvector for semantic search",
                    "Celery distributed task processing",
                    "Multi-agent analysis architecture",
                    "Historical creative performance benchmarks"
                  ].map((improvement) => (
                    <li key={improvement} className="flex items-start">
                      <span className="text-cyan-500 font-semibold mr-2 font-mono text-sm leading-none">›</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
