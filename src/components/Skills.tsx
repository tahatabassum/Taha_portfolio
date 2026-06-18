import React from 'react';
import { Card } from './ui/Card';
import { Monitor, Server, BrainCircuit, ScanEye, Repeat, HardDrive } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Monitor className="h-5 w-5 text-cyan-400" />,
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend Engineering",
      icon: <Server className="h-5 w-5 text-indigo-400" />,
      skills: ["Python", "FastAPI", "Node.js", "Express.js", "JWT Authentication"]
    },
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit className="h-5 w-5 text-cyan-400" />,
      skills: ["Gemini API", "OpenRouter", "Prompt Engineering", "Machine Learning", "Deep Learning", "AI Agents"]
    },
    {
      title: "Computer Vision",
      icon: <ScanEye className="h-5 w-5 text-indigo-400" />,
      skills: ["OpenCV", "Face Recognition"]
    },
    {
      title: "Automation Workflows",
      icon: <Repeat className="h-5 w-5 text-cyan-400" />,
      skills: ["Selenium", "Browser Automation", "Web Scraping"]
    },
    {
      title: "Infrastructure & Tools",
      icon: <HardDrive className="h-5 w-5 text-indigo-400" />,
      skills: ["Docker", "Git / GitHub", "Render Deployment", "SQLAlchemy ORM"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">Skills Directory</h2>
          <p className="text-3xl sm:text-4xl font-bold font-display text-zinc-50">
            Technical expertise built on real-world implementation.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              hoverEffect={true} 
              className="bg-zinc-900/40 hover:bg-zinc-900/80 border-zinc-900/60 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-zinc-800/60">
                  <div className="p-2 w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-zinc-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Bullet List */}
                <ul className="space-y-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center space-x-2.5 text-xs text-zinc-400 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
