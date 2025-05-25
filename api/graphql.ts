import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Redirect to the GraphQL endpoint
  response.redirect(301, 'http://13.203.229.113:1337/graphql');
} 