import React from 'react';
import FractionalShareCalculator from '../components/FractionalShareCalculator';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';

export default function FractionalShareCalculatorPage() {
  return (
    <MechanicaLayout
      title="Fractional Share Calculator | BeginnerInvestorHub"
      description="Calculate how much of a stock you can buy with any amount."
    >
      <div className="min-h-screen bg-gradient-to-br from-mechanica-moonlight-blue via-mechanica-moonlight-blue-light to-mechanica-moonlight-blue-dark text-white overflow-hidden">
        {/* Mechanical background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255, 255, 255, 0.1) 40px, rgba(255, 255, 255, 0.1) 80px),
                repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255, 255, 255, 0.05) 40px, rgba(255, 255, 255, 0.05) 80px)
              `
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section with Mechanical Elements */}
            <div className="text-center mb-12 relative">
            {/* Decorative Mechanical Gears */}
            <div className="absolute -top-6 left-8">
              <MechanicaGear size="lg" color="steel" speed="slow" />
            </div>
            <div className="absolute top-0 right-12">
              <MechanicaGear size="xl" color="brass" speed="reverse" />
            </div>
            <div className="absolute top-16 right-2">
              <MechanicaGear size="md" color="copper" speed="medium" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <MechanicaGear size="xl" color="steel" speed="slow" />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
                <span className="relative inline-block">
                  Fractional Share
                  <span className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full" />
                </span>
                <br />
                <span className="text-yellow-400">Calculator</span>
              </h1>
              <MechanicaGear size="xl" color="steel" speed="reverse" />
            </div>

            <div className="w-24 h-1 bg-mechanica-polished-brass mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-normal">
              <span className="font-semibold text-yellow-400">
                Precision Engineering Tool:
              </span>{' '}
              Enter an investment amount and stock price to construct your
              fractional share assembly. Compare component costs across brokers
              and visualize your calculated purchase blueprint.
            </p>
          </div>

          {/* Calculator Feature Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <MechanicaCard variant="default" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-mechanica-moonlight-blue mr-2">🧮</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">Precision Calculator</span>
            </MechanicaCard>

            <MechanicaCard variant="mechanical" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-green-600 mr-2">💰</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">Broker Comparison</span>
            </MechanicaCard>

            <MechanicaCard variant="wood" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-mechanica-polished-brass mr-2">📊</div>
              <span className="text-sm text-gray-700 font-medium mechanica-text-technical">Visual Analytics</span>
            </MechanicaCard>
          </div>

          {/* Main Calculator Card */}
          <MechanicaCard variant="default" animated className="bg-gray-900 border-gray-800">
            <div className="p-8">
              {/* Calculator Header */}
              <div className="mb-8 pb-6 border-b border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <MechanicaGear size="md" color="brass" speed="slow" />
                  <h2 className="text-2xl font-bold mechanica-heading-professional text-white">
                    🔧 Component Calculation Engine
                  </h2>
                </div>
                <p className="text-blue-100 mechanica-text-technical">
                  Configure your investment parameters below to construct your
                  fractional share specifications.
                </p>
              </div>

              {/* Calculator Component */}
              <FractionalShareCalculator />
            </div>
          </MechanicaCard>

          {/* How It Works - Assembly Instructions */}
          <MechanicaCard variant="wood" animated className="mt-12 bg-gradient-to-br from-blue-50 to-white">
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MechanicaGear size="md" color="steel" speed="medium" />
                  <h3 className="text-xl font-bold mechanica-heading-professional text-mechanica-moonlight-blue">
                    📐 Assembly Instructions
                  </h3>
                </div>
                <p className="text-gray-600 mechanica-text-technical">
                  Follow these steps to construct your fractional share
                  calculation:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-mechanica-moonlight-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div className="font-semibold text-gray-900 mb-1">Input Specifications</div>
                  <p className="text-sm text-gray-600 mechanica-text-technical">
                    Enter your investment amount and target stock price into the
                    calculation engine.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-mechanica-polished-brass text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div className="font-semibold text-gray-900 mb-1">Process Components</div>
                  <p className="text-sm text-gray-600 mechanica-text-technical">
                    System calculates precise fractional shares and compares
                    broker fee structures.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div className="font-semibold text-gray-900 mb-1">Deploy Results</div>
                  <p className="text-sm text-gray-600 mechanica-text-technical">
                    Review visual blueprints and detailed cost analysis for
                    informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </MechanicaCard>

          {/* Technical Specifications Footer */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <MechanicaCard variant="default" animated>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <MechanicaGear size="lg" color="steel" speed="medium" />
                </div>
                <div className="text-lg font-bold mechanica-heading-professional text-mechanica-moonlight-blue mb-2">∞ Unlimited Precision</div>
                <div className="text-sm text-gray-600 mechanica-text-technical">Calculate any fractional amount</div>
              </div>
            </MechanicaCard>
            <MechanicaCard variant="mechanical" animated>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <MechanicaGear size="lg" color="brass" speed="slow" />
                </div>
                <div className="text-lg font-bold mechanica-heading-professional text-mechanica-moonlight-blue mb-2">💰 Cost Optimization</div>
                <div className="text-sm text-gray-600 mechanica-text-technical">Compare broker fee structures</div>
              </div>
            </MechanicaCard>
            <MechanicaCard variant="wood" animated>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <MechanicaGear size="lg" color="copper" speed="reverse" />
                </div>
                <div className="text-lg font-bold mechanica-heading-professional text-mechanica-moonlight-blue mb-2">📊 Visual Blueprints</div>
                <div className="text-sm text-gray-600 mechanica-text-technical">Interactive data visualization</div>
              </div>
            </MechanicaCard>
          </div>
        </div>
        </div>

        {/* Mechanical decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      </div>
    </MechanicaLayout>
  );
}
// Note: You would need to create the AnimatedGrid and DecorativeGear components 
// in the specified paths for this file to run without errors.