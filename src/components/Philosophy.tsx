import React from 'react';
import { Card } from './ui/Card';
import { Settings, Terminal, Shield } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: <Terminal className="h-4 w-4 text-cyan-400" />,
      title: "Acceleration, Not Delegation",
      desc: "Using AI to instantly spin up config boilerplate, draft unit tests, and cross-examine docs while retaining total control over system logic."
    },
    {
      icon: <Settings className="h-4 w-4 text-indigo-400" />,
      title: "System Design Priority",
      desc: "Code syntax is easily generated; system design, reliability, resource management, and state integrity require human engineering decision-making."
    },
    {
      icon: <Shield className="h-4 w-4 text-cyan-400" />,
      title: "Production-First Mindset",
      desc: "Designing software to survive real-world deployment challenges: handling low-resource containers, rate limits, and network errors gracefully."
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Headline and Narrative */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Development Philosophy</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-50 leading-tight">
              AI as a Development Collaborator
            </h3>
            <p className="text-zinc-300 font-light leading-relaxed">
              I use AI tools such as ChatGPT, Claude, Gemini, and GitHub Copilot to accelerate architecture planning, debugging, documentation, and implementation.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed">
              AI improves development speed, but engineering ownership, system design, and technical decision-making remain under my control.
            </p>
            <p className="text-zinc-450 text-xs font-mono border-l-2 border-zinc-800 pl-4 py-1.5 text-zinc-500">
              "The goal is not simply to generate code but to build reliable, maintainable, and production-ready software systems."
            </p>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => (
              <Card key={idx} hoverEffect={true} className="bg-zinc-900/30 border-zinc-900/60 p-5 flex items-start space-x-4">
                <div className="p-2 rounded bg-zinc-900 border border-zinc-850 shrink-0">
                  {pillar.icon}
                </div>
                <div className="text-left space-y-1">
                  <h4 className="text-sm font-semibold font-display text-zinc-200">{pillar.title}</h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
