import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'golden' | 'white' | 'dark' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Base variant classes
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white',
    secondary: 'bg-gray-500 text-white',
    golden: 'bg-[#CDAE64] text-white',
    white: 'bg-white text-gray-900 border border-gray-200',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-black text-white',
  };

  // Gradient overlay classes for sliding animation
  const gradientOverlays = {
    primary: 'before:bg-gradient-to-r before:from-blue-600 before:to-purple-700',
    secondary: 'before:bg-gradient-to-r before:from-gray-600 before:to-gray-700',
    golden: 'before:bg-gradient-to-r before:from-[#B89952] before:to-[#A38948]',
    white: 'before:bg-gradient-to-r before:from-gray-100 before:to-gray-200',
    dark: 'before:bg-gradient-to-r before:from-gray-800 before:to-gray-900',
    gradient: 'before:bg-gradient-to-r before:from-blue-500 before:to-purple-600',
  };

  return (
 <button
  type={type}
  onClick={onClick}
  disabled={disabled}
  className={`
    relative overflow-hidden
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    rounded-lg font-semibold
    transition-all duration-300 ease-in-out
    
    /* Gradient overlay */
    before:absolute before:top-0 before:left-0 before:w-full before:h-full
    ${gradientOverlays[variant]}
    before:transform
    before:transition-transform before:duration-500 before:ease-out
    before:translate-x-[-100%]
    
    /* Hover - gradient slides in from left to right */
    hover:before:translate-x-0
    
    ${className}
  `}
>
  <span className="relative z-10 transition-colors duration-300">
    {children}
  </span>
</button>
  );
};

export default AnimatedButton;