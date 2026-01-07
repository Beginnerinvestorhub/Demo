import React from 'react';
import Link from 'next/link';
import { NYSEGear } from '../ui/NYSEGear';

interface NYSEHeaderProps {
  showBackButton?: boolean;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const NYSEHeader: React.FC<NYSEHeaderProps> = ({
  showBackButton = false,
  title,
  subtitle,
  className = ''
}) => {
  return (
    <header className={`nyse-header ${className}`}>
      <div className="nyse-container">
        <div className="nyse-header-content">
          {/* Back button */}
          {showBackButton && (
            <div className="mb-6">
              <Link 
                href="/"
                className="inline-flex items-center text-white hover:text-yellow-300 transition-colors duration-300 nyse-text-technical"
              >
                <span className="mr-2">←</span>
                Back to Home
              </Link>
            </div>
          )}

          {/* Header content */}
          <div className="text-center">
            {title && (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 nyse-heading-primary text-white">
                <span className="relative inline-block">
                  {title}
                  <span className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full" />
                </span>
              </h1>
            )}
            
            {subtitle && (
              <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {/* Professional decorative elements */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <NYSEGear size="lg" color="brass" speed="slow" />
            <NYSEGear size="md" color="steel" speed="reverse" />
            <NYSEGear size="sm" color="copper" speed="medium" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NYSEHeader;
