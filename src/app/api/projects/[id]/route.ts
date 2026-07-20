import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { isAdminAuthenticated } from '@/lib/auth';
import { deleteInMemoryProject } from '@/lib/inMemoryProjectsStore';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!isAdminAuthenticated()) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = params;

    if (!id || typeof id !== 'string' || id.trim().length === 0 || id.length > 128) {
      return NextResponse.json({ success: false, message: 'Invalid project ID format' }, { status: 400 });
    }

    let deletedFromDb = false;

    try {
      const existing = await prisma.project.findUnique({ where: { id } });
      if (existing) {
        await prisma.project.delete({ where: { id } });
        deletedFromDb = true;
      }
    } catch (e) {
      console.warn('Prisma DB delete failed or not present, checking in-memory store:', e);
    }

    const deletedFromMemory = deleteInMemoryProject(id);

    if (deletedFromDb || deletedFromMemory) {
      return NextResponse.json({ success: true, message: 'Project deleted successfully' });
    }

    return NextResponse.json({ success: false, message: 'Project not found' }, { status: 404 });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete project' }, { status: 500 });
  }
}
