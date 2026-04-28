import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#0052FF] text-white hover:bg-[#0044DD] active:bg-[#0033AA]',
    secondary: 'bg-[#F9FAFB] text-[#0A0B0D] hover:bg-[#E5E7EB] active:bg-[#D1D5DB]',
    outline: 'border-2 border-[#0052FF] text-[#0052FF] hover:bg-[#0052FF] hover:text-white',
    ghost: 'text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#0A0B0D]',
    danger: 'bg-[#EA4335] text-white hover:bg-[#D33426]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

