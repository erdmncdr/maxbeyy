import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-md transition-all duration-200 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-accent hover:bg-accent-hover text-navy-900 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary hover:bg-navy-600 text-foreground',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-navy-900',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
