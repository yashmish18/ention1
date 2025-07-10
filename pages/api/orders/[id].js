import { getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";
import clientPromise from "utils/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing order id' });

  const client = await clientPromise;
  const db = client.db('ention');

  if (req.method === 'GET') {
    // Fetch order details
    const order = await db.collection('orders').findOne({ _id: new ObjectId(id), 'user.email': session.user.email });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    return res.status(200).json({ success: true, order });
  }

  if (req.method === 'POST') {
    // Cancel order
    const order = await db.collection('orders').findOne({ _id: new ObjectId(id), 'user.email': session.user.email });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    if (order.status && order.status.toLowerCase() !== 'pending') {
      return res.status(400).json({ error: 'Only pending orders can be cancelled' });
    }
    await db.collection('orders').updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: 'Cancelled', updatedAt: new Date().toISOString() } }
    );
    return res.status(200).json({ success: true, message: 'Order cancelled' });
  }

  if (req.method === 'PATCH' && req.query.track !== undefined) {
    // Track order (for extensibility, but usually GET is enough)
    const order = await db.collection('orders').findOne({ _id: new ObjectId(id), 'user.email': session.user.email });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    return res.status(200).json({ success: true, status: order.status, tracking: order.tracking || null });
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 