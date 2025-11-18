import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({ children, variant = 'default', size = 'md', className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-navy-700 text-foreground',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-600 text-navy-900',
    info: 'bg-blue-600 text-white',
    accent: 'bg-accent text-navy-900',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
