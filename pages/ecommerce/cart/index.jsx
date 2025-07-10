import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CartPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState(null); // orderId for which action is loading
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        if (data.success) setOrders(data.orders);
        else setError(data.error || "Failed to fetch orders");
      } catch (err) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleTrackOrder = async (orderId) => {
    setActionLoading(orderId);
    try {
      const res = await fetch(`/api/orders/${orderId}`);
      const data = await res.json();
      if (data.success) {
        alert(`Order Status: ${data.order.status}`);
      } else {
        alert(data.error || "Failed to track order");
      }
    } finally {
      setActionLoading(null);
    }
  };

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;
    setActionLoading(orderId);
    try {
      const res = await fetch(`/api/orders/${orderId}`, { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setOrders(orders => orders.map(o => o._id === orderId ? { ...o, status: "Cancelled" } : o));
        alert("Order cancelled successfully.");
      } else {
        alert(data.error || "Failed to cancel order");
      }
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white/90 rounded-xl shadow-md p-8 mt-32">
        <h1 className="text-3xl font-bold text-[#000f29] mb-8 text-center">Order Details</h1>
        {loading ? (
          <div className="text-center text-lg">Loading orders...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : orders.length === 0 ? (
          <div className="text-center text-gray-500">No orders found.</div>
        ) : (
          <div className="flex flex-col gap-6 mb-8">
            {orders.map(order => (
              <div key={order._id} className="flex items-center gap-6 border-b pb-4">
                <div className="flex-shrink-0 flex items-center justify-center" style={{minWidth: '64px', minHeight: '64px'}}>
                  <Image src={order.products[0]?.image || "/assets/0N1A1389.png"} alt={order.products[0]?.name || "Product"} width={64} height={64} className="rounded-lg object-contain bg-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#000f29]">{order.products[0]?.name || "Product"}</h3>
                  <p className="text-[#007e9e] font-bold">₹{order.products[0]?.price?.toLocaleString() || "-"}</p>
                  <p className="text-gray-700">Quantity: {order.products[0]?.quantity || 1}</p>
                  <p className={`font-semibold mt-1 ${order.status === "Cancelled" ? "text-red-500" : "text-green-600"}`}>Status: {order.status}</p>
                  <div className="flex flex-row gap-3 mt-4">
                    <button
                      className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold px-4 py-1.5 rounded-xl text-sm shadow-lg transition"
                      onClick={() => handleTrackOrder(order._id)}
                      disabled={actionLoading === order._id}
                    >
                      {actionLoading === order._id ? "Loading..." : "Track Order"}
                    </button>
                    {order.status === "Pending" && (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-1.5 rounded-xl text-sm shadow-lg transition"
                        onClick={() => handleCancelOrder(order._id)}
                        disabled={actionLoading === order._id}
                      >
                        {actionLoading === order._id ? "Loading..." : "Cancel Order"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 