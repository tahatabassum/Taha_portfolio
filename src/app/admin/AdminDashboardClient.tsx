'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, Trash2, LogOut, ExternalLink, Github, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { parseTechStack } from '@/lib/utils';

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  liveUrl?: string | null;
  githubUrl: string;
  techStack: string;
  createdAt: any;
}

export default function AdminDashboardClient({ initialProjects }: { initialProjects: ProjectItem[] }) {
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [techStackInput, setTechStackInput] = useState('');
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          description,
          liveUrl: liveUrl || null,
          githubUrl,
          techStack: techStackInput,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatusMsg({ type: 'success', text: 'Project published successfully!' });
        setProjects([data.project, ...projects]);
        // Reset form
        setName('');
        setDescription('');
        setLiveUrl('');
        setGithubUrl('');
        setTechStackInput('');
      } else {
        setStatusMsg({ type: 'error', text: data.message || 'Failed to create project' });
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'An unexpected error occurred.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProject = async (id: string, projectName: string) => {
    if (!confirm(`Are you sure you want to delete "${projectName}"?`)) return;

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setProjects(projects.filter((p) => p.id !== id));
        setStatusMsg({ type: 'success', text: `Project "${projectName}" deleted.` });
      } else {
        setStatusMsg({ type: 'error', text: data.message || 'Failed to delete project' });
      }
    } catch (err) {
      setStatusMsg({ type: 'error', text: 'Error deleting project.' });
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Admin Management Dashboard</span>
            </div>
            <h1 className="text-3xl font-extrabold font-display text-slate-900">Portfolio Project Manager</h1>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-red-50 hover:text-red-700 hover:border-red-200 text-slate-700 text-xs font-bold transition-all shadow-sm self-start sm:self-auto"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {statusMsg && (
          <div className={`p-4 rounded-xl text-xs font-semibold flex items-center space-x-2 ${
            statusMsg.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {statusMsg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <ShieldAlert className="h-4 w-4 shrink-0" />}
            <span>{statusMsg.text}</span>
          </div>
        )}

        {/* Add Project Form Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <PlusCircle className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-bold font-display text-slate-900">Add New Project</h2>
          </div>

          <form onSubmit={handleCreateProject} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project Name */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Project Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Smart Vision Analytics"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              {/* GitHub Repository URL */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  GitHub Repo URL *
                </label>
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/tahatabassum/repo-name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              {/* Live Demo URL */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Live URL (Optional)
                </label>
                <input
                  type="url"
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  placeholder="https://my-project-demo.vercel.app"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              {/* Tech Stack Input */}
              <div className="space-y-1.5 text-left">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Tech Stack (Comma-separated) *
                </label>
                <input
                  type="text"
                  value={techStackInput}
                  onChange={(e) => setTechStackInput(e.target.value)}
                  placeholder="React, FastAPI, OpenCV, Gemini AI, Docker"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

            </div>

            {/* Description Textarea */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Full Description *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Detailed description of the project architecture, features, and engineering solutions..."
                required
                className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-blue-500/20"
              >
                {submitting ? 'Publishing Project...' : 'Publish Project'}
              </button>
            </div>
          </form>
        </div>

        {/* Existing Projects List Card */}
        <div className="space-y-4 text-left">
          <h2 className="text-xl font-bold font-display text-slate-900">
            Managed Projects ({projects.length})
          </h2>

          {projects.length === 0 ? (
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-sm font-normal">
              No projects added yet. Use the form above to add your first project.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project) => {
                const stack = parseTechStack(project.techStack);
                return (
                  <div
                    key={project.id}
                    className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-slate-300 transition-all"
                  >
                    <div className="space-y-2 max-w-2xl">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-bold font-display text-slate-900">
                          {project.name}
                        </h3>
                        <span suppressHydrationWarning className="text-[10px] text-slate-400 font-mono">
                          {new Date(project.createdAt).toISOString().split('T')[0]}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 font-normal line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {stack.map((t, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 self-end sm:self-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all"
                        title="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
                          title="Live Preview"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <button
                        onClick={() => handleDeleteProject(project.id, project.name)}
                        className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all"
                        title="Delete Project"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
