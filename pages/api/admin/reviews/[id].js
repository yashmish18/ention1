import { getServerSession } from "next-auth/next";
import authOptions from "../../auth/[...nextauth]";
import clientPromise from "utils/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // const session = await getServerSession(req, res, authOptions);
  
  // if (!session) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Missing review ID' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ention');

    // Delete the review
    const result = await db.collection('reviews').deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Review not found' });
    }

    res.status(200).json({ success: true, message: 'Review deleted successfully' });
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 