import React from 'react';

interface MechanicaCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light' | 'mechanical' | 'wood' | 'brass';
  animated?: boolean;
  gearDecoration?: boolean;
}

export const MechanicaCard: React.FC<MechanicaCardProps> = ({
  children,
  className = '',
  variant = 'default',
  animated = false,
  gearDecoration = false
}) => {
  const baseClasses = 'rounded-lg shadow-lg p-6 transition-all duration-200';
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    dark: 'bg-gray-800 border border-gray-700 text-white',
    light: 'bg-gray-50 border border-gray-300',
    mechanical: 'mechanica-card-mechanical',
    wood: 'mechanica-card-wood',
    brass: 'mechanica-card-brass'
  };

  const animationClass = animated ? 'hover:scale-[1.02] hover:shadow-xl' : '';

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${animationClass} ${className} relative`}>
      {gearDecoration && (
        <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
          {/* Simple gear icon or similar */}
          ⚙️
        </div>
      )}
      {children}
    </div>
  );
};
