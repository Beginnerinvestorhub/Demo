import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { UgearsGear } from '../ui/UgearsGear';

interface UgearsLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const UgearsLayout: React.FC<UgearsLayoutProps> = ({
  children,
  title = 'Beginner Investor Hub',
  description = 'Master investing with precision-engineered tools and mechanical beauty',
  className = ''
}) => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Source+Code+Pro:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Design system CSS */}

        {/* Design system CSS is imported globally in _app.tsx */}
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 ${className}`}>
        {/* Mechanical background elements */}
        <div className="fixed inset-0 pointer-events-none opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(79, 115, 142, 0.3) 50px, rgba(79, 115, 142, 0.3) 51px),
                repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(79, 115, 142, 0.3) 50px, rgba(79, 115, 142, 0.3) 51px)
              `
            }}
          />
        </div>

        {/* Decorative corner gears */}
        <div className="fixed top-4 left-4 pointer-events-none opacity-20 z-10">
          <UgearsGear size="xl" color="steel" speed="slow" />
        </div>
        <div className="fixed top-4 right-4 pointer-events-none opacity-20 z-10">
          <UgearsGear size="large" color="brass" speed="reverse" />
        </div>
        <div className="fixed bottom-4 left-4 pointer-events-none opacity-20 z-10">
          <UgearsGear size="medium" color="copper" speed="medium" />
        </div>
        <div className="fixed bottom-4 right-4 pointer-events-none opacity-20 z-10">
          <UgearsGear size="small" color="steel" speed="fast" />
        </div>

        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Mechanical footer */}
        <footer className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white mt-16 overflow-hidden">
          {/* Mechanical background pattern */}
          <div className="absolute inset-0 opacity-10">
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

          {/* Footer content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center space-y-6">
              {/* Mechanical logo */}
              <div className="flex justify-center items-center space-x-4">
                <UgearsGear size="medium" color="brass" speed="slow" />
                <div className="text-2xl font-bold font-serif text-yellow-500">
                  BeginnerInvestorHub
                </div>
                <UgearsGear size="medium" color="brass" speed="reverse" />
              </div>

              {/* Footer text */}
              <div className="space-y-2">
                <p className="text-sm text-gray-300">
                  © {currentYear || 2024} BeginnerInvestorHub.com
                </p>
                <p className="text-sm text-gray-400">
                  Precision-engineered investment education with mechanical beauty
                </p>
                <p className="text-xs text-gray-500">
                  Raleigh, North Carolina | Not investment advice. For educational purposes only.
                </p>
              </div>

              {/* Footer links */}
              <nav className="flex flex-wrap justify-center items-center space-x-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-mono"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-mono"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-mono"
                >
                  FAQ
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-mono"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Mechanical decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default UgearsLayout;
