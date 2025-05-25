// /api/graphql.js
export default async function handler(req, res) {
    const response = await fetch("http://13.203.229.113:1337/graphql", {
      method: req.method,
      headers: {
        ...req.headers,
        host: undefined, // remove host header if needed
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });
  
    const data = await response.json();
    res.status(response.status).json(data);
  }
  