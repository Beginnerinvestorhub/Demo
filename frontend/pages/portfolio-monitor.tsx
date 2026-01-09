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
              <OrdinatusGear size="lg" color="steel" speed="slow" />
            </div>
            <div className="absolute -top-4 right-4">
              <OrdinatusGear size="md" color="brass" speed="reverse" />
            </div>
            <div className="absolute top-20 right-16">
              <OrdinatusGear size="sm" color="copper" speed="medium" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <OrdinatusGear size="xl" color="steel" speed="slow" />
              <h1 className="text-4xl md:text-5xl font-bold Ordinatus-heading-primary text-Ordinatus-moonlight-blue">
                Portfolio Monitoring Dashboard
              </h1>
              <OrdinatusGear size="xl" color="steel" speed="reverse" />
            </div>

            <div className="w-24 h-1 bg-Ordinatus-brass-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed Ordinatus-text-body">
              <span className="font-semibold text-Ordinatus-moonlight-blue">
                Real-Time Assembly Monitor:
              </span>{' '}
              Visualize your portfolio allocation, performance metrics, and
              component details. Deploy alerts and track your investment
              architecture in real time.
            </p>
          </header>

          {/* Dashboard Status Bar */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <OrdinatusCard variant="metallic" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-green-600 mr-2">✓</div>
              <span className="text-sm text-gray-700 font-medium Ordinatus-text-technical">
                System Operational
              </span>
            </OrdinatusCard>
            <OrdinatusCard variant="default" className="inline-flex items-center px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-700 font-medium Ordinatus-text-technical">
                Live Data Stream
              </span>
            </OrdinatusCard>
            <OrdinatusCard variant="wood" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-Ordinatus-brass-gold mr-2">🔒</div>
              <span className="text-sm text-gray-700 font-medium Ordinatus-text-technical">
                Secure Connection
              </span>
            </OrdinatusCard>
          </div>

          {/* Main Dashboard Card */}
          <OrdinatusCard variant="professional" animated>
            <div className="p-8">
              {/* Dashboard Header */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <OrdinatusGear size="md" color="brass" speed="slow" />
                      <h2 className="text-2xl font-bold Ordinatus-heading-secondary text-white">
                        ⚙️ Component Assembly Status
                      </h2>
                    </div>
                    <p className="text-blue-100 Ordinatus-text-body">
                      Monitor all portfolio components and performance metrics in
                      your investment mechanism.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-blue-100">
                    <OrdinatusGear size="sm" color="steel" speed="medium" />
                    <span className="Ordinatus-text-technical">Updated in real-time</span>
                  </div>
                </div>
              </div>

              {/* Portfolio Monitor Component */}
              <PortfolioMonitor />
            </div>
          </OrdinatusCard>

          {/* Technical Specifications Footer */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <OrdinatusCard variant="default" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <OrdinatusGear size="lg" color="steel" speed="medium" />
                </div>
                <div className="text-lg font-bold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue mb-2">
                  📊 Real-Time Analytics
                </div>
                <div className="text-sm text-gray-600 Ordinatus-text-body">
                  Performance tracking engine
                </div>
              </div>
            </OrdinatusCard>
            <OrdinatusCard variant="wood" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <OrdinatusGear size="lg" color="brass" speed="slow" />
                </div>
                <div className="text-lg font-bold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue mb-2">
                  🔔 Alert Mechanisms
                </div>
                <div className="text-sm text-gray-600 Ordinatus-text-body">
                  Automated notification system
                </div>
              </div>
            </OrdinatusCard>
            <OrdinatusCard variant="metallic" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <OrdinatusGear size="lg" color="copper" speed="reverse" />
                </div>
                <div className="text-lg font-bold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue mb-2">
                  🔧 Precision Engineering
                </div>
                <div className="text-sm text-gray-600 Ordinatus-text-body">
                  Enterprise-grade accuracy
                </div>
              </div>
            </OrdinatusCard>
          </div>
        </div>
      </div>
    </OrdinatusLayout>
  );
}
