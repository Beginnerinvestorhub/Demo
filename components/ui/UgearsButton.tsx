import React from 'react';
import { UgearsGear } from './UgearsGear';

interface UgearsButtonProps {
  variant?: 'mechanical' | 'wood' | 'brass' | 'steel';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const UgearsButton: React.FC<UgearsButtonProps> = ({
  variant = 'mechanical',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  className = '',
  style = {}
}) => {
  const baseClasses = 'ugears-transition-smooth relative overflow-hidden';
  
  const variantClasses = {
    mechanical: 'ugears-button-mechanical',
    wood: 'ugears-button-wood',
    brass: 'bg-gradient-to-r from-yellow-600 to-yellow-700 text-white border-2 border-yellow-800',
    steel: 'bg-gradient-to-r from-gray-600 to-gray-700 text-white border-2 border-gray-800'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
    >
      {/* Mechanical background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12" />
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <UgearsGear size="mini" color="steel" speed="fast" />
        </div>
      )}

      {/* Icon */}
      {icon && !loading && (
        <div className="flex items-center mr-2">
          {icon}
        </div>
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-300 transform -skew-x-12" />
    </button>
  );
};

export default UgearsButton;
