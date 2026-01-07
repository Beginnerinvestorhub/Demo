'use client';

import { useState, useEffect } from 'react';

interface PortfolioData {
  balance: number;
  holdings: Array<{
    symbol: string;
    shares: number;
    price: number;
    value: number;
  }>;
  totalValue: number;
  lastUpdated: string;
}

export default function Home() {
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/api/demo/portfolio');
        const data = await response.json();
        setPortfolio(data);
      } catch (error) {
        console.error('Failed to fetch portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Beginner Investor Hub
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Learn investing fundamentals through interactive simulations and guided content.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto">
          {/* Portfolio Overview */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Portfolio Overview
            </h2>
            
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Loading portfolio data...</p>
              </div>
            ) : portfolio ? (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Account Balance</h3>
                  <div className="text-3xl font-bold text-blue-600">
                    ${portfolio.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Total Portfolio Value</h3>
                  <div className="text-3xl font-bold text-green-600">
                    ${portfolio.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-red-600">
                Failed to load portfolio data
              </div>
            )}
          </section>

          {/* Holdings */}
          {portfolio && (
            <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Current Holdings
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Symbol
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Shares
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {portfolio.holdings.map((holding, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {holding.symbol}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {holding.shares}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${holding.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${holding.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Learning Resources */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Learning Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Investment Basics</h3>
                <p className="text-gray-600">Understand stocks, bonds, and portfolio diversification fundamentals.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Risk Management</h3>
                <p className="text-gray-600">Learn how to assess and manage investment risk effectively.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Market Analysis</h3>
                <p className="text-gray-600">Explore technical and fundamental analysis techniques.</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium">
              Educational demo only. Not financial advice.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © 2024 Beginner Investor Hub. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
