import React from 'react';
import Link from 'next/link';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';

export default function TermsOfService() {
  return (
    <MechanicaLayout
      title="Terms of Service | Beginner Investor Hub"
      description="Read the Terms of Service for Beginner Investor Hub - Educational investment tools and portfolio simulation platform."
    >
      {/* Root Container */}
      <div className="min-h-screen bg-[var(--mechanica-bg-metallic)] text-[var(--mechanica-text-primary)]">

        {/* HEADER SECTION */}
        <header className="bg-[var(--mechanica-moonlight-blue-metallic)] text-white py-16 md:py-24 shadow-lg border-b border-[var(--mechanica-moonlight-blue-dark)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-block text-white no-underline mb-4 text-sm opacity-80 hover:opacity-100 transition duration-300 mechanica-font-mechanical">
              ← Back to Home
            </Link>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-2 text-white font-extrabold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm opacity-75 mechanica-font-technical">Last Updated: October 6, 2025</p>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* CENTRAL CARD */}
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-12 lg:p-16 rounded-lg shadow-xl border border-[var(--mechanica-moonlight-blue)] relative overflow-hidden">

              {/* Top Accent Bar (Brass Gradient replacing yellow) */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--mechanica-brass-gradient)]"></div>

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-lg leading-relaxed text-[var(--mechanica-text-primary)]">
                  Welcome to Beginner Investor Hub. By accessing or using our
                  platform, you agree to be bound by these Terms of Service.
                  Please read them carefully before using our services.
                </p>
              </section>

              {/* 1. Service Description */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
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
                <div className="bg-[var(--mechanica-bg-mechanical)] border-l-4 border-[var(--mechanica-moonlight-blue)] p-4 rounded-md my-6 shadow-inner">
                  <strong className="text-[var(--Ordinatus-professional-blue)]">Important:</strong> All simulations and tools are for
                  learning purposes. Always consult with qualified financial
                  professionals before making investment decisions.
                </div>
              </section>

              {/* 2. User Responsibilities */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  2. User Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">As a user of our platform, you agree to:</p>
                <ul className="list-none pl-0 my-4 space-y-2">
                  {[
                    "Provide accurate and complete information for personalized results",
                    "Understand that all tools are educational in nature and not financial advice",
                    "Consult qualified financial professionals for investment decisions",
                    "Maintain the security and confidentiality of your account credentials",
                    "Use the platform in compliance with all applicable laws and regulations",
                    "Not attempt to manipulate, reverse engineer, or abuse the platform",
                    "Not share your account access with unauthorized parties"
                  ].map((item, i) => (
                    <li key={i} className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[var(--mechanica-moonlight-blue)] before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 3. Disclaimers (Using Polished Brass for status indicators) */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  3. Educational Nature & Disclaimers
                </h2>
                <div className="bg-[#FAF7F0] border-l-4 border-[var(--mechanica-polished-brass)] p-4 rounded-md my-6 shadow-sm">
                  <h3 className="text-[var(--mechanica-polished-brass)] mt-0 mb-3 text-lg font-bold mechanica-font-mechanical">
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
                      <li key={i} className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[var(--mechanica-polished-brass)] before:font-bold">
                        <strong className="text-gray-900">{item.label}:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 4. Data Usage */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  4. Data Usage & Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We take your privacy seriously and handle your data with care:
                </p>
                <ul className="list-none pl-0 my-4 space-y-2">
                  <li className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[var(--mechanica-moonlight-blue)] before:font-bold">
                    Personal information is encrypted and stored securely using industry-standard practices
                  </li>
                  <li className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[var(--mechanica-moonlight-blue)] before:font-bold">
                    Market data is provided by licensed third-party providers (Alpha Vantage, Finnhub)
                  </li>
                  <li className="relative pl-6 text-gray-700 leading-relaxed before:content-['▸'] before:absolute before:left-0 before:text-[var(--mechanica-moonlight-blue)] before:font-bold">
                    User data is not shared with unauthorized third parties without your consent
                  </li>
                </ul>
                <p className="italic text-sm text-gray-600 mt-6">
                  For detailed information, please review our{' '}
                  <Link href="/privacy" className="text-[var(--Ordinatus-professional-blue)] font-semibold hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </section>

              {/* 5. Account Management */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  5. Account Management
                </h2>
                <h3 className="text-xl text-[var(--mechanica-text-primary)] mt-6 mb-3 font-medium">Account Creation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must provide accurate information when creating an account. You are responsible for maintaining credentials.
                </p>
              </section>

              {/* 6. Limitation of Liability */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  6. Limitation of Liability
                </h2>
                <div className="bg-gray-50 border border-[var(--mechanica-stainless-steel)] p-6 rounded-md my-6 mechanica-shadow-engraved">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong className="text-red-700 uppercase tracking-widest text-xs">To the maximum extent permitted by law:</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The platform, its operators, and affiliates are not liable for investment losses or inaccuracies in data.
                    You acknowledge that investing involves risk and you are solely responsible for your decisions.
                  </p>
                </div>
              </section>

              {/* 11. Contact Information */}
              <section className="mb-12 bg-[var(--mechanica-bg-mechanical)] p-6 rounded-lg border border-[var(--mechanica-moonlight-blue)] shadow-sm">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  11. Contact Information
                </h2>
                <div className="mt-4 mechanica-font-technical text-sm">
                  <p className="mb-2 text-gray-700">
                    <strong className="font-semibold text-gray-900">Email:</strong> info@beginnerinvestorhub.com
                  </p>
                  <p className="mb-2 text-gray-700">
                    <strong className="font-semibold text-gray-900">Address:</strong> Charlotte, North Carolina, United States
                  </p>
                </div>
              </section>

              {/* FOOTER NAVIGATION */}
              <div className="flex justify-center items-center flex-wrap gap-4 pt-12 mt-12 border-t border-[var(--Ordinatus-accent-silver)]">
                <Link href="/privacy" className="text-[var(--Ordinatus-professional-blue)] no-underline font-semibold hover:text-[var(--mechanica-moonlight-blue)] transition duration-300">
                  Privacy Policy
                </Link>
                <span className="text-[var(--Ordinatus-accent-silver)] opacity-50">•</span>
                <Link href="/" className="text-[var(--Ordinatus-professional-blue)] no-underline font-semibold hover:text-[var(--mechanica-moonlight-blue)] transition duration-300">
                  Home
                </Link>
                <span className="text-[var(--Ordinatus-accent-silver)] opacity-50">•</span>
                <Link href="/contact" className="text-[var(--Ordinatus-professional-blue)] no-underline font-semibold hover:text-[var(--mechanica-moonlight-blue)] transition duration-300">
                  Contact
                </Link>
              </div>

            </div>
          </div>
        </main>
      </div>
    </MechanicaLayout>
  );
}