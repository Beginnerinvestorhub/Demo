import React from 'react';
import PortfolioMonitor from '../components/PortfolioMonitor';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';

export default function PortfolioMonitorPage() {
  return (
    <MechanicaLayout
      title="Portfolio Monitoring Dashboard | BeginnerInvestorHub"
      description="Track your portfolio performance and diversification over time."
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
          <header className="text-center mb-12 relative">
            {/* Decorative Mechanical Gears */}
            <div className="absolute -top-8 left-0">
              <MechanicaGear size="lg" color="steel" speed="slow" />
            </div>
            <div className="absolute -top-4 right-4">
              <MechanicaGear size="md" color="brass" speed="reverse" />
            </div>
            <div className="absolute top-20 right-16">
              <MechanicaGear size="sm" color="copper" speed="medium" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <MechanicaGear size="xl" color="steel" speed="slow" />
              <h1 className="text-4xl md:text-5xl font-bold mechanica-heading-professional text-mechanica-moonlight-blue">
                Portfolio Monitoring Dashboard
              </h1>
              <MechanicaGear size="xl" color="steel" speed="reverse" />
            </div>

            <div className="w-24 h-1 bg-mechanica-polished-brass mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mechanica-text-technical">
              <span className="font-semibold text-mechanica-moonlight-blue">
                Real-Time Assembly Monitor:
              </span>{' '}
              Visualize your portfolio allocation, performance metrics, and
              component details. Deploy alerts and track your investment
              architecture in real time.
            </p>
          </header>

          {/* Dashboard Status Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <MechanicaCard variant="mechanical" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-green-600 mr-2">✓</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">
                System Operational
              </span>
            </MechanicaCard>
            <MechanicaCard variant="default" className="inline-flex items-center px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">
                Live Data Stream
              </span>
            </MechanicaCard>
            <MechanicaCard variant="wood" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-mechanica-polished-brass mr-2">🔒</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">
                Secure Connection
              </span>
            </MechanicaCard>
          </div>

          {/* Main Dashboard Card */}
          <MechanicaCard variant="default" animated>
            <div className="p-8">
              {/* Dashboard Header */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <MechanicaGear size="md" color="brass" speed="slow" />
                      <h2 className="text-2xl font-bold mechanica-heading-professional text-white">
                        ⚙️ Component Assembly Status
                      </h2>
                    </div>
                    <p className="text-blue-100 mechanica-text-technical">
                      Monitor all portfolio components and performance metrics in
                      your investment mechanism.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-100">
                    <MechanicaGear size="sm" color="steel" speed="medium" />
                    <span className="mechanica-text-technical">Updated in real-time</span>
                  </div>
                </div>
              </div>

              {/* Portfolio Monitor Component */}
              <PortfolioMonitor />
            </div>
          </MechanicaCard>

          {/* Technical Specifications Footer */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <MechanicaCard variant="default" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <MechanicaGear size="lg" color="steel" speed="medium" />
                </div>
                <div className="text-lg font-bold mechanica-heading-professional text-mechanica-moonlight-blue mb-2">
                  📊 Real-Time Analytics
                </div>
                <div className="text-sm text-gray-600 mechanica-text-technical">
                  Performance tracking engine
                </div>
              </div>
            </MechanicaCard>
            <MechanicaCard variant="wood" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <MechanicaGear size="lg" color="brass" speed="slow" />
                </div>
                <div className="text-lg font-bold mechanica-heading-professional text-mechanica-moonlight-blue mb-2">
                  🔔 Alert Mechanisms
                </div>
                <div className="text-sm text-gray-600 mechanica-text-technical">
                  Automated notification system
                </div>
              </div>
            </MechanicaCard>
            <MechanicaCard variant="mechanical" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <MechanicaGear size="lg" color="copper" speed="reverse" />
                </div>
                <div className="text-lg font-bold mechanica-heading-professional text-mechanica-moonlight-blue mb-2">
                  🔧 Precision Engineering
                </div>
                <div className="text-sm text-gray-600 mechanica-text-technical">
                  Enterprise-grade accuracy
                </div>
              </div>
            </MechanicaCard>
          </div>
        </div>
      </div>
    </MechanicaLayout>
  );
}
