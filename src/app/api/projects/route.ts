import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/auth';
import { formatUrl } from '@/lib/utils';
import { INITIAL_DEFAULT_PROJECTS, ProjectItem } from '@/lib/defaultProjects';
import { inMemoryProjectsStore, addInMemoryProject } from '@/lib/inMemoryProjectsStore';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? Math.min(Math.max(parseInt(limitParam, 10) || 0, 1), 50) : undefined;

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
      console.warn('Prisma DB read failed, falling back to in-memory store:', e);
      dbProjects = [...inMemoryProjectsStore];
    }

    // Combine DB/InMemory projects with default projects if not present
    const combinedProjects: ProjectItem[] = [...dbProjects];
    for (const defaultProj of INITIAL_DEFAULT_PROJECTS) {
      if (!combinedProjects.some((p) => p.id === defaultProj.id || p.name.toLowerCase() === defaultProj.name.toLowerCase())) {
        combinedProjects.push(defaultProj);
      }
    }

    const finalProjects = limit ? combinedProjects.slice(0, limit) : combinedProjects;

    return NextResponse.json({ success: true, projects: finalProjects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ success: true, projects: INITIAL_DEFAULT_PROJECTS });
  }
}

export async function POST(request: Request) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, description, liveUrl, githubUrl, techStack } = body;

    // Server-side bounds validation
    if (!name || typeof name !== 'string' || !name.trim() || name.length > 100) {
      return NextResponse.json({ success: false, message: 'Project name is required (max 100 characters)' }, { status: 400 });
    }

    if (!description || typeof description !== 'string' || !description.trim() || description.length > 3000) {
      return NextResponse.json({ success: false, message: 'Description is required (max 3,000 characters)' }, { status: 400 });
    }

    const formattedGithubUrl = formatUrl(githubUrl);
    if (!formattedGithubUrl) {
      return NextResponse.json({ success: false, message: 'Valid GitHub repository URL is required' }, { status: 400 });
    }

    const formattedLiveUrl = formatUrl(liveUrl);

    // Format & cap tech stack array at 20 items
    let stackArray: string[] = [];
    if (Array.isArray(techStack)) {
      stackArray = techStack.map((s) => String(s).trim()).filter(Boolean);
    } else if (typeof techStack === 'string') {
      stackArray = techStack.split(',').map((s) => s.trim()).filter(Boolean);
    }
    stackArray = stackArray.slice(0, 20);
    const techStackJson = JSON.stringify(stackArray);

    let createdProject: ProjectItem;

    try {
      const record = await prisma.project.create({
        data: {
          name: name.trim(),
          description: description.trim(),
          liveUrl: formattedLiveUrl,
          githubUrl: formattedGithubUrl,
          techStack: techStackJson,
        },
      });
      createdProject = {
        id: record.id,
        name: record.name,
        description: record.description,
        liveUrl: record.liveUrl,
        githubUrl: record.githubUrl,
        techStack: record.techStack,
        createdAt: record.createdAt.toISOString(),
      };
    } catch (dbError) {
      console.warn('Prisma DB write failed, storing in in-memory fallback store:', dbError);
      createdProject = addInMemoryProject({
        name: name.trim(),
        description: description.trim(),
        liveUrl: formattedLiveUrl,
        githubUrl: formattedGithubUrl,
        techStack: techStackJson,
      });
    }

    return NextResponse.json({ success: true, project: createdProject }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating project:', error);
    return NextResponse.json({ success: false, message: error?.message || 'Failed to create project' }, { status: 500 });
  }
}
