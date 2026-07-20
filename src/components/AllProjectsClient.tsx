'use client';

import React, { useEffect, useState } from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ExternalLink, Github } from 'lucide-react';
import { parseTechStack } from '@/lib/utils';
import { ProjectItem } from '@/lib/defaultProjects';

export function AllProjectsClient({ initialProjects }: { initialProjects: ProjectItem[] }) {
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);

  useEffect(() => {
    async function fetchAll() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (data.success && Array.isArray(data.projects) && data.projects.length > 0) {
          setProjects(data.projects);
        }
      } catch (err) {
        console.error('Error fetching all projects:', err);
      }
    }
    fetchAll();
  }, []);

  return (
    <div className="space-y-6 text-left">
      <h2 className="text-lg font-bold font-display text-slate-900">
        Published Engineering Work ({projects.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const techList = parseTechStack(project.techStack);
          const cardBorder =
            idx % 3 === 0
              ? 'border-t-4 border-t-blue-500'
              : idx % 3 === 1
              ? 'border-t-4 border-t-emerald-500'
              : 'border-t-4 border-t-orange-500';

          return (
            <Card
              key={project.id}
              hoverEffect={true}
              className={`bg-white border-slate-200 p-6 flex flex-col justify-between h-full shadow-sm ${cardBorder}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    {project.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all"
                        title="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-6 border-t border-slate-100 mt-6">
                {techList.map((t, i) => {
                  const variant = i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'green' : 'orange';
                  return (
                    <Badge key={i} variant={variant} className="text-[10px] py-0.5">
                      {t}
                    </Badge>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
