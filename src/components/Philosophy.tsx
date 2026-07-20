'use client';

import React from 'react';
import { Card } from './ui/Card';
import { Terminal, Settings, Shield } from 'lucide-react';
import { AnimationWrapper } from './AnimationWrapper';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: <Terminal className="h-5 w-5 text-blue-600" />,
      title: "Acceleration, Not Delegation",
      desc: "Using AI to rapidly draft initial structures, write comprehensive unit test suites, and generate documentation—while maintaining complete human ownership over core logic and domain architecture.",
      bgColor: "bg-blue-50 border-blue-200",
      topBorder: "border-t-4 border-t-blue-600"
    },
    {
      icon: <Settings className="h-5 w-5 text-emerald-600" />,
      title: "System Design Priority",
      desc: "Recognizing that generating raw code is easy, but structuring state machines, defining strict TypeScript contracts, and designing resilient error boundaries requires deep human engineering.",
      bgColor: "bg-emerald-50 border-emerald-200",
      topBorder: "border-t-4 border-t-emerald-600"
    },
    {
      icon: <Shield className="h-5 w-5 text-orange-600" />,
      title: "Production-First Mindset",
      desc: "Building systems designed for real-world deployment constraints from day one—managing container memory footprints, handling API rate limits gracefully, and handling async task queues.",
      bgColor: "bg-orange-50 border-orange-200",
      topBorder: "border-t-4 border-t-orange-500"
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-gradient-to-b from-emerald-50/30 via-white to-slate-50/60 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="text-left max-w-3xl mb-16">
            <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-widest bg-emerald-100 text-emerald-800 border border-emerald-200 inline-block mb-3">
              Development Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              AI as a Development Collaborator
            </h2>
          </div>
        </AnimationWrapper>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <AnimationWrapper key={idx} direction="up" delay={0.1 * idx}>
              <Card hoverEffect={true} className={`bg-white border-slate-200 p-6 flex flex-col space-y-4 h-full shadow-sm ${pillar.topBorder}`}>
                <div className={`p-2.5 w-10 h-10 rounded-lg flex items-center justify-center border ${pillar.bgColor}`}>
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 text-left">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal text-left">
                  {pillar.desc}
                </p>
              </Card>
            </AnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};
