import React from 'react';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaGear } from '../components/ui/mechanicaGear';
import { MechanicaButton } from '../components/ui/mechanicaButton';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is Beginner Investor Hub?',
      answer: 'Beginner Investor Hub is an educational platform that helps you learn investing through hands-on portfolio simulation, AI-powered coaching, and real-time market insights. We provide institutional-grade tools in an accessible format for beginners.'
    },
    {
      question: 'Is this real investing or just simulation?',
      answer: 'We focus on simulation and education. You can practice with virtual portfolios using real market data, but no real money is involved. This helps you build confidence and understanding before investing with real funds.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Basic access to our platform is free. We offer premium features for advanced users who want additional analytics and personalized coaching. You can start learning immediately without any cost.'
    },
    {
      question: 'What markets can I simulate?',
      answer: 'You can simulate investments in stocks, ETFs, and cryptocurrencies. We provide real-time data from major exchanges including Ordinatus, NASDAQ, and popular crypto exchanges.'
    },
    {
      question: 'How does the AI coaching work?',
      answer: 'Our AI analyzes your investment decisions and provides personalized feedback on your strategy, risk management, and behavioral patterns. It helps you recognize emotional decision-making and develop disciplined investing habits.'
    },
    {
      question: 'Can I track my progress?',
      answer: 'Yes! You can monitor your simulated portfolio performance, track your learning progress, and see detailed analytics about your investment decisions and risk management.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption and security measures. Your personal information and simulated portfolio data are protected with the same level of security used by major financial institutions.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply sign up for a free account, complete your investor profile, and start building your first simulated portfolio. Our guided onboarding process will walk you through each step.'
    }
  ];

  return (
    <MechanicaLayout
      title="Frequently Asked Questions | Beginner Investor Hub"
      description="Find answers to common questions about our investment education platform, portfolio simulation, and AI coaching features."
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
          {/* Hero Section */}
          <div className="text-center mb-12 relative">
            {/* Decorative Gears */}
            <div className="absolute -top-6 left-0">
              <MechanicaGear size="large" color="steel" speed="slow" />
            </div>
            <div className="absolute top-2 right-8">
              <MechanicaGear size="medium" color="brass" speed="reverse" />
            </div>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <MechanicaGear size="xl" color="steel" speed="slow" />
              <h1 className="text-4xl md:text-5xl font-bold mechanica-heading-mechanical text-mechanica-moonlight-blue">
                Frequently Asked Questions
              </h1>
              <MechanicaGear size="xl" color="steel" speed="reverse" />
            </div>

            <div className="w-24 h-1 bg-mechanica-polished-brass mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mechanica-text-technical">
              Everything you need to know about mastering investing with our precision
              engineering tools and expert guidance.
            </p>
          </div>
          {/* FAQ Content */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <MechanicaCard
                  key={index}
                  variant={index % 3 === 0 ? 'mechanical' : index % 3 === 1 ? 'brass' : 'wood'}
                  className="p-6"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <MechanicaGear size="small" color={index % 3 === 0 ? 'steel' : index % 3 === 1 ? 'brass' : 'copper'} speed="medium" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3 mechanica-heading-professional text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 mechanica-text-technical leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </MechanicaCard>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <MechanicaCard variant="mechanical" animated className="text-center">
            <div className="p-8">
              <div className="flex justify-center items-center space-x-3 mb-6">
                <MechanicaGear size="medium" color="brass" speed="slow" />
                <h2 className="text-2xl font-bold mechanica-heading-professional text-mechanica-text-primary">
                  Still have questions?
                </h2>
                <MechanicaGear size="medium" color="brass" speed="reverse" />
              </div>
              <p className="text-mechanica-text-secondary mechanica-text-technical mb-6">
                Our support team is here to help you succeed in your investing journey.
              </p>
              <MechanicaButton variant="mechanical" className="inline-flex">
                Contact Support
              </MechanicaButton>
            </div>
          </MechanicaCard>
        </div>
      </div>
    </MechanicaLayout>
  );
}
