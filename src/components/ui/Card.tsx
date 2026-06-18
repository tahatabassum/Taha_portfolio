import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  hoverEffect = true,
  className = '',
  ...props
}) => {
  return (
    <div 
      className={`rounded-lg bg-zinc-900 border border-zinc-800 p-6 ${
        hoverEffect ? 'hover:border-zinc-700 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
