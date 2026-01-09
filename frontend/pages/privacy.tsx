import Link from 'next/link';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';

export default function PrivacyPolicy() {
  return (
    <MechanicaLayout
      title="Privacy Policy | Beginner Investor Hub"
      description="Read our Privacy Policy - Learn how we protect your personal information and data on Beginner Investor Hub."
    >

      <div className="min-h-screen bg-[var(--mechanica-bg-metallic)] text-[var(--mechanica-text-primary)]">

        {/* HEADER SECTION */}
        <header className="bg-[var(--mechanica-moonlight-blue-metallic)] text-white py-16 md:py-24 shadow-lg border-b border-[var(--mechanica-moonlight-blue-dark)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-block text-white no-underline mb-4 text-sm opacity-80 hover:opacity-100 transition duration-300 font-mono">
              ← Back to Home
            </Link>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-2 text-white font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm opacity-75 font-mono">Last Updated: January 2025</p>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* CENTRAL CARD */}
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-12 lg:p-16 rounded-lg shadow-xl border border-[var(--mechanica-moonlight-blue)] relative overflow-hidden">

              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[var(--mechanica-polished-brass)]"></div>

              {/* Introduction */}
              <section className="mb-12">
                <p className="text-lg leading-relaxed text-[var(--mechanica-text-primary)]">
                  At Beginner Investor Hub, we are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you visit our
                  website and use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  1. Information We Collect
                </h2>

                <h3 className="font-serif text-xl text-[var(--mechanica-moonlight-blue)] mb-3 mt-6 font-medium">
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

                <h3 className="font-serif text-xl text-[var(--mechanica-moonlight-blue)] mb-3 mt-6 font-medium">
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

                <h3 className="font-serif text-xl text-[var(--mechanica-moonlight-blue)] mb-3 mt-6 font-medium">
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
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  2. How We Use Your Information
                </h2>
                <ul className="space-y-3 ml-6 list-disc text-gray-700">
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Service Provision:</strong> Deliver personalized
                    investment tools, educational content, portfolio
                    simulations, and AI-powered behavioral coaching
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Account Management:</strong> Create and maintain
                    your account, process authentication via Firebase, and
                    provide customer support
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Personalization:</strong> Customize your experience
                    based on your financial goals, risk tolerance, and learning
                    progress
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Communication:</strong> Send important updates,
                    educational newsletters, feature announcements, and service
                    notifications
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Analytics:</strong> Analyze usage patterns to
                    improve our platform, develop new features, and optimize
                    user experience
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Security:</strong> Detect and prevent fraud, abuse,
                    unauthorized access, and security threats
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">AI Training:</strong> Improve our AI behavioral
                    coaching algorithms (anonymized and aggregated data only)
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Legal Compliance:</strong> Comply with applicable
                    laws, regulations, and legal processes
                  </li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--Ordinatus-professional-blue)] mb-4 pb-2 border-b-2 border-[var(--mechanica-moonlight-blue)] font-semibold">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="bg-[var(--mechanica-bg-wood)] border-l-4 border-[var(--mechanica-polished-brass)] p-4 mb-4 rounded">
                  <strong className="text-[var(--mechanica-moonlight-blue)]">
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
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Service Providers:</strong> Trusted third-party
                    vendors who assist in operating our platform:
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
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Market Data Providers:</strong> Alpha Vantage and
                    Finnhub for real-time and historical market data
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Legal Requirements:</strong> When required by law,
                    court order, subpoena, or government regulation
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Business Transfers:</strong> In connection with a
                    merger, acquisition, reorganization, or sale of business
                    assets
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Consent:</strong> When you explicitly consent to
                    sharing your information
                  </li>
                  <li>
                    <strong className="text-[var(--mechanica-moonlight-blue)]">Affiliate Partners:</strong> Anonymized data for
                    affiliate marketing performance tracking (no personally
                    identifiable information)
                  </li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="privacy-section">
                <h2>4. Data Security</h2>
                <p>
                  We implement robust security measures to protect your personal
                  information:
                </p>
                <div className="security-grid">
                  <div className="security-item">
                    <div className="security-icon">🔒</div>
                    <h4>Encryption</h4>
                    <p>
                      SSL/TLS encryption for all data transmission between your
                      device and our servers
                    </p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">🛡️</div>
                    <h4>Secure Infrastructure</h4>
                    <p>
                      Enterprise-grade cloud infrastructure with regular
                      security audits and penetration testing
                    </p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">🔑</div>
                    <h4>Access Controls</h4>
                    <p>
                      Multi-factor authentication, role-based access controls,
                      and least-privilege principles
                    </p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">📊</div>
                    <h4>Monitoring</h4>
                    <p>
                      24/7 security monitoring, intrusion detection, and
                      incident response protocols
                    </p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">🔄</div>
                    <h4>Regular Updates</h4>
                    <p>
                      Continuous security patches, dependency updates, and
                      vulnerability scanning
                    </p>
                  </div>
                  <div className="security-item">
                    <div className="security-icon">👥</div>
                    <h4>Staff Training</h4>
                    <p>
                      Comprehensive employee training on data protection,
                      privacy, and security best practices
                    </p>
                  </div>
                </div>
                <div className="warning-box">
                  <strong>Important:</strong> While we implement
                  industry-standard security measures, no method of transmission
                  over the internet or electronic storage is 100% secure. We
                  cannot guarantee absolute security.
                </div>
              </section>

              {/* Privacy Rights */}
              <section className="privacy-section">
                <h2>5. Your Privacy Rights</h2>
                <p>
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="styled-list">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate or
                    incomplete personal information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information (subject to legal retention requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Export your data in a
                    machine-readable format (JSON/CSV)
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from marketing
                    communications at any time via email footer links
                  </li>
                  <li>
                    <strong>Restriction:</strong> Limit how we process your
                    personal information
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your
                    information for certain purposes
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw previously given
                    consent at any time
                  </li>
                </ul>
                <p className="rights-note">
                  To exercise any of these rights, please contact us at
                  privacy@beginnerinvestorhub.com. We will respond within 30
                  days.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section className="privacy-section">
                <h2>6. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar technologies to enhance your
                  experience:
                </p>
                <div className="cookie-table">
                  <div className="cookie-row">
                    <div className="cookie-type">
                      <strong>Essential Cookies</strong>
                      <span className="cookie-badge required">Required</span>
                    </div>
                    <p>
                      Necessary for basic platform functionality,
                      authentication, and security. Cannot be disabled.
                    </p>
                  </div>
                  <div className="cookie-row">
                    <div className="cookie-type">
                      <strong>Analytics Cookies</strong>
                      <span className="cookie-badge optional">Optional</span>
                    </div>
                    <p>
                      Help us understand how you use our platform to improve
                      features and user experience.
                    </p>
                  </div>
                  <div className="cookie-row">
                    <div className="cookie-type">
                      <strong>Preference Cookies</strong>
                      <span className="cookie-badge optional">Optional</span>
                    </div>
                    <p>
                      Remember your settings, preferences, and previous choices
                      for a personalized experience.
                    </p>
                  </div>
                  <div className="cookie-row">
                    <div className="cookie-type">
                      <strong>Marketing Cookies</strong>
                      <span className="cookie-badge optional">Optional</span>
                    </div>
                    <p>
                      Deliver relevant content, advertisements, and track
                      affiliate marketing performance.
                    </p>
                  </div>
                </div>
                <p className="cookie-control">
                  You can control cookie settings through your browser
                  preferences. Note that disabling certain cookies may limit
                  platform functionality.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="privacy-section">
                <h2>7. Children&apos;s Privacy</h2>
                <div className="legal-box">
                  <p>
                    Our services are not intended for individuals under 18 years
                    of age. We do not knowingly collect personal information
                    from children under 18. If we become aware that we have
                    collected such information, we will take immediate steps to
                    delete it promptly.
                  </p>
                  <p>
                    If you are a parent or guardian and believe your child has
                    provided us with personal information, please contact us at
                    privacy@beginnerinvestorhub.com.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section className="privacy-section">
                <h2>8. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary
                  to:
                </p>
                <ul className="styled-list">
                  <li>Provide our services and maintain your account</li>
                  <li>
                    Comply with legal obligations and regulatory requirements
                  </li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>
                    Improve our services through analytics (anonymized data)
                  </li>
                </ul>
                <p>
                  When you delete your account, we will delete or anonymize your
                  personal information within 90 days, except where retention is
                  required by law or for legitimate business purposes.
                </p>
              </section>

              {/* International Transfers */}
              <section className="privacy-section">
                <h2>9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in
                  countries other than your own, including the United States. We
                  ensure appropriate safeguards are in place to protect your
                  information in accordance with applicable data protection laws
                  (GDPR, CCPA, etc.).
                </p>
                <p>
                  Our third-party service providers are contractually obligated
                  to protect your data and comply with applicable privacy
                  regulations.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="privacy-section">
                <h2>10. Third-Party Links and Services</h2>
                <p>
                  Our platform may contain links to third-party websites,
                  products, or services (including affiliate links). We are not
                  responsible for the privacy practices of these third parties.
                  We encourage you to review their privacy policies before
                  providing any personal information.
                </p>
              </section>

              {/* Contact Information */}
              <section className="privacy-section contact-section">
                <h2>11. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to
                  exercise your privacy rights, please contact us:
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    info@beginnerinvestorhub.com
                  </div>
                  <div className="contact-item">
                    <strong>General Support:</strong>{' '}
                    info@beginnerinvestorhub.com
                  </div>
                  <div className="contact-item">
                    <strong>Location:</strong> Charlotte, North Carolina, United
                    States
                  </div>
                  <div className="contact-item">
                    <strong>Response Time:</strong> We will respond to your
                    inquiry within 30 days
                  </div>
                </div>
              </section>

              {/* Updates to Policy */}
              <section className="privacy-section">
                <h2>12. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  other operational needs. We will notify you of any material
                  changes by:
                </p>
                <ul className="styled-list">
                  <li>
                    Posting the updated policy on our website with a new &quot;Last
                    Updated&quot; date
                  </li>
                  <li>Sending an email notification to registered users</li>
                  <li>
                    Displaying a prominent notice on our platform for 30 days
                  </li>
                </ul>
                <p>
                  Your continued use of the platform after changes take effect
                  constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              {/* Footer Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <Link href="/terms" className="text-[var(--mechanica-moonlight-blue)] hover:text-[var(--mechanica-moonlight-blue-dark)] mx-2 transition-colors duration-200">
                  Terms of Service
                </Link>
                <span className="mx-2 text-gray-400">•</span>
                <Link href="/" className="text-[var(--mechanica-moonlight-blue)] hover:text-[var(--mechanica-moonlight-blue-dark)] mx-2 transition-colors duration-200">
                  Home
                </Link>
                <span className="mx-2 text-gray-400">•</span>
                <Link href="/contact" className="text-[var(--mechanica-moonlight-blue)] hover:text-[var(--mechanica-moonlight-blue-dark)] mx-2 transition-colors duration-200">
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
