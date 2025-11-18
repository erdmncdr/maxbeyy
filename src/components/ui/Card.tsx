import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({ children, className = '', hover = false, padding = 'md' }: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-200'
    : '';

  return (
    <div
      className={`bg-card rounded-lg shadow-md border border-border ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
