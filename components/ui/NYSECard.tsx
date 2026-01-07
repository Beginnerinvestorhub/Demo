import React from 'react';

interface NYSECardProps {
  variant?: 'default' | 'wood' | 'metallic' | 'professional';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animated?: boolean;
  hover?: boolean;
}

export const NYSECard: React.FC<NYSECardProps> = ({
  variant = 'default',
  children,
  className = '',
  style = {},
  animated = false,
  hover = true
}) => {
  const baseClasses = 'nyse-card';
  
  const variantClasses = {
    default: '',
    wood: 'nyse-card-wood',
    metallic: 'nyse-card-metallic',
    professional: 'nyse-card-professional'
  };

  const animatedClasses = animated ? 'nyse-shimmer' : '';
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

export default NYSECard;
