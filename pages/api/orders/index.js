import { getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]";
import clientPromise from "utils/db";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const client = await clientPromise;
  const db = client.db('ention');

  // Fetch all orders for the logged-in user
  const orders = await db.collection('orders')
    .find({ 'user.email': session.user.email })
    .sort({ createdAt: -1 })
    .toArray();

  return res.status(200).json({ success: true, orders });
} 