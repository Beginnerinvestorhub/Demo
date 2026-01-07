import React from 'react';

interface NYSEGearProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'steel' | 'brass' | 'copper' | 'iron';
  speed?: 'slow' | 'medium' | 'fast' | 'reverse' | 'none';
  teeth?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const NYSEGear: React.FC<NYSEGearProps> = ({
  size = 'md',
  color = 'steel',
  speed = 'none',
  teeth = 8,
  className = '',
  style = {}
}) => {
  const generateTeeth = () => {
    return Array.from({ length: teeth }, (_, i) => {
      const angle = (360 / teeth) * i;
      return (
        <div
          key={i}
          className="absolute w-full h-full"
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: 'center'
          }}
        >
          <div
            className="absolute bg-current"
            style={{
              width: '20%',
              height: '3px',
              top: '-1.5px',
              left: '40%',
              opacity: 0.8
            }}
          />
        </div>
      );
    });
  };

  const speedClasses = {
    none: '',
    slow: 'nyse-rotate-slow',
    medium: 'nyse-rotate-medium',
    fast: 'nyse-rotate-fast',
    reverse: 'nyse-rotate-reverse'
  };

  return (
    <div
      className={`
        nyse-gear 
        nyse-gear-${size} 
        nyse-gear-${color}
        ${speedClasses[speed]}
        ${className}
      `}
      style={style}
    >
      {/* Center bearing */}
      <div
        className="absolute rounded-full"
        style={{
          width: '30%',
          height: '30%',
          top: '35%',
          left: '35%',
          background: 'var(--nyse-bearing-dark)',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
        }}
      />
      
      {/* Gear teeth */}
      {generateTeeth()}
      
      {/* Mechanical details */}
      <div
        className="absolute rounded-full border"
        style={{
          width: '60%',
          height: '60%',
          top: '20%',
          left: '20%',
          borderColor: 'rgba(31, 45, 56, 0.3)',
          borderStyle: 'dashed',
          borderWidth: '1px'
        }}
      />
    </div>
  );
};

export default NYSEGear;
