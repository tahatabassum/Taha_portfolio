import React from 'react';
import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Project } from '@prisma/client';
import AdminDashboardClient from './AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authenticated = isAdminAuthenticated();

  if (!authenticated) {
    redirect('/admin/login');
  }

  let projects: Project[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    console.error('Database query error on /admin page:', error);
  }

  return <AdminDashboardClient initialProjects={projects} />;
}
