import React, { useState } from 'react';
import RiskAssessmentForm from '../components/RiskAssessmentForm';
import RiskAssessmentResult from '../components/RiskAssessmentResult';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';

// Define interface for risk data
interface RiskData {
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  recommendations: string[];
  portfolioMetrics: {
    volatility: number;
    diversification: number;
  };
}

export default function RiskAssessmentPage() {
  const [result, setResult] = useState<RiskData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <MechanicaLayout
      title="Risk Assessment Tool | BeginnerInvestorHub"
      description="Discover your risk profile and get a personalized investment allocation."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
        {/* Technical Grid Overlay */}
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
            {/* Decorative Gears */}
            <div className="absolute top-0 left-0">
              <MechanicaGear size="lg" color="steel" speed="slow" />
            </div>
            <div className="absolute top-10 right-10">
              <MechanicaGear size="xl" color="brass" speed="reverse" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <MechanicaGear size="xl" color="copper" speed="slow" />
              <h1 className="text-4xl md:text-5xl font-bold mechanica-heading-professional text-mechanica-moonlight-blue">
                Risk Assessment Tool
              </h1>
              <MechanicaGear size="xl" color="copper" speed="reverse" />
            </div>

            <div className="w-24 h-1 bg-mechanica-polished-brass mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mechanica-text-technical">
              <span className="font-semibold text-mechanica-moonlight-blue">
                Assembly Instructions:
              </span>{' '}
              Answer a few questions about your background, finances, and goals.
              Get a personalized risk score and asset allocation
              recommendation—constructed with precision and delivered instantly.
            </p>
          </div>

          {/* Error Display */}
          {error && (
            <MechanicaCard variant="default" className="mb-8 border-l-4 border-red-600 bg-red-50">
              <div className="p-6 flex items-start">
                <div className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5">✕</div>
                <div>
                  <h3 className="font-semibold text-red-900 mb-1 mechanica-heading-professional">
                    Assessment Error
                  </h3>
                  <p className="text-red-800 mechanica-text-technical">{error}</p>
                </div>
              </div>
            </MechanicaCard>
          )}

          {/* Form or Result */}
          {!result ? (
            <MechanicaCard variant="wood" animated className="bg-gradient-to-br from-blue-50 to-white">
              <div className="p-8">
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <MechanicaGear size="md" color="steel" speed="medium" />
                    <h2 className="text-2xl font-bold mechanica-heading-professional text-mechanica-moonlight-blue">
                      🔧 Build Your Risk Profile
                    </h2>
                  </div>
                  <p className="text-gray-600 mechanica-text-technical">
                    Complete the component assembly below to construct your
                    personalized investment blueprint.
                  </p>
                </div>
                <RiskAssessmentForm
                  onSubmit={async formData => {
                    setLoading(true);
                    setError(null);
                    try {
                      const res = await fetch('/api/risk-assessment-proxy', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData),
                      });
                      if (!res.ok) throw new Error(await res.text());
                      const data: RiskData = await res.json();
                      setResult(data);
                    } catch (e: unknown) {
                      const errorMessage = e instanceof Error ? e.message : 'Failed to assess risk. Please verify all components and try again.';
                      setError(errorMessage);
                    } finally {
                      setLoading(false);
                    }
                  }}
                  loading={loading}
                  error={error}
                />
              </div>
            </MechanicaCard>
          ) : (
            <MechanicaCard variant="default" animated className="bg-gray-900 border-gray-800">
              <div className="p-8">
                <div className="mb-6 pb-6 border-b border-gray-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <MechanicaGear size="md" color="brass" speed="slow" />
                    <h2 className="text-2xl font-bold mechanica-heading-professional text-white">
                      ⚙️ Your Constructed Risk Profile
                    </h2>
                  </div>
                  <p className="text-blue-100 mechanica-text-technical">
                    Assembly complete. Review your personalized specifications
                    below.
                  </p>
                </div>
                <RiskAssessmentResult
                  result={result}
                  onReset={() => {
                    setResult(null);
                    setError(null);
                  }}
                />
              </div>
            </MechanicaCard>
          )}

          {/* Assembly Instructions Footer */}
          <div className="mt-12 text-center">
            <MechanicaCard variant="mechanical" className="inline-flex items-center px-6 py-3">
              <div className="flex items-center space-x-3">
                <MechanicaGear size="sm" color="steel" speed="medium" />
                <span className="text-sm text-gray-700 font-medium mechanica-text-technical">
                  All assessments are processed securely with enterprise-grade encryption
                </span>
              </div>
            </MechanicaCard>
          </div>
        </div>
      </div>
    </MechanicaLayout>
  );
}
