import { ReactNode } from 'react';

interface TagPillProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function TagPill({ children, active = false, onClick, className = '' }: TagPillProps) {
  const activeStyles = active
    ? 'bg-accent text-navy-900'
    : 'bg-secondary text-muted hover:bg-navy-600 hover:text-foreground';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${activeStyles} ${clickableStyles} ${className}`}
    >
      {children}
    </span>
  );
}
