'use client';

import React from 'react';
import { Card } from './ui/Card';
import { Brain, Code, Eye, Workflow, Cloud, Sparkles } from 'lucide-react';
import { AnimationWrapper } from './AnimationWrapper';

export const About: React.FC = () => {
  const coreStrengths = [
    {
      icon: <Brain className="h-5 w-5 text-blue-600" />,
      title: "AI Integration & Agents",
      desc: "Deploying multimodal models, designing structured prompting architectures, and automating reasoning tasks.",
      bgColor: "bg-blue-50/80 border-blue-200",
      accentColor: "border-t-2 border-t-blue-500"
    },
    {
      icon: <Eye className="h-5 w-5 text-emerald-600" />,
      title: "Computer Vision Workflows",
      desc: "Chronological video/image parsing using OpenCV, frame sequence rendering, and object classification.",
      bgColor: "bg-emerald-50/80 border-emerald-200",
      accentColor: "border-t-2 border-t-emerald-500"
    },
    {
      icon: <Workflow className="h-5 w-5 text-orange-600" />,
      title: "Automation & Scraping",
      desc: "Configuring headless web scrapers using Selenium and undetected-chromedriver to bypass strict ad verification walls.",
      bgColor: "bg-orange-50/80 border-orange-200",
      accentColor: "border-t-2 border-t-orange-500"
    },
    {
      icon: <Code className="h-5 w-5 text-blue-600" />,
      title: "Full-Stack Development",
      desc: "Designing fast async endpoints with FastAPI and building responsive user interfaces with React and TypeScript.",
      bgColor: "bg-blue-50/80 border-blue-200",
      accentColor: "border-t-2 border-t-blue-500"
    },
    {
      icon: <Cloud className="h-5 w-5 text-emerald-600" />,
      title: "Containerized Deployment",
      desc: "Optimizing memory-management configs for Google Chrome inside Docker containers for reliable resource allocation.",
      bgColor: "bg-emerald-50/80 border-emerald-200",
      accentColor: "border-t-2 border-t-emerald-500"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-orange-600" />,
      title: "AI-Assisted Workflows",
      desc: "Utilizing modern AI co-pilots to optimize planning, document architecture details, and accelerate implementation.",
      bgColor: "bg-orange-50/80 border-orange-200",
      accentColor: "border-t-2 border-t-orange-500"
    }
  ];

  const technologies = [
    { name: "React", type: "blue" },
    { name: "TypeScript", type: "blue" },
    { name: "Python", type: "emerald" },
    { name: "FastAPI", type: "emerald" },
    { name: "OpenCV", type: "orange" },
    { name: "Docker", type: "blue" },
    { name: "Selenium", type: "orange" },
    { name: "Gemini AI", type: "emerald" },
    { name: "GitHub Copilot", type: "blue" },
    { name: "ChatGPT", type: "emerald" },
    { name: "Claude", type: "orange" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-orange-50/30 via-white to-slate-50/60 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="text-left max-w-3xl mb-16">
            <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-widest bg-orange-100 text-orange-700 border border-orange-200 inline-block mb-3">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              AI/ML-focused Computer Science student building production-ready web platforms.
            </h2>
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <AnimationWrapper direction="up" delay={0.2}>
              <p className="text-slate-700 font-medium leading-relaxed">
                I am a Computer Science student at the University of Agriculture Faisalabad, combining rigorous academic theory with hands-on full-stack development experience. My primary focus is building engineering workflows that integrate artificial intelligence directly into SaaS platforms.
              </p>
            </AnimationWrapper>
            <AnimationWrapper direction="up" delay={0.3}>
              <p className="text-slate-600 font-normal leading-relaxed">
                Instead of building generic wrappers, I focus on solving hard engineering challenges—like extracting blob-based assets from high-security advertising platforms, running stable automation engines in restricted cloud containers, and extracting chronological video frame sequences for visual reasoning.
              </p>
            </AnimationWrapper>
            <AnimationWrapper direction="up" delay={0.4}>
              <p className="text-slate-600 font-normal leading-relaxed">
                I believe in modern development methodologies, where AI serves as a powerful accelerator for drafting boilerplate and structural templates, allowing developers to focus on architectural system design, edge cases, and runtime stability.
              </p>
            </AnimationWrapper>

            <AnimationWrapper direction="up" delay={0.5}>
              <div className="pt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Experienced with</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span 
                      key={tech.name} 
                      className={`px-3 py-1 rounded-lg text-xs font-bold shadow-xs transition-colors ${
                        tech.type === 'blue'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
                          : tech.type === 'emerald'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                          : 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100'
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          </div>

          {/* Strengths Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((strength, idx) => (
              <AnimationWrapper key={idx} direction="up" delay={0.08 * idx}>
                <Card hoverEffect={true} className={`flex flex-col space-y-3 bg-white border-slate-200 p-5 h-full ${strength.accentColor} shadow-sm`}>
                  <div className={`p-2.5 w-10 h-10 rounded-lg flex items-center justify-center border ${strength.bgColor}`}>
                    {strength.icon}
                  </div>
                  <h3 className="text-sm font-bold font-display text-slate-900">{strength.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{strength.desc}</p>
                </Card>
              </AnimationWrapper>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
