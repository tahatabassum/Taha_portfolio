import React from 'react';
import Link from 'next/link';
import { getAllProjects } from '@/lib/getProjects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AllProjectsClient } from '@/components/AllProjectsClient';
import { ArrowLeft, ExternalLink, Sparkles, Pin } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AllProjectsPage() {
  const initialProjects = await getAllProjects();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Button & Page Header */}
          <div className="space-y-4 text-left">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900">
                  Engineering Projects Archive
                </h1>
                <p className="text-slate-600 text-sm font-medium max-w-2xl mt-2">
                  Complete collection of production SaaS platforms, AI tools, automation scripts, and computer vision workflows.
                </p>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold self-start sm:self-auto">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{initialProjects.length + 1} Total Products</span>
              </div>
            </div>
          </div>

          {/* Pinned Featured Project Card (Advantage AI) */}
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-2 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <Pin className="h-3.5 w-3.5 text-blue-600 fill-blue-600" />
              <span>Pinned Flagship Case Study</span>
            </div>

            <Card hoverEffect={true} className="bg-white border-slate-200 p-8 shadow-md border-t-4 border-t-blue-600">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold font-display text-slate-900">Advantage AI</h2>
                    <Badge variant="blue" className="text-xs">AI SaaS Platform</Badge>
                    <Badge variant="green" className="text-xs">Deployed</Badge>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    Digital Marketing Creative Auditing Platform — Evaluates video/image ads prior to campaign deployment.
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-xs">
                  <a
                    href="https://advantage-ai-1.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/tahatabassum/advantage-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all"
                  >
                    <svg className="h-4 w-4 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>Repository</span>
                  </a>
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="bg-blue-50/60 p-3.5 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-1">High-Fidelity Frame Extraction</h4>
                  <p>OpenCV chronological video sequence analysis in a unified prompt.</p>
                </div>
                <div className="bg-emerald-50/60 p-3.5 rounded-lg border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 mb-1">Meta Creative Bypassing</h4>
                  <p>Selenium automation retrieving blob-based ad media assets.</p>
                </div>
                <div className="bg-orange-50/60 p-3.5 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-900 mb-1">Low-Resource Dockerizing</h4>
                  <p>Chromium memory flag optimizations on free cloud container tiers.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-6 border-t border-slate-100 mt-6">
                {["FastAPI", "React", "Python", "Docker", "OpenCV", "Selenium", "Gemini AI"].map((t, idx) => {
                  const variant = idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'green' : 'orange';
                  return <Badge key={t} variant={variant} className="text-[10px] py-0.5">{t}</Badge>;
                })}
              </div>
            </Card>
          </div>

          {/* Interactive Dynamic Projects Grid */}
          <AllProjectsClient initialProjects={initialProjects} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
