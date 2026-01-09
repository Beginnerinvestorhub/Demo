import React from 'react';

interface mechanicaGearProps {
  size?: 'mini' | 'small' | 'medium' | 'large' | 'xl';
  color?: 'steel' | 'brass' | 'copper' | 'iron';
  speed?: 'slow' | 'medium' | 'fast' | 'reverse';
  teeth?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const mechanicaGear: React.FC<mechanicaGearProps> = ({
  size = 'medium',
  color = 'steel',
  speed = 'medium',
  teeth = 8,
  className = '',
  style = {}
}) => {
  const sizeMap = {
    mini: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '3rem',
    xl: '4rem'
  };

  const colorMap = {
    steel: 'linear-gradient(135deg, #8B8D8E 0%, #B8B8B8 50%, #8B8D8E 100%)',
    brass: 'linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)',
    copper: 'linear-gradient(135deg, #B87333 0%, #CD7F32 50%, #B87333 100%)',
    iron: 'linear-gradient(135deg, #434B4D 0%, #6C757D 50%, #434B4D 100%)'
  };

  const speedMap = {
    slow: 'mechanica-rotate-slow',
    medium: 'mechanica-rotate-medium',
    fast: 'mechanica-rotate-fast',
    reverse: 'mechanica-rotate-reverse'
  };

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
              height: '4px',
              top: '-2px',
              left: '40%',
              background: colorMap[color]
            }}
          />
        </div>
      );
    });
  };

  return (
    <div
      className={`mechanica-gear ${speedMap[speed]} ${className}`}
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        background: colorMap[color],
        boxShadow: '0 4px 8px rgba(31, 45, 56, 0.3), 0 2px 4px rgba(31, 45, 56, 0.2)',
        ...style
      }}
    >
      {/* Center bearing */}
      <div
        className="absolute rounded-full"
        style={{
          width: '30%',
          height: '30%',
          top: '35%',
          left: '35%',
          background: '#1C2833',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
        }}
      />
      
      {/* Gear teeth */}
      {generateTeeth()}
      
      {/* Mechanical details */}
      <div
        className="absolute rounded-full border-2"
        style={{
          width: '60%',
          height: '60%',
          top: '20%',
          left: '20%',
          borderColor: 'rgba(31, 45, 56, 0.3)',
          borderStyle: 'dashed'
        }}
      />
    </div>
  );
};

export default mechanicaGear;
