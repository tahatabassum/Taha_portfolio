import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'indigo' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const baseStyle = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors";
  
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border border-zinc-700",
    accent: "bg-cyan-950/50 text-cyan-400 border border-cyan-800/50 glow-text-cyan",
    indigo: "bg-indigo-950/50 text-indigo-400 border border-indigo-800/50 glow-text-indigo",
    outline: "bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700",
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
