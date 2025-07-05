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

    // Get total orders and revenue
    const orders = await db.collection('orders').find({}).toArray();
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => {
      return sum + (order.payment?.amount ? order.payment.amount / 100 : 0);
    }, 0);

    // Get unique customers
    const uniqueCustomers = new Set(orders.map(order => order.user?.email || order.user?.phone)).size;

    // Get total reviews from database
    const reviews = await db.collection('reviews').find({}).toArray();
    const totalReviews = reviews.length;

    // Get monthly revenue (current month)
    const currentMonth = new Date();
    currentMonth.setDate(1);
    currentMonth.setHours(0, 0, 0, 0);
    
    const monthlyOrders = orders.filter(order => 
      new Date(order.createdAt) >= currentMonth
    );
    const monthlyRevenue = monthlyOrders.reduce((sum, order) => {
      return sum + (order.payment?.amount ? order.payment.amount / 100 : 0);
    }, 0);

    // Get pending orders
    const pendingOrders = orders.filter(order => 
      !order.status || order.status === 'pending'
    ).length;

    const stats = {
      totalOrders,
      totalRevenue,
      totalCustomers: uniqueCustomers,
      totalReviews,
      monthlyRevenue,
      pendingOrders
    };

    res.status(200).json({ success: true, stats });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 