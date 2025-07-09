export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { productId } = req.query;
    try {
      const response = await fetch(`http://localhost:4000/api/reviews?productId=${productId}`);
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to fetch reviews' });
    }
  } else if (req.method === 'POST') {
    const { name, rating, text, productId, images, videos } = req.body;
    try {
      const response = await fetch('http://localhost:4000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, text, productId, images, videos }),
      });
      const data = await response.json();
      return res.status(response.status).json(data);
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Failed to submit review' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
} 