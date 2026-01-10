import React from 'react';
import Link from 'next/link';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';

export default function TermsOfService() {
  return (
    <MechanicaLayout
      title="Terms of Service | BeginnerInvestorHub"
      description="Read the Terms of Service for BeginnerInvestorHub - Educational investment tools and portfolio simulation platform."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-mechanica-moonlight-blue via-mechanica-moonlight-blue-light to-mechanica-moonlight-blue-dark text-white overflow-hidden">
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

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center items-center space-x-6 mb-8">
                <MechanicaGear size="large" color="brass" speed="slow" />
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
                  <span className="relative inline-block">
                    Terms of
                    <span className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full" />
                  </span>
                  <br />
                  <span className="text-yellow-400">Service</span>
                </h1>
                <MechanicaGear size="large" color="brass" speed="reverse" />
              </div>

              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-normal">
                Last Updated: October 6, 2025
              </p>

              <div className="flex justify-center">
                <Link href="/" className="text-white/80 hover:text-white underline decoration-yellow-400/50 transition-colors duration-200">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Mechanical decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
        </section>

        {/* Main Content */}
        <main className="py-16">
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <MechanicaCard variant="default" animated className="bg-white border-gray-200">
                <div className="p-8">
                  {/* Introduction */}
                  <section className="mb-12">
                    <p className="text-lg leading-relaxed text-gray-700">
                      Welcome to BeginnerInvestorHub. By accessing or using our
                      platform, you agree to be bound by these Terms of Service.
                      Please read them carefully before using our services.
                    </p>
                  </section>

                  {/* 1. Service Description */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                      1. Service Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      BeginnerInvestorHub.com provides educational financial tools
                      including risk assessment, portfolio simulation, AI-powered
                      behavioral coaching, and investment monitoring. These tools
                      are designed for educational and informational purposes only
                      and do not constitute financial advice, investment
                      recommendations, or professional financial planning services.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-mechanica-moonlight-blue p-4 rounded-md my-6">
                      <strong className="text-mechanica-moonlight-blue">Important:</strong> All simulations and tools are for
                      learning purposes. Always consult with qualified financial
                      professionals before making investment decisions.
                    </div>
                  </section>

                  {/* 2. User Responsibilities */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                      2. User Responsibilities
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">As a user of our platform, you agree to:</p>
                    <ul className="list-none pl-0 my-4 space-y-2">
                  </h2>
                  <div className="bg-amber-50 border-l-4 border-yellow-500 p-4 rounded-md my-6">
                    <h3 className="text-yellow-600 mt-0 mb-3 text-lg font-bold">
                      ⚙️ Important Disclaimers
                    </h3>
                    <ul className="list-none pl-0 space-y-2">
                      {[
                        { label: "No Financial Advice", text: "Nothing on this platform constitutes professional financial, investment, tax, or legal advice" },
                        { label: "Past Performance", text: "Past performance does not guarantee future results or investment success" },
                        { label: "Simulation Limitations", text: "Portfolio simulations are based on historical data and mathematical models that may not reflect real market conditions" },
                        { label: "Market Data", text: "Market data may be delayed, subject to provider limitations, and may contain errors" },
                        { label: "Estimates Only", text: "All results, projections, and calculations are estimates and may not reflect actual investment outcomes" },
                        { label: "AI Limitations", text: "AI-generated insights are based on algorithms and may not account for all variables or personal circumstances" }
                      ].map((item, i) => (
                        <li key={i} className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-yellow-500 before:font-bold">
                          <strong className="text-gray-900">{item.label}:</strong> {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* 4. Data Usage */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    4. Data Usage & Privacy
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We take your privacy seriously and handle your data with care:
                  </p>
                  <ul className="list-none pl-0 my-4 space-y-2">
                    <li className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-mechanica-moonlight-blue before:font-bold">
                      Personal information is encrypted and stored securely using industry-standard practices
                    </li>
                    <li className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-mechanica-moonlight-blue before:font-bold">
                      Market data is provided by licensed third-party providers (Alpha Vantage, Finnhub)
                    </li>
                    <li className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-mechanica-moonlight-blue before:font-bold">
                      User data is not shared with unauthorized third parties without your consent
                    </li>
                  </ul>
                  <p className="italic text-sm text-gray-600 mt-6">
                    For detailed information, please review our{' '}
                    <Link href="/privacy" className="text-mechanica-moonlight-blue font-semibold hover:underline">
                      Privacy Policy
                    </Link>.
                  </p>
                </section>

                {/* 5. Account Management */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    5. Account Management
                  </h2>
                  <h3 className="text-xl text-gray-900 mt-6 mb-3 font-medium">Account Creation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You must provide accurate information when creating an account. You are responsible for maintaining credentials.
                  </p>
                </section>

                {/* 6. Limitation of Liability */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    6. Limitation of Liability
                  </h2>
                  <div className="bg-gray-50 border border-gray-300 p-6 rounded-md my-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong className="text-red-700 uppercase tracking-widest text-xs">To the maximum extent permitted by law:</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The platform, its operators, and affiliates are not liable for investment losses or inaccuracies in data.
                      You acknowledge that investing involves risk and you are solely responsible for your decisions.
                    </p>
                  </div>
                </section>

                {/* 7. Contact Information */}
                <section className="mb-12 bg-blue-50 p-6 rounded-lg border border-mechanica-moonlight-blue">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    7. Contact Information
                  </h2>
                  <div className="mt-4 text-sm">
                    <p className="mb-2 text-gray-700">
                      <strong className="font-semibold text-gray-900">Email:</strong> info@beginnerinvestorhub.com
                    </p>
                    <p className="mb-2 text-gray-700">
                      <strong className="font-semibold text-gray-900">Address:</strong> Charlotte, North Carolina, United States
                    </p>
                  </div>
                </section>

                {/* Footer Navigation */}
                <div className="flex justify-center items-center flex-wrap gap-4 pt-12 mt-12 border-t border-gray-300">
                  <Link href="/privacy" className="text-mechanica-moonlight-blue font-semibold hover:text-mechanica-moonlight-blue transition duration-300">
                    Privacy Policy
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/" className="text-mechanica-moonlight-blue font-semibold hover:text-mechanica-moonlight-blue transition duration-300">
                    Home
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/contact" className="text-mechanica-moonlight-blue font-semibold hover:text-mechanica-moonlight-blue transition duration-300">
                    Contact
                  </Link>
                </div>
              </div>
            </MechanicaCard>
          </div>
        </div>
      </main>
      </div>
    </MechanicaLayout>
  );
};

export default Terms;