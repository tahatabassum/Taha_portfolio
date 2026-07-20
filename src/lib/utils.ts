import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTechStack(techStack: string | string[]): string[] {
  if (Array.isArray(techStack)) return techStack;
  if (!techStack) return [];
  try {
    const parsed = JSON.parse(techStack);
    if (Array.isArray(parsed)) return parsed;
  } catch {
    // Fallback if comma-separated
    return techStack.split(',').map((s) => s.trim()).filter(Boolean);
  }
  return [techStack];
}
