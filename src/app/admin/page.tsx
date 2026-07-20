import React from 'react';
import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { INITIAL_DEFAULT_PROJECTS, ProjectItem } from '@/lib/defaultProjects';
import AdminDashboardClient from './AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authenticated = isAdminAuthenticated();

  if (!authenticated) {
    redirect('/admin/login');
  }

  let dbProjects: ProjectItem[] = [];
  try {
    const records = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
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
  } catch (error) {
    console.error('Database query error on /admin page:', error);
  }

  // Combine DB projects with default projects if not present
  const combinedProjects: ProjectItem[] = [...dbProjects];
  for (const defProj of INITIAL_DEFAULT_PROJECTS) {
    if (!combinedProjects.some((p) => p.id === defProj.id || p.name.toLowerCase() === defProj.name.toLowerCase())) {
      combinedProjects.push(defProj);
    }
  }

  return <AdminDashboardClient initialProjects={combinedProjects} />;
}
