import { NextResponse } from 'next/server';

const REFRESH_TOKEN = "1000.192eb5fb699811f840bc321e82d8fa5f.463d692e9b39daab7e9999dbab57afc8";
const CLIENT_ID = "1000.2OTWE0U7HISIOBKK041RP7SADEK1RU";
const CLIENT_SECRET = "0dc0ba79ef36fe55b7cda28cbd3f76bfc6dea61b88";

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
      throw new Error('Failed to refresh referral token');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error refreshing referral token:', error);
    return NextResponse.json(
      { error: 'Failed to refresh referral token' },
      { status: 500 }
    );
  }
}
