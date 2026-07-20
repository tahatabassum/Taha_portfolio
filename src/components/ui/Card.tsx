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
      className={`rounded-xl bg-white border border-slate-200 p-6 shadow-sm ${
        hoverEffect ? 'hover:border-slate-300 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
