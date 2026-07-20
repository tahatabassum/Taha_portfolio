import { INITIAL_DEFAULT_PROJECTS, ProjectItem } from './defaultProjects';

// Global in-memory cache to persist projects during serverless session execution
const globalForProjects = global as unknown as {
  inMemoryProjects?: ProjectItem[];
};

export const inMemoryProjectsStore: ProjectItem[] =
  globalForProjects.inMemoryProjects || [...INITIAL_DEFAULT_PROJECTS];

if (process.env.NODE_ENV !== 'production') {
  globalForProjects.inMemoryProjects = inMemoryProjectsStore;
}

export function addInMemoryProject(project: Omit<ProjectItem, 'id' | 'createdAt'> & { id?: string; createdAt?: string }): ProjectItem {
  const newProject: ProjectItem = {
    id: project.id || `proj_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: project.name,
    description: project.description,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    techStack: project.techStack,
    createdAt: project.createdAt || new Date().toISOString(),
  };

  inMemoryProjectsStore.unshift(newProject);
  return newProject;
}

export function deleteInMemoryProject(id: string): boolean {
  const index = inMemoryProjectsStore.findIndex((p) => p.id === id);
  if (index !== -1) {
    inMemoryProjectsStore.splice(index, 1);
    return true;
  }
  return false;
}
