'use client';

import React from 'react';
import { Card } from './ui/Card';
import { Monitor, Server, BrainCircuit, ScanEye, Repeat, HardDrive } from 'lucide-react';
import { AnimationWrapper } from './AnimationWrapper';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  borderAccent: string;
  bulletColor: string;
  badgeBg: string;
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-5 w-5 text-blue-600" />,
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite / Next.js"],
      borderAccent: "border-t-4 border-t-blue-600",
      bulletColor: "bg-blue-600",
      badgeBg: "bg-blue-50 border-blue-200"
    },
    {
      title: "Backend Engineering",
      icon: <Server className="h-5 w-5 text-emerald-600" />,
      skills: ["Python", "FastAPI", "Node.js", "Express.js", "JWT Authentication"],
      borderAccent: "border-t-4 border-t-emerald-600",
      bulletColor: "bg-emerald-600",
      badgeBg: "bg-emerald-50 border-emerald-200"
    },
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit className="h-5 w-5 text-orange-600" />,
      skills: ["Gemini API", "OpenRouter", "Prompt Engineering", "Machine Learning", "Deep Learning", "AI Agents"],
      borderAccent: "border-t-4 border-t-orange-500",
      bulletColor: "bg-orange-500",
      badgeBg: "bg-orange-50 border-orange-200"
    },
    {
      title: "Computer Vision",
      icon: <ScanEye className="h-5 w-5 text-blue-600" />,
      skills: ["OpenCV", "Face Recognition"],
      borderAccent: "border-t-4 border-t-blue-600",
      bulletColor: "bg-blue-600",
      badgeBg: "bg-blue-50 border-blue-200"
    },
    {
      title: "Automation Workflows",
      icon: <Repeat className="h-5 w-5 text-emerald-600" />,
      skills: ["Selenium", "Browser Automation", "Web Scraping"],
      borderAccent: "border-t-4 border-t-emerald-600",
      bulletColor: "bg-emerald-600",
      badgeBg: "bg-emerald-50 border-emerald-200"
    },
    {
      title: "Infrastructure & Tools",
      icon: <HardDrive className="h-5 w-5 text-orange-600" />,
      skills: ["Docker", "Git / GitHub", "Render / Vercel Deployment", "SQLAlchemy ORM / Prisma"],
      borderAccent: "border-t-4 border-t-orange-500",
      bulletColor: "bg-orange-500",
      badgeBg: "bg-orange-50 border-orange-200"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimationWrapper direction="up" delay={0.1}>
          <div className="text-left max-w-3xl mb-16">
            <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-widest bg-emerald-100 text-emerald-800 border border-emerald-200 inline-block mb-3">
              Skills Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Technical expertise built on real-world implementation.
            </h2>
          </div>
        </AnimationWrapper>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <AnimationWrapper key={idx} direction="up" delay={0.08 * idx}>
              <Card 
                hoverEffect={true} 
                className={`bg-white border-slate-200 p-6 flex flex-col justify-between h-full shadow-sm ${category.borderAccent}`}
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-100">
                    <div className={`p-2 w-9 h-9 rounded-lg flex items-center justify-center border ${category.badgeBg}`}>
                      {category.icon}
                    </div>
                    <h3 className="font-display font-bold text-sm text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Bullet List */}
                  <ul className="space-y-2.5">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="flex items-center space-x-2.5 text-xs text-slate-700 font-medium">
                        <span className={`w-2 h-2 rounded-full ${category.bulletColor}`}></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </AnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};
