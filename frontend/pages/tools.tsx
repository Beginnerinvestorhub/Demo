import React from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { MechanicaLayout } from '../components/layout/mechanicaLayout';
import { MechanicaCard } from '../components/ui/mechanicaCard';
import { MechanicaButton } from '../components/ui/mechanicaButton';
import { MechanicaGear } from '../components/ui/mechanicaGear';

const tools = [
  {
    name: 'Portfolio Simulation Engine',
    icon: '⚙️',
    description:
      'Build and test investment strategies in a risk-free environment with virtual capital.',
    href: '/portfolio-simulation',
    category: 'Core Tools',
    status: 'active',
    features: ['Virtual trading', 'Historical data', 'Performance tracking'],
    gearColor: 'steel' as const,
  },
  {
    name: 'AI Behavioral Coach',
    icon: '🧠',
    description:
      'Get real-time insights on emotional patterns and decision-making biases.',
    //href: '/ai-coach',
    category: 'Core Tools',
    status: 'active',
    features: [
      'Pattern recognition',
      'Nudge alerts',
      'Learning recommendations',
    ],
    gearColor: 'brass' as const,
  },
  {
    name: 'Risk Analysis Dashboard',
    icon: '📊',
    description:
      'Understand portfolio risk metrics with advanced analytics powered by Python.',
    href: '/risk-analysis',
    category: 'Core Tools',
    status: 'active',
    features: ['Sharpe ratio', 'Beta analysis', 'Volatility metrics'],
    gearColor: 'copper' as const,
  },
  {
    name: 'Market Data Explorer',
    icon: '📈',
    description:
      'Access real-time and historical market data from Alpha Vantage and Finnhub.',
    href: '/market-data',
    category: 'Research',
    status: 'active',
    features: ['Live quotes', 'Historical charts', 'Company fundamentals'],
    gearColor: 'steel' as const,
  },
  {
    name: 'Risk Assessment Quiz',
    icon: '🎯',
    description:
      'Discover your risk tolerance and get a personalized investment profile.',
    href: '/risk-assessment',
    category: 'Learning',
    status: 'active',
    features: [
      'Personality analysis',
      'Goal setting',
      'Custom recommendations',
    ],
    gearColor: 'brass' as const,
  },
  {
    name: 'Fractional Share Calculator',
    icon: '🧮',
    description:
      'Calculate how much of any stock you can buy with your available capital.',
    href: '/fractional-calculator',
    category: 'Utilities',
    status: 'active',
    features: ['Real-time prices', 'Cost breakdown', 'Multiple stocks'],
    gearColor: 'copper' as const,
  },
  {
    name: 'ESG/SRI Screener',
    icon: '🌍',
    description:
      'Screen investments for environmental, social, and governance factors.',
    href: '/esg-screener',
    category: 'Research',
    status: 'coming-soon',
    features: ['ESG ratings', 'Impact metrics', 'Sustainable portfolios'],
    gearColor: 'steel' as const,
  },
  {
    name: 'Learning Dashboard',
    icon: '📚',
    description:
      'Track your educational progress, achievements, and unlock new features.',
    href: '/learning',
    category: 'Learning',
    status: 'active',
    features: ['Progress tracking', 'Achievements', 'Gamification'],
    gearColor: 'brass' as const,
  },
];

export default function ToolsOverview() {
  const { user } = useAuth();

  const categories = ['All', 'Core Tools', 'Research', 'Learning', 'Utilities'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredTools =
    activeCategory === 'All'
      ? tools
      : tools.filter(tool => tool.category === activeCategory);

  return (
    <MechanicaLayout
      title="Investment Tools | Beginner Investor Hub"
      description="Explore our comprehensive suite of investment tools: portfolio simulation, AI coaching, risk analysis, market data, and more."
    >
      {/* Header */}
      <section className="mechanica-header relative bg-gradient-to-br from-mechanica-moonlight-blue via-mechanica-moonlight-blue-light to-mechanica-moonlight-blue-dark text-white overflow-hidden py-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <Link href="/" className="inline-block text-blue-100 hover:text-white mb-6 transition-colors mechanica-text-technical">
              ← Back to Home
            </Link>

            <div className="flex justify-center items-center space-x-6 mb-8">
              <MechanicaGear size="xl" color="brass" speed="slow" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mechanica-heading-professional text-white">
                Investment Tools
              </h1>
              <MechanicaGear size="xl" color="brass" speed="reverse" />
            </div>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-light mechanica-text-technical">
              Precision-engineered tools to accelerate your investing mastery
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-mechanica-polished-brass/20 bg-white p-1">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${activeCategory === category
                    ? 'bg-mechanica-moonlight-blue text-white shadow-lg'
                    : 'text-gray-600 hover:text-mechanica-moonlight-blue mechanica-text-technical'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredTools.map(tool => (
              <MechanicaCard
                key={tool.name}
                variant={tool.category === 'Core Tools' ? 'mechanical' : tool.category === 'Research' ? 'wood' : 'brass'}
                animated
                gearDecoration
                className="relative"
              >
                {tool.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-bold uppercase tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <MechanicaGear size="large" color={tool.gearColor} speed="medium" />
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-4xl mb-4">{tool.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 mechanica-heading-professional">
                      {tool.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed mechanica-text-technical text-center">
                    {tool.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-mechanica-polished-brass font-bold">✓</span>
                        <span className="text-sm text-gray-600 mechanica-text-technical">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {tool.status === 'active' ? (
                      user ? (
                        <Link href={tool.href}>
                          <MechanicaButton variant="mechanical" size="lg" className="w-full">
                            Launch Tool
                          </MechanicaButton>
                        </Link>
                      ) : (
                        <Link href="/signup">
                          <MechanicaButton variant="wood" size="lg" className="w-full">
                            Sign Up to Access
                          </MechanicaButton>
                        </Link>
                      )
                    ) : (
                      <MechanicaButton variant="wood" size="lg" className="w-full" disabled>
                        Coming Soon
                      </MechanicaButton>
                    )}
                  </div>
                </div>
              </MechanicaCard>
            ))}
          </div>

          {/* CTA Section */}
          {!user && (
            <MechanicaCard variant="mechanical" className="text-center">
              <div className="p-12">
                <div className="flex justify-center items-center space-x-6 mb-8">
                  <MechanicaGear size="large" color="brass" speed="slow" />
                  <h2 className="text-3xl font-bold mechanica-heading-professional text-mechanica-text-primary">
                    Ready to Start Building?
                  </h2>
                  <MechanicaGear size="large" color="brass" speed="reverse" />
                </div>

                <p className="text-xl text-mechanica-moonlight-blue mb-8 mechanica-text-technical">
                  Create a free account to access all our investment tools and
                  start your learning journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <MechanicaButton variant="mechanical" size="lg">
                      Create Free Account
                    </MechanicaButton>
                  </Link>
                  <Link href="/login">
                    <MechanicaButton variant="wood" size="lg">
                      Sign In
                    </MechanicaButton>
                  </Link>
                </div>
              </div>
            </MechanicaCard>
          )}
        </div>
      </section>
    </MechanicaLayout>
  );
}
