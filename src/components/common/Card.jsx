import React from 'react';

const Card = ({ children, className = '', hover = false, ...props }) => {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-gray-100';
  const hoverStyles = hover ? 'transition-all duration-200 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

