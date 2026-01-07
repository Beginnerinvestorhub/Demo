import { NextResponse } from 'next/server';

export async function GET() {
  // Mock portfolio data for demo mode
  const portfolioData = {
    balance: 12500.75,
    holdings: [
      {
        symbol: 'AAPL',
        shares: 50,
        price: 175.43,
        value: 8771.50
      },
      {
        symbol: 'GOOGL',
        shares: 20,
        price: 138.92,
        value: 2778.40
      },
      {
        symbol: 'MSFT',
        shares: 15,
        price: 378.91,
        value: 5683.65
      }
    ],
    totalValue: 27233.55,
    lastUpdated: new Date().toISOString()
  };

  return NextResponse.json(portfolioData);
}
