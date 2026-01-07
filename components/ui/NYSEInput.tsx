import React from 'react';

interface NYSEInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  success?: string;
  disabled?: boolean;
  loading?: boolean;
  required?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  name?: string;
}

export const NYSEInput: React.FC<NYSEInputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  success,
  disabled = false,
  loading = false,
  required = false,
  className = '',
  style = {},
  id,
  name
}) => {
  const inputId = id || name || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'nyse-input';
  const errorClasses = error ? 'nyse-input-error' : '';
  const successClasses = success ? 'nyse-success-border' : '';
  const loadingClasses = loading ? 'opacity-75' : '';

  const combinedClasses = [
    baseClasses,
    errorClasses,
    successClasses,
    loadingClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block mb-2 text-sm font-semibold text-gray-700 uppercase tracking-wide"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled || loading}
          required={required}
          className={combinedClasses}
          style={style}
        />

        {loading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <span className="nyse-loading" />
          </div>
        )}
      </div>

      {error && (
        <div className="nyse-error mt-1">
          {error}
        </div>
      )}

      {success && (
        <div className="nyse-success mt-1">
          {success}
        </div>
      )}
    </div>
  );
};

export default NYSEInput;
