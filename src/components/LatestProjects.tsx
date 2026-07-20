'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { parseTechStack } from '@/lib/utils';
import { AnimationWrapper } from './AnimationWrapper';

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  liveUrl?: string | null;
  githubUrl: string;
  techStack: string;
}

export const LatestProjects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/projects?limit=4');
        const data = await res.json();
        if (data.success) {
          setProjects(data.projects || []);
        }
      } catch (error) {
        console.error('Error loading latest projects:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6 text-left">
            <div>
              <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-widest bg-blue-100 text-blue-700 border border-blue-200 inline-block mb-3">
                Other Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
                Latest Products & Tools
              </h2>
            </div>
            
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-orange-600 transition-colors self-start sm:self-auto group"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimationWrapper>

        {/* Projects Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((n) => (
              <div key={n} className="bg-slate-50 border border-slate-200 rounded-xl p-6 h-64 animate-pulse"></div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <AnimationWrapper direction="up" delay={0.2}>
            <div className="bg-orange-50/50 border border-dashed border-orange-300 rounded-2xl p-12 text-center max-w-xl mx-auto space-y-3">
              <div className="inline-flex p-3 rounded-full bg-orange-100 text-orange-600 mb-1">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">More Projects Coming Soon</h3>
              <p className="text-xs text-slate-600 font-normal max-w-md mx-auto">
                Additional AI applications, computer vision scripts, and full-stack tools are being published.
              </p>
            </div>
          </AnimationWrapper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => {
              const techList = parseTechStack(project.techStack);
              const cardBorder = idx % 3 === 0 ? 'border-t-4 border-t-blue-500' : idx % 3 === 1 ? 'border-t-4 border-t-emerald-500' : 'border-t-4 border-t-orange-500';
              
              return (
                <AnimationWrapper key={project.id} direction="up" delay={0.1 * idx}>
                  <Card hoverEffect={true} className={`bg-white border-slate-200 p-6 flex flex-col justify-between h-full shadow-sm ${cardBorder}`}>
                    <div className="space-y-4 text-left">
                      {/* Top Header */}
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-bold font-display text-slate-900">
                          {project.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all"
                            aria-label="GitHub Source"
                          >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-6 border-t border-slate-100 mt-6">
                      {techList.map((tech, techIdx) => {
                        const variant = techIdx % 3 === 0 ? 'blue' : techIdx % 3 === 1 ? 'green' : 'orange';
                        return (
                          <Badge key={techIdx} variant={variant} className="text-[10px] py-0.5">
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>
                  </Card>
                </AnimationWrapper>
              );
            })}
          </div>
        )}

        {/* Show More Projects Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-500/20 hover:shadow-orange-500/20"
          >
            <span>Show More Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
