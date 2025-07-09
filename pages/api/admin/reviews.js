import { getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";
import clientPromise from "utils/db";

export default async function handler(req, res) {
  // const session = await getServerSession(req, res, authOptions);
  
  // if (!session) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ention');

    // Get all reviews with sorting by creation date (newest first)
    const reviews = await db.collection('reviews')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 