import React from 'react';
import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import AdminDashboardClient from './AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authenticated = isAdminAuthenticated();

  if (!authenticated) {
    redirect('/admin/login');
  }

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return <AdminDashboardClient initialProjects={projects} />;
}
