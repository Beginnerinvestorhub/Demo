import React from 'react';
import { mechanicaGear } from './mechanicaGear';

interface mechanicaCardProps {
  variant?: 'mechanical' | 'wood' | 'brass' | 'steel';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  gearDecoration?: boolean;
}

export const mechanicaCard: React.FC<mechanicaCardProps> = ({
  variant = 'mechanical',
  children,
  className = '',
  style = {},
  animated = false,
  gearDecoration = true
}) => {
  const baseClasses = 'relative overflow-hidden';
  
  const variantClasses = {
    mechanical: 'mechanica-card-mechanical',
    wood: 'mechanica-card-wood',
    brass: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-600 rounded-lg shadow-lg',
    steel: 'bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-600 rounded-lg shadow-lg'
  };

  const animationClass = animated ? 'mechanica-transition-bounce' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClass} ${className}`}
      style={style}
    >
      {/* Top metallic strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600" />
      
      {/* Gear decorations */}
      {gearDecoration && (
        <>
          <div className="absolute top-2 right-2 opacity-20">
            <mechanicaGear size="mini" color="brass" speed="slow" />
          </div>
          <div className="absolute bottom-2 left-2 opacity-20">
            <mechanicaGear size="mini" color="steel" speed="reverse" />
          </div>
        </>
      )}

      {/* Wood grain effect for wood variant */}
      {variant === 'wood' && (
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-amber-200 via-amber-100 to-amber-200" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-300 to-transparent opacity-50" />
        </div>
      )}

      {/* Mechanical texture overlay */}
      {variant === 'mechanical' && (
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(31, 45, 56, 0.1) 10px, rgba(31, 45, 56, 0.1) 20px),
                repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(31, 45, 56, 0.05) 10px, rgba(31, 45, 56, 0.05) 20px)
              `
            }}
          />
        </div>
      )}

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default mechanicaCard;
