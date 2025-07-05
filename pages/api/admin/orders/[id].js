import { getServerSession } from "next-auth/next";
import authOptions from "../../auth/[...nextauth]";
import clientPromise from "utils/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  // const session = await getServerSession(req, res, authOptions);
  
  // if (!session) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;
  const { status } = req.body;

  if (!id || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('ention');

    // Update order status
    const result = await db.collection('orders').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          status,
          updatedAt: new Date().toISOString()
        } 
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ success: true, message: 'Order status updated successfully' });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 