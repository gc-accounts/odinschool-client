import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Redirect to the GraphQL endpoint
  response.redirect(301, 'https://google.com');
} 