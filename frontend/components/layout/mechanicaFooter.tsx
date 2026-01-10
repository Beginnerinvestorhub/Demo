import React from 'react';
import Link from 'next/link';
import { MechanicaGear } from '../ui/mechanicaGear';

export const MechanicaFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-t border-gray-700">
      {/* Mechanical background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255, 255, 255, 0.1) 30px, rgba(255, 255, 255, 0.1) 60px),
              repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255, 255, 255, 0.05) 30px, rgba(255, 255, 255, 0.05) 60px)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center space-x-3 mb-4">
              <MechanicaGear size="md" color="brass" speed="slow" />
              <h3 className="text-lg font-bold font-serif text-yellow-400">
                BeginnerInvestorHub
              </h3>
              <MechanicaGear size="md" color="brass" speed="reverse" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Precision investment education with engineering-grade tools and structured learning paths.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold font-serif text-yellow-400 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="/tools" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Investment Tools
              </Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Dashboard
              </Link>
              <Link href="/signup" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Get Started
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold font-serif text-yellow-400 mb-4">
              Legal & Support
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <MechanicaGear size="sm" color="steel" speed="medium" />
              <p className="text-gray-400 text-sm">
                © 2024 BeginnerInvestorHub. All rights reserved.
              </p>
              <MechanicaGear size="sm" color="steel" speed="reverse" />
            </div>
            
            {/* Evenly spaced legal links */}
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <Link 
                href="/terms" 
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Terms
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                href="/privacy" 
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Privacy
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                href="/contact" 
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
