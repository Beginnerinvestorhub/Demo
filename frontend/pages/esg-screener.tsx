import React from 'react';
import ESGScreener from '../components/ESGScreener';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';

export default function ESGScreenerPage() {
  return (
    <MechanicaLayout
      title="ESG/SRI Screener | BeginnerInvestorHub"
      description="Screen investments for environmental, social, and governance factors."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
        {/* Technical Grid Overlay - Blueprint Pattern */}
        <div
          className="fixed inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 61, 122, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 61, 122, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 py-12">
          {/* Hero Section with Mechanical Elements */}
          <div className="text-center mb-12 relative">
            {/* Decorative Mechanical Gears */}
            <div className="absolute -top-6 left-4">
              <MechanicaGear size="lg" color="steel" speed="slow" />
            </div>
            <div className="absolute top-2 right-8">
              <MechanicaGear size="md" color="brass" speed="reverse" />
            </div>
            <div className="absolute top-20 right-0">
              <MechanicaGear size="sm" color="copper" speed="medium" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <MechanicaGear size="xl" color="steel" speed="slow" />
              <h1 className="text-4xl md:text-5xl font-bold mechanica-heading-professional text-mechanica-moonlight-blue">
                ESG/SRI Screener
              </h1>
              <MechanicaGear size="xl" color="steel" speed="reverse" />
            </div>

            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mechanica-text-technical">
              <span className="font-semibold text-mechanica-moonlight-blue">
                Sustainable Investment Filter:
              </span>{' '}
              Screen and construct portfolios using Environmental, Social, and
              Governance criteria. Detect component integrity issues, sector
              classifications, and risk indicators with precision engineering.
            </p>
          </div>

          {/* ESG Criteria Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <MechanicaCard variant="default" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-green-600 mr-2">🌍</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">
                Environmental
              </span>
            </MechanicaCard>
            <MechanicaCard variant="mechanical" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-mechanica-moonlight-blue mr-2">👥</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">Social</span>
            </MechanicaCard>
            <MechanicaCard variant="wood" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-mechanica-polished-brass mr-2">🏛️</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">
                Governance
              </span>
            </MechanicaCard>
            <MechanicaCard variant="default" className="inline-flex items-center px-4 py-2 bg-gray-800 border-gray-700">
              <div className="w-5 h-5 text-white mr-2">⚠️</div>
              <span className="text-sm text-white font-medium mechanica-text-technical">
                Risk Detection
              </span>
            </MechanicaCard>
          </div>

          {/* Main Screener Card */}
          <MechanicaCard variant="default" animated className="bg-gray-900 border-gray-800">
            <div className="p-8">
              {/* Screener Header */}
              <div className="mb-8 pb-6 border-b border-gray-700">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <MechanicaGear size="md" color="brass" speed="slow" />
                      <h2 className="text-2xl font-bold mechanica-heading-professional text-white">
                        🔍 Component Integrity Scanner
                      </h2>
                    </div>
                    <p className="text-blue-100 mechanica-text-technical">
                      Configure sustainability filters to screen investment
                      components and detect greenwashing mechanisms.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-900/30 border border-green-500/30 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-medium mechanica-text-technical">
                      Real-Time Screening
                    </span>
                  </div>
                </div>
              </div>

              {/* ESG Screener Component */}
              <ESGScreener />
            </div>
          </MechanicaCard>

          {/* Screening Methodology - Assembly Process */}
          <MechanicaCard variant="wood" animated className="mt-12 bg-gradient-to-br from-green-50 to-white">
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MechanicaGear size="md" color="steel" speed="medium" />
                  <h3 className="text-xl font-bold mechanica-heading-professional text-mechanica-moonlight-blue">
                    📐 Screening Methodology
                  </h3>
                </div>
                <p className="text-gray-600 mechanica-text-technical">
                  Our multi-stage verification process ensures component
                  authenticity:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Filter Criteria
                  </div>
                  <p className="text-sm text-gray-600 mechanica-text-technical">
                    Apply ESG parameters and sector specifications to component
                    database.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-mechanica-moonlight-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Integrity Test
                  </div>
                  <p className="text-sm text-gray-600 mechanica-text-technical">
                    Scan for red flags, greenwashing indicators, and risk
                    anomalies.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Visualize Data
                  </div>
                  <p className="text-sm text-gray-600 mechanica-text-technical">
                    Generate technical blueprints and performance visualizations.
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    Deploy Results
                  </div>
                  <p className="text-sm text-gray-600 mechanica-text-technical">
                    Export validated components for portfolio construction.
                  </p>
                </div>
              </div>
            </div>
          </MechanicaCard>

          {/* Key Features Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <MechanicaCard variant="default" animated>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 text-green-700">✓</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 mechanica-heading-professional">
                      Greenwashing Detection
                    </h3>
                    <p className="text-sm text-gray-600 mechanica-text-technical">
                      Advanced algorithms identify misleading sustainability
                      claims and verify authentic ESG commitments.
                    </p>
                  </div>
                </div>
              </div>
            </MechanicaCard>

            <MechanicaCard variant="mechanical" animated>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MechanicaGear size="md" color="steel" speed="fast" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 mechanica-heading-professional">
                      Real-Time Scanning
                    </h3>
                    <p className="text-sm text-gray-600 mechanica-text-technical">
                      Continuously monitor securities against the latest ESG
                      standards and regulatory frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </MechanicaCard>

            <MechanicaCard variant="wood" animated>
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MechanicaGear size="md" color="brass" speed="medium" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 mechanica-heading-professional">
                      Sector Intelligence
                    </h3>
                    <p className="text-sm text-gray-600 mechanica-text-technical">
                      Cross-reference sector classifications with risk profiles
                      for comprehensive due diligence.
                    </p>
                  </div>
                </div>
              </div>
            </MechanicaCard>
          </div>

          {/* Technical Specifications Footer */}
          <div className="mt-12 text-center">
            <MechanicaCard variant="default" className="inline-flex items-center px-6 py-3 bg-gray-800 border-gray-700">
              <div className="flex items-center space-x-3">
                <MechanicaGear size="sm" color="steel" speed="medium" />
                <span className="text-sm text-white font-medium mechanica-text-technical">
                  All ESG data verified against MSCI, Sustainalytics, and regulatory disclosure standards
                </span>
              </div>
            </MechanicaCard>
          </div>
        </div>
      </div>
    </MechanicaLayout>
  );
}
