export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  liveUrl: string | null;
  githubUrl: string;
  techStack: string; // JSON array string
  createdAt: string;
}

export const INITIAL_DEFAULT_PROJECTS: ProjectItem[] = [
  {
    id: 'default-resume-ai',
    name: 'ResumeAI',
    description: 'AI-powered resume builder leveraging Gemini AI to compose, critique, and optimize professional resumes for targeted tech roles.',
    liveUrl: 'https://resume-ai-demo.vercel.app',
    githubUrl: 'https://github.com/tahatabassum/resume-ai',
    techStack: JSON.stringify(['React', 'TypeScript', 'Node.js', 'Express.js', 'Gemini AI', 'JWT']),
    createdAt: new Date('2026-01-15').toISOString(),
  },
  {
    id: 'default-jarvis-assistant',
    name: 'Jarvis Voice Assistant',
    description: 'Desktop voice assistant integrating workflow automation, OS shell control, speech synthesis, and face recognition.',
    liveUrl: null,
    githubUrl: 'https://github.com/tahatabassum/jarvis-voice-assistant',
    techStack: JSON.stringify(['FastAPI', 'Python', 'React', 'Gemini API', 'Groq API', 'OpenCV', 'SpeechRecognition', 'Three.js']),
    createdAt: new Date('2026-02-10').toISOString(),
  },
];
