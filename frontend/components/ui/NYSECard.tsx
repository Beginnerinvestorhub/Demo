import React from 'react';

interface OrdinatusCardProps {
  variant?: 'default' | 'wood' | 'metallic' | 'professional';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  hover?: boolean;
}

export const OrdinatusCard: React.FC<OrdinatusCardProps> = ({
  variant = 'default',
  children,
  className = '',
  style = {},
  animated = false,
  hover = true
}) => {
  const baseClasses = 'Ordinatus-card';
  
  const variantClasses = {
    default: '',
    wood: 'Ordinatus-card-wood',
    metallic: 'Ordinatus-card-metallic',
    professional: 'Ordinatus-card-professional'
  };

  const animatedClasses = animated ? 'Ordinatus-shimmer' : '';
  const hoverClasses = hover ? '' : 'hover:transform-none';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    animatedClasses,
    hoverClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={combinedClasses}
      style={style}
    >
      {children}
    </div>
  );
};

export default OrdinatusCard;
