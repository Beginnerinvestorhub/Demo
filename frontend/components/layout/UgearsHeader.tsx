import React from 'react';
import Link from 'next/link';
import { MechanicaGear } from '../ui/mechanicaGear';

interface mechanicaHeaderProps {
  showBackButton?: boolean;
  title?: string;
  subtitle?: string;
}

export const mechanicaHeader: React.FC<mechanicaHeaderProps> = ({
  showBackButton = false,
  title,
  subtitle
}) => {
  // router removed

  return (
    <header className="relative bg-gradient-to-br from-mechanica-moonlight-blue via-mechanica-moonlight-blue-light to-mechanica-moonlight-blue-dark text-white overflow-hidden">
      {/* Mechanical background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.1) 20px, rgba(255, 255, 255, 0.1) 40px),
              repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255, 255, 255, 0.05) 20px, rgba(255, 255, 255, 0.05) 40px)
            `
          }}
        />
      </div>

      {/* Decorative gears */}
      <div className="absolute top-4 left-4 opacity-20">
        <MechanicaGear size="large" color="brass" speed="slow" />
      </div>
      <div className="absolute top-8 right-8 opacity-20">
        <MechanicaGear size="medium" color="steel" speed="reverse" />
      </div>
      <div className="absolute bottom-4 right-4 opacity-20">
        <MechanicaGear size="small" color="copper" speed="medium" />
      </div>

      {/* Login Button */}
      <div className="absolute top-6 right-6 z-20">
        <Link href="/login" className="px-6 py-2 bg-yellow-500 text-gray-900 font-bold rounded hover:bg-yellow-400 transition-colors shadow-lg border-2 border-yellow-600 font-mono">
          LOGIN
        </Link>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back button */}
        {showBackButton && (
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-yellow-300 transition-colors duration-300 font-mono text-sm uppercase tracking-wide"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
          </div>
        )}

        {/* Header content */}
        <div className="text-center">
          {title && (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
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

        {/* Mechanical decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      </div>
    </header>
  );
};

export default mechanicaHeader;
