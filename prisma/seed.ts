import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany({});

  await prisma.project.create({
    data: {
      name: 'ResumeAI',
      description: 'AI-powered resume builder web application generating optimized resume copies using Gemini AI, with JWT authentication, real-time draft saving, and side-by-side visual PDF export.',
      liveUrl: 'https://github.com/tahatabassum/ResumeAI',
      githubUrl: 'https://github.com/tahatabassum/ResumeAI',
      techStack: JSON.stringify(['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express.js', 'Node.js', 'Gemini AI', 'JWT Auth']),
    },
  });

  await prisma.project.create({
    data: {
      name: 'Jarvis Voice Assistant',
      description: 'Desktop voice assistant automating operating system workflows, shell execution, speech synthesis, and facial recognition using custom computer vision models.',
      liveUrl: 'https://github.com/tahatabassum/Jarvis',
      githubUrl: 'https://github.com/tahatabassum/Jarvis',
      techStack: JSON.stringify(['FastAPI', 'Python', 'React', 'Gemini API', 'Groq API', 'OpenCV', 'Face Recognition', 'Speech Recognition', 'gTTS']),
    },
  });

  console.log('Database seeded with initial projects!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
