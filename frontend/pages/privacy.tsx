import React from 'react';
import Link from 'next/link';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';

export default function PrivacyPolicy() {
  return (
    <MechanicaLayout
      title="Privacy Policy | BeginnerInvestorHub"
      description="Read our Privacy Policy - Learn how we protect your personal information and data on BeginnerInvestorHub."
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
                    Privacy
                    <span className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full" />
                  </span>
                  <br />
                  <span className="text-yellow-400">Policy</span>
                </h1>
                <MechanicaGear size="large" color="brass" speed="reverse" />
              </div>

              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-normal">
                Last Updated: January 2025
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
                    At BeginnerInvestorHub, we are committed to protecting your
                    privacy and ensuring the security of your personal
                    information. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our
                    website and use our services.
                  </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    1. Information We Collect
                  </h2>

                  <h3 className="text-xl text-mechanica-moonlight-blue mb-3 mt-6 font-medium font-serif">
                    Personal Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect the following personal information when you use our
                    platform:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc text-gray-700">
                    <li>Name and email address when you create an account</li>
                    <li>
                      Profile information you choose to provide (display name,
                      avatar)
                    </li>
                    <li>Communication preferences and notification settings</li>
                    <li>
                      Financial goals, risk tolerance, and investment preferences
                      (for personalized recommendations)
                    </li>
                    <li>Portfolio simulation data and investment choices</li>
                    <li>
                      Behavioral patterns and learning progress for AI coaching
                    </li>
                  </ul>

                  <h3 className="text-xl text-mechanica-moonlight-blue mb-3 mt-6 font-medium font-serif">
                    Usage Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We automatically collect certain information about your device
                    and how you interact with our platform:
                  </p>
                  <ul className="space-y-2 ml-6 list-disc text-gray-700">
                    <li>
                      Pages visited, features used, and time spent on our platform
                    </li>
                    <li>
                      Device information (browser type, operating system, IP
                      address, device identifiers)
                    </li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>
                      Educational progress, gamification achievements, and
                      completion rates
                    </li>
                    <li>Search queries and interaction patterns</li>
                    <li>Referral source and navigation paths</li>
                  </ul>

                  <h3 className="text-xl text-mechanica-moonlight-blue mb-3 mt-6 font-medium font-serif">
                    Market Data
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We access market data through third-party providers (Alpha
                    Vantage, Finnhub) to power our simulation tools. This data is
                    not personal to you but is used in aggregate to provide
                    accurate portfolio analysis.
                  </p>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    2. How We Use Your Information
                  </h2>
                  <ul className="space-y-3 ml-6 list-disc text-gray-700">
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Service Provision:
                      </strong>
                      Deliver personalized investment tools, educational content,
                      portfolio simulations, and AI-powered behavioral coaching
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Account Management:
                      </strong>
                      Create and maintain your account, process authentication via
                      Firebase, and provide customer support
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Personalization:
                      </strong>
                      Customize your experience based on your financial goals, risk
                      tolerance, and learning progress
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Communication:
                      </strong>
                      Send important updates, educational newsletters, feature
                      announcements, and service notifications
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Analytics:
                      </strong>
                      Analyze usage patterns to improve our platform, develop new
                      features, and optimize user experience
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Security:
                      </strong>
                      Detect and prevent fraud, abuse, unauthorized access, and
                      security threats
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        AI Training:
                      </strong>
                      Improve our AI behavioral coaching algorithms (anonymized and
                      aggregated data only)
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Legal Compliance:
                      </strong>
                      Comply with applicable laws, regulations, and legal processes
                    </li>
                  </ul>
                </section>

                {/* Information Sharing */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    3. Information Sharing and Disclosure
                  </h2>
                  <div className="bg-amber-50 border-l-4 border-yellow-500 p-4 mb-4 rounded">
                    <strong className="text-mechanica-moonlight-blue">
                      We do not sell, trade, or rent your personal information to
                      third parties.
                    </strong>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information only in the following
                    circumstances:
                  </p>
                  <ul className="space-y-3 ml-6 list-disc text-gray-700">
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Service Providers:
                      </strong>
                      Trusted third-party vendors who assist in operating our
                      platform:
                      <ul className="ml-6 mt-2 space-y-1 list-circle">
                        <li>Vercel (frontend hosting)</li>
                        <li>Render (backend infrastructure)</li>
                        <li>Firebase (authentication)</li>
                        <li>PostgreSQL (database hosting)</li>
                        <li>Redis (caching service)</li>
                        <li>OpenAI (AI processing)</li>
                        <li>Email service providers</li>
                      </ul>
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Market Data Providers:
                      </strong>
                      Alpha Vantage and Finnhub for real-time and historical market
                      data
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Legal Requirements:
                      </strong>
                      When required by law, court order, subpoena, or government
                      regulation
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Business Transfers:
                      </strong>
                      In connection with a merger, acquisition, reorganization, or
                      sale of business assets
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Consent:
                      </strong>
                      When you explicitly consent to sharing your information
                    </li>
                    <li>
                      <strong className="text-mechanica-moonlight-blue">
                        Affiliate Partners:
                      </strong>
                      Anonymized data for affiliate marketing performance tracking
                      (no personally identifiable information)
                    </li>
                  </ul>
                </section>

                {/* Data Security */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    4. Data Security
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{
                        icon: "",
                        title: "Encryption",
                        desc: "SSL/TLS encryption for all data transmission"
                      },
                      {
                        icon: "",
                        title: "Secure Infrastructure",
                        desc: "Enterprise-grade cloud with security audits"
                      },
                      {
                        icon: "",
                        title: "Access Controls",
                        desc: "Multi-factor authentication and role-based access"
                      },
                      {
                        icon: "",
                        title: "Monitoring",
                        desc: "24/7 security monitoring and intrusion detection"
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl">{item.icon}</span>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Contact Information */}
                <section className="mb-12 bg-blue-50 p-6 rounded-lg border border-mechanica-moonlight-blue">
                  <h2 className="text-2xl font-bold text-mechanica-moonlight-blue mb-4 pb-2 border-b-2 border-mechanica-moonlight-blue font-serif">
                    5. Contact Us
                  </h2>
                  <div className="mt-4 text-sm">
                    <p className="mb-2 text-gray-700">
                      <strong className="font-semibold text-gray-900">Email:</strong> privacy@beginnerinvestorhub.com
                    </p>
                    <p className="mb-2 text-gray-700">
                      <strong className="font-semibold text-gray-900">Location:</strong> Charlotte, North Carolina, United States
                    </p>
                  </div>
                </section>

                {/* Footer Navigation */}
                <div className="flex justify-center items-center flex-wrap gap-4 pt-12 mt-12 border-t border-gray-300">
                  <Link href="/terms" className="text-mechanica-moonlight-blue font-semibold hover:text-mechanica-moonlight-blue transition duration-300">
                    Terms of Service
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
}
