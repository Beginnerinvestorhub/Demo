import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { OrdinatusGear } from '../ui/OrdinatusGear';

interface OrdinatusLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export const OrdinatusLayout: React.FC<OrdinatusLayoutProps> = ({
  children,
  title = 'Beginner Investor Hub',
  description = 'Master investing with precision-engineered tools and professional Ordinatus standards',
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


        {/* Google Fonts are loaded in _document.tsx */}

        {/* Design system CSS */}

        {/* Design system CSS - Managed via _app.tsx */}
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-white via-gray-50 to-amber-50 ${className}`}>
        {/* Professional background pattern */}
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
          <OrdinatusGear size="xl" color="steel" speed="slow" />
        </div>
        <div className="fixed top-4 right-4 pointer-events-none opacity-20 z-10">
          <OrdinatusGear size="lg" color="brass" speed="reverse" />
        </div>
        <div className="fixed bottom-4 left-4 pointer-events-none opacity-20 z-10">
          <OrdinatusGear size="md" color="copper" speed="medium" />
        </div>
        <div className="fixed bottom-4 right-4 pointer-events-none opacity-20 z-10">
          <OrdinatusGear size="sm" color="steel" speed="fast" />
        </div>

        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Professional footer */}
        <footer className="Ordinatus-footer">
          <div className="Ordinatus-container">
            <div className="Ordinatus-footer-content">
              <div className="text-center space-y-6">
                {/* Professional logo */}
                <div className="flex justify-center items-center space-x-4">
                  <OrdinatusGear size="md" color="brass" speed="slow" />
                  <div className="text-2xl font-bold Ordinatus-heading-primary text-yellow-500">
                    BeginnerInvestorHub
                  </div>
                  <OrdinatusGear size="md" color="brass" speed="reverse" />
                </div>

                {/* Footer text */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-300">
                    © {currentYear || 2024} BeginnerInvestorHub.com
                  </p>
                  <p className="text-sm text-gray-400">
                    Precision-engineered investment education with Ordinatus professional standards
                  </p>
                  <p className="text-xs text-gray-500">
                    Raleigh, North Carolina | Not investment advice. For educational purposes only.
                  </p>
                </div>

                {/* Footer links */}
                <nav className="flex flex-wrap justify-center items-center space-x-6 text-sm">
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 Ordinatus-text-technical"
                  >
                    Privacy Policy
                  </Link>
                  <span className="text-gray-600">•</span>
                  <Link
                    href="/terms"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 Ordinatus-text-technical"
                  >
                    Terms of Service
                  </Link>
                  <span className="text-gray-600">•</span>
                  <Link
                    href="/dashboard"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 Ordinatus-text-technical"
                  >
                    Dashboard
                  </Link>
                  <span className="text-gray-600">•</span>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 Ordinatus-text-technical"
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Professional decorative elements */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OrdinatusLayout;
