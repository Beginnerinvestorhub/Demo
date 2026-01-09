import React, { useState } from 'react';
import { mechanicaGear } from './mechanicaGear';

interface mechanicaInputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'mechanical' | 'wood' | 'brass';
  className?: string;
  style?: React.CSSProperties;
}

export const mechanicaInput: React.FC<mechanicaInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  disabled = false,
  loading = false,
  variant = 'mechanical',
  className = '',
  style = {}
}) => {
  const [focused, setFocused] = useState(false);

  const baseClasses = 'relative';
  
  const variantClasses = {
    mechanical: 'mechanica-input-mechanical',
    wood: 'bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-600 rounded-lg',
    brass: 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-600 rounded-lg'
  };

  const focusClasses = focused ? 'ring-2 ring-yellow-400 ring-opacity-50' : '';

  return (
    <div className={`${baseClasses} ${className}`} style={style}>
      {label && (
        <label className="block mb-2 font-mono text-sm font-semibold text-gray-700 uppercase tracking-wide">
          {label}
        </label>
      )}
      
      <div className="relative">
        {/* Input field */}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled || loading}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full px-4 py-3 pr-12 ${variantClasses[variant]} ${focusClasses} transition-all duration-300`}
          style={{
            fontFamily: 'var(--mechanica-font-technical)',
            backgroundColor: variant === 'mechanical' ? 'white' : undefined,
            borderColor: error ? '#DC2626' : focused ? 'var(--mechanica-brushed-copper)' : undefined
          }}
        />

        {/* Loading indicator */}
        {loading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <mechanicaGear size="mini" color="steel" speed="fast" />
          </div>
        )}

        {/* Mechanical decoration */}
        {!loading && variant === 'mechanical' && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full" />
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-1 flex items-center text-sm text-red-600">
          <div className="w-3 h-3 border-2 border-red-600 rounded-full mr-2" />
          {error}
        </div>
      )}

      {/* Focus indicator */}
      {focused && variant === 'mechanical' && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full" />
      )}
    </div>
  );
};

export default mechanicaInput;
