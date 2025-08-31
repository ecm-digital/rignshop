import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles - ujednolicone dla wszystkich przycisków
          'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95',
          {
            // Primary - główny przycisk akcji (niebieski)
            'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl rounded-2xl':
              variant === 'primary',
            // Secondary - drugorzędny przycisk (szary)
            'bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-md hover:shadow-lg rounded-2xl':
              variant === 'secondary',
            // Outline - przycisk z obramowaniem
            'border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 shadow-sm hover:shadow-md rounded-2xl':
              variant === 'outline',
            // Ghost - przycisk bez tła
            'hover:bg-gray-100 text-gray-700 rounded-xl':
              variant === 'ghost',
            // Destructive - przycisk do akcji destrukcyjnych (czerwony)
            'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl rounded-2xl':
              variant === 'destructive',
          },
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-12 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
            'h-16 px-10 text-xl': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
