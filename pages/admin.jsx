import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { 
  FaChartLine, 
  FaShoppingCart, 
  FaStar
} from 'react-icons/fa';
import { DashboardTab, ReviewsTab, OrdersTab } from 'components/admin';

const AdminPanel = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    totalReviews: 0,
    monthlyRevenue: 0,
    pendingOrders: 0
  });
  const [reviews, setReviews] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login?redirect=/admin');
        return;
      }
      
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({
          name: payload.name,
          email: payload.email
        });
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
        router.push('/login?redirect=/admin');
        return;
      }
      setAuthLoading(false);
    };
    
    checkAuth();
    fetchDashboardData();
  }, [router]);

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 45000, orders: 12 },
    { month: 'Feb', revenue: 52000, orders: 15 },
    { month: 'Mar', revenue: 48000, orders: 13 },
    { month: 'Apr', revenue: 61000, orders: 18 },
    { month: 'May', revenue: 55000, orders: 16 },
    { month: 'Jun', revenue: 67000, orders: 20 },
  ];

  const productSalesData = [
    { name: 'E1 Laptop', sales: 45, revenue: 225000 },
    { name: 'E2 Laptop', sales: 32, revenue: 192000 },
    { name: 'E3 Laptop', sales: 28, revenue: 140000 },
    { name: 'E4 Laptop', sales: 22, revenue: 132000 },
    { name: 'E5 Laptop', sales: 18, revenue: 126000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch reviews
      const reviewsResponse = await fetch('/api/admin/reviews');
      const reviewsData = await reviewsResponse.json();
      
      // Fetch orders
      const ordersResponse = await fetch('/api/admin/orders');
      const ordersData = await ordersResponse.json();
      
      // Fetch stats
      const statsResponse = await fetch('/api/admin/stats');
      const statsData = await statsResponse.json();

      setReviews(reviewsData.reviews || []);
      setOrders(ordersData.orders || []);
      setStats(statsData.stats || {
        totalOrders: 0,
        totalRevenue: 0,
        totalCustomers: 0,
        totalReviews: 0,
        monthlyRevenue: 0,
        pendingOrders: 0
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteReview = async (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        const response = await fetch(`/api/admin/reviews/${reviewId}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          setReviews(reviews.filter(review => review._id !== reviewId));
          setStats(prev => ({ ...prev, totalReviews: prev.totalReviews - 1 }));
        }
      } catch (error) {
        console.error('Error deleting review:', error);
      }
    }
  };

  const updateOrderStatus = async (orderId, status) => {
    try {
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        setOrders(orders.map(order => 
          order._id === orderId ? { ...order, status } : order
        ));
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  // Show loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading Admin Panel...</div>
      </div>
    );
  }

  // Show unauthorized message if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Please log in to access the admin panel.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070D2A] via-[#133B5C] to-[#0FAFCA] pt-24">
      {/* Header */}
      <div className="shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white">Welcome, Admin (Testing Mode)</span>
              <button
                onClick={() => router.push('/')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition"
              >
                Back to Site
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-10">
        <div className="flex space-x-8 border-b border-gray-200">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: FaChartLine },
            { id: 'reviews', label: 'Reviews', icon: FaStar },
            { id: 'orders', label: 'Orders', icon: FaShoppingCart },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-white hover:text-blue-300 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {activeTab === 'dashboard' && (
          <DashboardTab stats={stats} revenueData={revenueData} productSalesData={productSalesData} COLORS={COLORS} />
        )}
        
        {activeTab === 'reviews' && (
          <ReviewsTab reviews={reviews} onDeleteReview={deleteReview} />
        )}
        
        {activeTab === 'orders' && (
          <OrdersTab orders={orders} onUpdateOrderStatus={updateOrderStatus} />
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 