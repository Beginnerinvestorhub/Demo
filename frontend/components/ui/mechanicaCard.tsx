import React from 'react';

interface MechanicaCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light';
}

export const mechanicaCard: React.FC<MechanicaCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'rounded-lg shadow-lg p-6 transition-all duration-200';
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    dark: 'bg-gray-800 border border-gray-700 text-white',
    light: 'bg-gray-50 border border-gray-300'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
