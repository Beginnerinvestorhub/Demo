import React from 'react';
import FractionalShareCalculator from '../components/FractionalShareCalculator';
import { OrdinatusLayout } from '../components/layout/OrdinatusLayout';
import { OrdinatusCard } from '../components/ui/OrdinatusCard';
import { OrdinatusGear } from '../components/ui/OrdinatusGear';

export default function FractionalShareCalculatorPage() {
  return (
    <OrdinatusLayout 
      title="Fractional Share Calculator | BeginnerInvestorHub"
      description="Calculate how much of a stock you can buy with any amount."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
        {/* Blueprint Grid Overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 61, 122, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 61, 122, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>

        <div className="Ordinatus-container relative z-10 max-w-5xl mx-auto py-12">
          {/* Hero Section with Mechanical Elements */}
          <div className="text-center mb-12 relative">
            {/* Decorative Mechanical Gears */}
            <div className="absolute -top-6 left-8">
              <OrdinatusGear size="lg" color="steel" speed="slow" />
            </div>
            <div className="absolute top-0 right-12">
              <OrdinatusGear size="xl" color="brass" speed="reverse" />
            </div>
            <div className="absolute top-16 right-2">
              <OrdinatusGear size="md" color="copper" speed="medium" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <OrdinatusGear size="xl" color="steel" speed="slow" />
              <h1 className="text-4xl md:text-5xl font-bold Ordinatus-heading-primary text-Ordinatus-moonlight-blue">
                Fractional Share Calculator
              </h1>
              <OrdinatusGear size="xl" color="steel" speed="reverse" />
            </div>
            
            <div className="w-24 h-1 bg-Ordinatus-brass-gold mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed Ordinatus-text-body">
              <span className="font-semibold text-Ordinatus-moonlight-blue">
                Precision Engineering Tool:
              </span>{' '}
              Enter an investment amount and stock price to construct your
              fractional share assembly. Compare component costs across brokers
              and visualize your calculated purchase blueprint.
            </p>
          </div>

          {/* Calculator Feature Badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <OrdinatusCard variant="default" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-Ordinatus-moonlight-blue mr-2">🧮</div>
              <span className="text-sm text-gray-700 font-medium Ordinatus-text-technical">Precision Calculator</span>
            </OrdinatusCard>

            <OrdinatusCard variant="metallic" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-green-600 mr-2">💰</div>
              <span className="text-sm text-gray-700 font-medium Ordinatus-text-technical">Broker Comparison</span>
            </OrdinatusCard>

            <OrdinatusCard variant="wood" className="inline-flex items-center px-4 py-2">
              <div className="w-5 h-5 text-Ordinatus-brass-gold mr-2">📊</div>
              <span className="text-sm text-gray-700 font-medium Ordinatus-text-technical">Visual Analytics</span>
            </OrdinatusCard>
          </div>

          {/* Main Calculator Card */}
          <OrdinatusCard variant="professional" animated>
            <div className="p-8">
              {/* Calculator Header */}
              <div className="mb-8 pb-6 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <OrdinatusGear size="md" color="brass" speed="slow" />
                  <h2 className="text-2xl font-bold Ordinatus-heading-secondary text-white">
                    🔧 Component Calculation Engine
                  </h2>
                </div>
                <p className="text-blue-100 Ordinatus-text-body">
                  Configure your investment parameters below to construct your
                  fractional share specifications.
                </p>
              </div>

              {/* Calculator Component */}
              <FractionalShareCalculator />
            </div>
          </OrdinatusCard>

          {/* How It Works - Assembly Instructions */}
          <OrdinatusCard variant="wood" animated className="mt-12 bg-gradient-to-br from-blue-50 to-white">
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <OrdinatusGear size="md" color="steel" speed="medium" />
                  <h3 className="text-xl font-bold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue">
                    📐 Assembly Instructions
                  </h3>
                </div>
                <p className="text-gray-600 Ordinatus-text-body">
                  Follow these steps to construct your fractional share
                  calculation:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-Ordinatus-moonlight-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div className="font-semibold text-gray-900 mb-1">Input Specifications</div>
                  <p className="text-sm text-gray-600 Ordinatus-text-body">
                    Enter your investment amount and target stock price into the
                    calculation engine.
                  </p>
                </div>
                {/* Step 2 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-Ordinatus-brass-gold text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div className="font-semibold text-gray-900 mb-1">Process Components</div>
                  <p className="text-sm text-gray-600 Ordinatus-text-body">
                    System calculates precise fractional shares and compares
                    broker fee structures.
                  </p>
                </div>
                {/* Step 3 */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div className="font-semibold text-gray-900 mb-1">Deploy Results</div>
                  <p className="text-sm text-gray-600 Ordinatus-text-body">
                    Review visual blueprints and detailed cost analysis for
                    informed decision-making.
                  </p>
                </div>
              </div>
            </div>
          </OrdinatusCard>

          {/* Technical Specifications Footer */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <OrdinatusCard variant="default" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <OrdinatusGear size="lg" color="steel" speed="medium" />
                </div>
                <div className="text-lg font-bold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue mb-2">∞ Unlimited Precision</div>
                <div className="text-sm text-gray-600 Ordinatus-text-body">Calculate any fractional amount</div>
              </div>
            </OrdinatusCard>
            <OrdinatusCard variant="metallic" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <OrdinatusGear size="lg" color="brass" speed="slow" />
                </div>
                <div className="text-lg font-bold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue mb-2">💰 Cost Optimization</div>
                <div className="text-sm text-gray-600 Ordinatus-text-body">Compare broker fee structures</div>
              </div>
            </OrdinatusCard>
            <OrdinatusCard variant="wood" hover>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <OrdinatusGear size="lg" color="copper" speed="reverse" />
                </div>
                <div className="text-lg font-bold Ordinatus-heading-secondary text-Ordinatus-moonlight-blue mb-2">📊 Visual Blueprints</div>
                <div className="text-sm text-gray-600 Ordinatus-text-body">Interactive data visualization</div>
              </div>
            </OrdinatusCard>
          </div>
        </div>
      </div>
    </OrdinatusLayout>
  );
}
// Note: You would need to create the AnimatedGrid and DecorativeGear components 
// in the specified paths for this file to run without errors.