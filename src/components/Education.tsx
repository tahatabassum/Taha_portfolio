import React from 'react';
import { Card } from './ui/Card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Education</h2>
          <p className="text-3xl sm:text-4xl font-bold font-display text-zinc-50">
            Academic Foundation
          </p>
        </div>

        {/* Education Timeline/Details */}
        <div className="max-w-3xl text-left">
          <Card hoverEffect={true} className="bg-zinc-900/40 border-zinc-900 p-8 flex flex-col md:flex-row md:items-start md:space-x-6">
            <div className="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 shrink-0 w-14 h-14 flex items-center justify-center mb-4 md:mb-0">
              <GraduationCap className="h-7 w-7 text-cyan-400" />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold font-display text-zinc-100">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm font-semibold text-zinc-400 mt-1">
                  University of Agriculture Faisalabad
                </p>
              </div>

              <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-zinc-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-zinc-650" />
                  <span>2024 — 2028</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-zinc-650" />
                  <span>Faisalabad, Pakistan</span>
                </span>
              </div>

              <div className="pt-2 border-t border-zinc-850">
                <p className="text-xs text-zinc-450 leading-relaxed font-light">
                  Focused study on algorithms, data structures, and computer science methodologies, coupled with independent research and software engineering projects centered on artificial intelligence integration, web scraping scalability, and computer vision workflows.
                </p>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};
