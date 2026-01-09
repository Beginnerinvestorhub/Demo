import React from 'react';

interface OrdinatusButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export const OrdinatusButton: React.FC<OrdinatusButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  href,
  className = '',
  style = {},
  type = 'button'
}) => {
  const baseClasses = 'Ordinatus-button';
  
  const variantClasses = {
    primary: 'Ordinatus-button-primary',
    secondary: 'Ordinatus-button-secondary',
    accent: 'Ordinatus-button-accent',
    outline: 'Ordinatus-button-outline'
  };

  const sizeClasses = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-4 py-3',
    lg: 'text-base px-6 py-4'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const loadingClasses = loading ? 'opacity-75 cursor-wait' : '';

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    loadingClasses,
    className
  ].filter(Boolean).join(' ');

  const buttonContent = (
    <>
      {loading && (
        <span className="Ordinatus-loading mr-2" />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={combinedClasses}
        style={style}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
    >
      {buttonContent}
    </button>
  );
};

export default OrdinatusButton;
