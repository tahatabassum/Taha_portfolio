import React from 'react';
import { redirect } from 'next/navigation';
import { isAdminAuthenticated } from '@/lib/auth';
import { getAllProjects } from '@/lib/getProjects';
import AdminDashboardClient from './AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const authenticated = isAdminAuthenticated();

  if (!authenticated) {
    redirect('/admin/login');
  }

  const projects = await getAllProjects();
  return <AdminDashboardClient initialProjects={projects} />;
}
