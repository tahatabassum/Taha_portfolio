import { prisma } from '@/lib/prisma';
import { INITIAL_DEFAULT_PROJECTS, ProjectItem } from '@/lib/defaultProjects';
import { inMemoryProjectsStore } from '@/lib/inMemoryProjectsStore';

export async function getAllProjects(limit?: number): Promise<ProjectItem[]> {
  let dbProjects: ProjectItem[] = [];

  try {
    const records = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
    dbProjects = records.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description,
      liveUrl: r.liveUrl,
      githubUrl: r.githubUrl,
      techStack: r.techStack,
      createdAt: r.createdAt.toISOString(),
    }));
  } catch (e) {
    console.warn('Prisma DB read failed or unreachable, using in-memory store:', e);
  }

  const combinedProjects: ProjectItem[] = [...dbProjects];

  // Include newly published in-memory projects (e.g. Dual Craft Site)
  for (const memoryProj of inMemoryProjectsStore) {
    if (!combinedProjects.some((p) => p.id === memoryProj.id || p.name.toLowerCase() === memoryProj.name.toLowerCase())) {
      combinedProjects.push(memoryProj);
    }
  }

  // Include default projects (ResumeAI & Jarvis Voice Assistant)
  for (const defaultProj of INITIAL_DEFAULT_PROJECTS) {
    if (!combinedProjects.some((p) => p.id === defaultProj.id || p.name.toLowerCase() === defaultProj.name.toLowerCase())) {
      combinedProjects.push(defaultProj);
    }
  }

  return limit ? combinedProjects.slice(0, limit) : combinedProjects;
}
