import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    id: "demo-user",
    name: "Demo User",
    email: "demo@example.com",
    joinedAt: "2024-01-01T00:00:00Z"
  });
}