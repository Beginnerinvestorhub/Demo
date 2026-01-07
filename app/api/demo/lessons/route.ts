import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    lessons: [
      {
        id: 1,
        title: "Introduction to Investing",
        completed: true,
        progress: 100
      },
      {
        id: 2,
        title: "Understanding Risk",
        completed: false,
        progress: 60
      },
      {
        id: 3,
        title: "Portfolio Diversification",
        completed: false,
        progress: 0
      }
    ]
  });
}