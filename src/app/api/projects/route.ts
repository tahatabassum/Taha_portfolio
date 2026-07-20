import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/auth';

function isValidUrl(urlString: string): boolean {
  try {
    const parsed = new URL(urlString);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? Math.min(Math.max(parseInt(limitParam, 10) || 0, 1), 50) : undefined;

    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit,
      select: {
        id: true,
        name: true,
        description: true,
        liveUrl: true,
        githubUrl: true,
        techStack: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch projects' }, { status: 500 });
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

    if (!githubUrl || typeof githubUrl !== 'string' || !isValidUrl(githubUrl)) {
      return NextResponse.json({ success: false, message: 'Valid GitHub URL is required' }, { status: 400 });
    }

    if (liveUrl && (typeof liveUrl !== 'string' || !isValidUrl(liveUrl))) {
      return NextResponse.json({ success: false, message: 'Live URL must be a valid http or https URL' }, { status: 400 });
    }

    // Format & cap tech stack array at 20 items
    let stackArray: string[] = [];
    if (Array.isArray(techStack)) {
      stackArray = techStack.map(s => String(s).trim()).filter(Boolean);
    } else if (typeof techStack === 'string') {
      stackArray = techStack.split(',').map(s => s.trim()).filter(Boolean);
    }
    stackArray = stackArray.slice(0, 20);

    const newProject = await prisma.project.create({
      data: {
        name: name.trim(),
        description: description.trim(),
        liveUrl: liveUrl ? liveUrl.trim() : null,
        githubUrl: githubUrl.trim(),
        techStack: JSON.stringify(stackArray),
      },
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ success: false, message: 'Failed to create project' }, { status: 500 });
  }
}
