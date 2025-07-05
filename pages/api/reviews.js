import clientPromise from "utils/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, rating, text, productId, images, videos } = req.body;

      if (!name || !rating || !text || !productId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const client = await clientPromise;
      const db = client.db('ention');

      const review = {
        name,
        rating: parseInt(rating),
        text,
        productId,
        images: images || [],
        videos: videos || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const result = await db.collection('reviews').insertOne(review);

      res.status(201).json({ 
        success: true, 
        review: { ...review, _id: result.insertedId } 
      });
    } catch (error) {
      console.error('Error saving review:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    try {
      const { productId } = req.query;
      
      if (!productId) {
        return res.status(400).json({ error: 'Product ID is required' });
      }

      const client = await clientPromise;
      const db = client.db('ention');

      const reviews = await db.collection('reviews')
        .find({ productId })
        .sort({ createdAt: -1 })
        .toArray();

      res.status(200).json({ success: true, reviews });
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 