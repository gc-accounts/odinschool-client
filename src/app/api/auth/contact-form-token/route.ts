import { NextResponse } from 'next/server';

const REFRESH_TOKEN = "1000.463135ae101920585aecfe50a582e5ac.1d9093f514f8d1250131b6924b632002";
const CLIENT_ID = "1000.401N6AWH2SH458HPUX99KPATH3S2NV";
const CLIENT_SECRET = "5a525b256a7aaaf3cd4a6c8ef61b41c301158cfa38";

export async function POST() {
  try {
    const response = await fetch('https://accounts.zoho.in/oauth/v2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        refresh_token: REFRESH_TOKEN,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to refresh token');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error refreshing token:', error);
    return NextResponse.json(
      { error: 'Failed to refresh token' },
      { status: 500 }
    );
  }
} 