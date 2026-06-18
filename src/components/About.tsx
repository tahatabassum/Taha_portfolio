import React from 'react';
import { Card } from './ui/Card';
import { Brain, Code, Eye, Workflow, Cloud, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const coreStrengths = [
    {
      icon: <Brain className="h-5 w-5 text-cyan-400" />,
      title: "AI Integration & Agents",
      desc: "Deploying multimodal models, designing structured prompting architectures, and automating reasoning tasks."
    },
    {
      icon: <Eye className="h-5 w-5 text-indigo-400" />,
      title: "Computer Vision Workflows",
      desc: "Chronological video/image parsing using OpenCV, frame sequence rendering, and object classification."
    },
    {
      icon: <Workflow className="h-5 w-5 text-cyan-400" />,
      title: "Automation & Scraping",
      desc: "Configuring headless web scrapers using Selenium and undetected-chromedriver to bypass strict ad verification walls."
    },
    {
      icon: <Code className="h-5 w-5 text-indigo-400" />,
      title: "Full-Stack Development",
      desc: "Designing fast async endpoints with FastAPI and building responsive user interfaces with React and TypeScript."
    },
    {
      icon: <Cloud className="h-5 w-5 text-cyan-400" />,
      title: "Containerized Deployment",
      desc: "Optimizing memory-management configs for Google Chrome inside Docker containers for reliable resource allocation."
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-400" />,
      title: "AI-Assisted Workflows",
      desc: "Utilizing modern AI co-pilots to optimize planning, document architecture details, and accelerate implementation."
    }
  ];

  const technologies = [
    "React", "TypeScript", "Python", "FastAPI", "OpenCV", 
    "Docker", "Selenium", "Gemini AI", "GitHub Copilot", "ChatGPT", "Claude"
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">About Me</h2>
          <p className="text-3xl sm:text-4xl font-bold font-display text-zinc-50">
            AI/ML-focused Computer Science student building production-ready web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <p className="text-zinc-300 font-light leading-relaxed">
              I am a Computer Science student at the University of Agriculture Faisalabad, combining rigorous academic theory with hands-on full-stack development experience. My primary focus is building engineering workflows that integrate artificial intelligence directly into SaaS platforms.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed">
              Instead of building generic wrappers, I focus on solving hard engineering challenges—like extracting blob-based assets from high-security advertising platforms, running stable automation engines in restricted cloud containers, and extracting chronological video frame sequences for visual reasoning.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed">
              I believe in modern development methodologies, where AI serves as a powerful accelerator for drafting boilerplate and structural templates, allowing developers to focus on architectural system design, edge cases, and runtime stability.
            </p>

            <div className="pt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">Experienced with</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Strengths Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreStrengths.map((strength, idx) => (
              <Card key={idx} hoverEffect={true} className="flex flex-col space-y-3 bg-zinc-900/40 hover:bg-zinc-900/70 border-zinc-900">
                <div className="p-2 w-10 h-10 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {strength.icon}
                </div>
                <h4 className="text-sm font-semibold font-display text-zinc-100">{strength.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">{strength.desc}</p>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
