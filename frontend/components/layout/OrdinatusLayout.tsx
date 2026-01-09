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

                {/* Social Links */}
                <div className="flex justify-center items-center space-x-6 pt-4 border-t border-gray-800/30 mt-6">
                  <a
                    href="https://github.com/Beginnerinvestorhub/Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevin-ringler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://beginnerinvestorhub.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-semibold"
                  >
                    Live Demo
                  </a>
                </div>
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
