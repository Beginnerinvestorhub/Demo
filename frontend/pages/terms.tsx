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
          {/* Mechanical background decoration */}
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
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
        </section>

        {/* Main Content */}
        <main className="py-16">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
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
                      behavioral coaching, and investment monitoring.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-mechanica-moonlight-blue p-4 rounded-md my-6">
                      <strong className="text-mechanica-moonlight-blue">Important:</strong> All simulations are for
                      learning purposes. Always consult with qualified financial
                      professionals before making investment decisions.
                    </div>
                  </section>

                  {/* 2. User Responsibilities */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                      2. User Responsibilities
                    </h2>
                    <ul className="list-none pl-0 my-4 space-y-2">
                      {[
                        "Provide accurate information for results",
                        "Understand tools are educational only",
                        "Consult professionals for real decisions",
                        "Maintain account security",
                        "Comply with applicable laws",
                        "No reverse engineering of the platform"
                      ].map((item, i) => (
                        <li key={i} className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-mechanica-moonlight-blue before:font-bold">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* 3. Important Disclaimers */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                      3. Important Disclaimers
                    </h2>
                    <div className="bg-amber-50 border-l-4 border-yellow-500 p-4 rounded-md my-6">
                      <h3 className="text-yellow-600 mt-0 mb-3 text-lg font-bold">⚙️ Limitations</h3>
                      <ul className="list-none pl-0 space-y-2">
                        {[
                          { label: "No Financial Advice", text: "Nothing here is professional advice" },
                          { label: "Past Performance", text: "Does not guarantee future success" },
                          { label: "AI Limitations", text: "Insights are algorithmic" }
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
                      We take your privacy seriously and handle your data with care.
                    </p>
                    <p className="italic text-sm text-gray-600 mt-6">
                      Review our{' '}
                      <Link href="/privacy" className="text-mechanica-moonlight-blue font-semibold hover:underline">
                        Privacy Policy
                      </Link>.
                    </p>
                  </section>

                  {/* 5. Limitation of Liability */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                      5. Limitation of Liability
                    </h2>
                    <div className="bg-gray-50 border border-gray-300 p-6 rounded-md">
                      <p className="text-gray-700 leading-relaxed">
                        The platform and its operators are not liable for investment losses or data inaccuracies.
                      </p>
                    </div>
                  </section>

                  {/* 6. Contact Information */}
                  <section className="mb-12 bg-blue-50 p-6 rounded-lg border border-mechanica-moonlight-blue">
                    <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                      6. Contact Information
                    </h2>
                    <div className="mt-4 text-sm text-gray-700">
                      <p><strong>Email:</strong> info@beginnerinvestorhub.com</p>
                      <p><strong>Address:</strong> Charlotte, North Carolina, US</p>
                    </div>
                  </section>

                  {/* Footer Navigation */}
                  <div className="flex justify-center items-center flex-wrap gap-4 pt-12 mt-12 border-t border-gray-300">
                    <Link href="/privacy" className="text-mechanica-moonlight-blue font-semibold hover:opacity-80 transition duration-300">
                      Privacy Policy
                    </Link>
                    <span className="text-gray-400">•</span>
                    <Link href="/" className="text-mechanica-moonlight-blue font-semibold hover:opacity-80 transition duration-300">
                      Home
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
}