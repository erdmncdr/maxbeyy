import { SelectHTMLAttributes, forwardRef, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  children: ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, fullWidth = false, className = '', children, ...props }, ref) => {
    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <div className={`${widthStyles}`}>
        {label && (
          <label className="block text-sm font-medium text-foreground mb-1">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`px-4 py-2 bg-secondary border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all ${widthStyles} ${className}`}
          {...props}
        >
          {children}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
