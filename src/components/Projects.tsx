import React from 'react';
import { Card } from './ui/Card';

interface Project {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  demo?: string;
}

export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      title: "ResumeAI",
      desc: "AI-powered resume builder that generates professional resumes using Gemini AI. Designed to help job seekers overcome writer's block and create optimized resumes quickly with a clean, guided experience.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express.js", "Node.js", "Gemini AI", "JWT Auth"],
      github: "https://github.com/tahatabassum/ResumeAi",
      demo: "https://resumeai-ntab.onrender.com/",
    },
    {
      title: "Jarvis Voice Assistant",
      desc: "Desktop voice assistant that automates workflows, retrieves real-time information, performs system commands, maintains conversational memory, and integrates facial recognition for personalized responses.",
      tech: ["FastAPI", "Python", "React", "Gemini API", "Groq API", "OpenCV", "Face Recognition", "Speech Recognition", "gTTS", "Three.js"],
      github: "https://github.com/tahatabassum/Jarvis-voice-assistant",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            More Projects
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold font-display text-zinc-50">
            Other Work
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project, idx) => (
            <Card 
              key={idx} 
              hoverEffect={true} 
              className="bg-[#0d0d10] border border-zinc-900 flex flex-col justify-between p-6 sm:p-8"
            >
              <div className="space-y-4 text-left">
                {/* Title and Buttons */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold font-display text-zinc-100">
                    {project.title}
                  </h3>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-150 transition-colors"
                        aria-label={`${project.title} Live Demo`}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </a>
                    )}
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-150 transition-colors"
                      aria-label={`${project.title} Source Code`}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Badges (Bottom) */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2.5 py-0.5 rounded bg-zinc-900/50 border border-zinc-900/80 text-[10px] font-medium text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
